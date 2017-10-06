from flask import Flask, render_template, request, redirect 

app = Flask(__name__)   
                         
@app.route('/')         
def survey():
  return render_template("survey.html")

@app.route('/results')
def results():
    return render_template("results.html")

@app.route('/survey', methods = ['POST'])
def create_user():
    name = request.form["name"]
    location = request.form["location"]
    language = request.form["language"]
    comments = request.form["comments"]
    return render_template("results.html", name = name, location = location, language = language, comments = comments)
    
app.run(debug=True)  