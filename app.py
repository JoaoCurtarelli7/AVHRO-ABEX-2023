from flask import Flask, jsonify

app = Flask(__name__)

# Exemplo de dados (pode ser substituído por dados do banco de dados)
dados = [
    {"id": 1, "nome": "Item 1"},
    {"id": 2, "nome": "Item 2"},
    {"id": 3, "nome": "Item 3"}
]

@app.route('/api/dados', methods=['GET'])
def obter_dados():
    return jsonify({"dados": dados})

if __name__ == '__main__':
    app.run(debug=True)
