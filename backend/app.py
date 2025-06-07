from flask import Flask, request, jsonify, send_from_directory,render_template
from flask_cors import CORS
import mercadopago
import os
app = Flask(__name__)
CORS(app)

# Configura tu Access Token de MercadoPago
ACCESS_TOKEN = "APP_USR-8865402744006785-060715-73959ea851e8f4a6629a63a5a2160189-2481401609"
sdk = mercadopago.SDK(ACCESS_TOKEN)

# Ruta simple para verificar que el servidor anda
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/pedido", methods=["POST"])
def recibir_pedido():
    data = request.json
    print("Pedido recibido:", data)

    # Ejemplo de preferencia de pago
    preference_data = {
        "items": [
            {
                "title": data.get("title", "Producto"),
                "quantity": data.get("quantity", 1),
                "currency_id": "ARS",
                "unit_price": float(data.get("unit_price", 100))
            }
        ]
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]

    return jsonify({
        "mensaje": "Pedido recibido correctamente",
        "preference_id": preference.get("id"),
        "init_point": preference.get("init_point")
    }), 200

if __name__ == "__main__":
    app.run(debug=True)