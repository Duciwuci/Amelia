from flask import Flask
app = Flask(__name__)

# env FLASK_APP=src/main.py flask run
@app.route('/')
def hello_world():
    return 'Hello, World!'