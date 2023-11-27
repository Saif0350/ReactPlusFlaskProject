from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Route

@app.route("/members")
def members():
    return {"members": ["Member1","Member2","Member3"]}

@app.route("/home")
def home():
    return render_template('home.html')


if __name__ == "__main__":
    app.run(debug=True)