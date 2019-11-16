import os
import json
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
    return render_template("heatmap.html", page_title="Heat Map")

if __name__ == '__main__':
    app.run()