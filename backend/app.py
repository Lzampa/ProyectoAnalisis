import os
import hmac
import hashlib
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mercadopago
from dotenv import load_dotenv

load_dotenv()
ACCESS_TOKEN = os.getenv("MP_ACCESS_TOKEN")
WEBHOOK_SECRET = os.getenv("MP_WEBHOOK_SECRET")

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

sdk = mercadopago.SDK(ACCESS_TOKEN)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/create_preference", methods=["POST"])
def create_preference():
    data = request.get_json(force=True) or {}
    items = data.get("items", [])

    if not items:
        return jsonify({"error": "no_items"}), 400

    # Formatear correctamente los items
    for it in items:
        it.setdefault("currency_id", "ARS")
        it["unit_price"] = float(it.get("unit_price", 0))
        it["quantity"] = int(it.get("quantity", 1))

    preference_data = {
        "items": items,
        # Remover auto_return y back_urls por ahora
        "binary_mode": True,
        "statement_descriptor": "RESTO_DINA",
        "external_reference": "ORDEN_" + str(hash(str(items)))[:8]
    }

    try:
        result = sdk.preference().create(preference_data)
        if result.get("status") != 201:
            return jsonify({
                "error": "mp_error",
                "detail": result.get("response")
            }), 502

        pref = result["response"]
        link = pref.get("init_point") or pref.get("sandbox_init_point")

        if not link:
            return jsonify({"error": "no_link_in_response", "full_response": pref}), 502

        return jsonify({"init_point": link, "preference_id": pref["id"]})

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": "exception", "message": str(e)}), 500

@app.route("/webhook", methods=["POST"])
def webhook():
    raw_body: bytes = request.data
    sig_header = request.headers.get("x-mercadopago-signature", "").replace("sha256=", "")

    expected_sig = hmac.new(WEBHOOK_SECRET.encode(), raw_body, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(sig_header, expected_sig):
        print("❌ Firma inválida en webhook")
        return "Bad signature", 400

    event = request.get_json(silent=True) or {}
    topic = event.get("type")
    entity_id = event.get("data", {}).get("id")

    try:
        if topic == "payment":
            payment = sdk.payment().get(entity_id)["response"]
            status = payment["status"]
            print(f"🔔 Pago {entity_id} → {status}")
        elif topic == "merchant_order":
            order = sdk.merchant_order().get(entity_id)["response"]
            print(f"🔔 Orden {entity_id} recibida")
    except Exception as err:
        print("💥 Error consultando la API:", err)
    return "OK", 200

@app.route("/status/<estado>")
def payment_status(estado):
    return f"Estado del pago: {estado}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
