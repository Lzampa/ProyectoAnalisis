from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite que tu frontend acceda al backend

# Ruta simple para verificar que el servidor anda
@app.route("/")
def home():
    return "Servidor funcionando correctamente"

# Ruta para recibir pedidos desde el frontend
@app.route("/pedido", methods=["POST"])
def recibir_pedido():
    data = request.json
    print("Pedido recibido:", data)

    # Aquí podrías guardar el pedido en un archivo o base de datos
    return jsonify({"mensaje": "Pedido recibido correctamente"}), 200

if __name__ == "__main__":
    app.run(debug=True)

#comentario para guardar