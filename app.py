from flask import Flask, render_template, request, jsonify
import os
from flask_cors import CORS
import openai


# Get the API key from the environment
openai.api_key = os.getenv("OPENAI_API_KEY")
print(openai.api_key)
app = Flask(__name__)
CORS(app)

# Helper function to generate text using GPT-3.5-Turbo
def generate_text(messages, max_tokens=200, model="gpt-3.5-turbo"):
    try:
        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            max_tokens=max_tokens,
            temperature=0.7,
        )
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        return str(e)

# Homepage
@app.route("/")
def index():
    return render_template("index.html")

# API for Resume Builder
@app.route("/resume", methods=["GET", "POST"])
def resume():
    if request.method == "POST":
        data = request.get_json()
        job_title = data.get("job_title", "Software Engineer")
        skills = data.get("skills", [])

        messages = [
            {"role": "system", "content": "You are a professional resume writer."},
            {
                "role": "user",
                "content": f"Create a detailed professional resume for a {job_title}. "
                           f"Highlight the following skills: {', '.join(skills)}. "
                           "Include a professional summary, work experience, education, and relevant projects."
            }
        ]
        generated_resume = generate_text(messages)
        return jsonify({"resume": generated_resume})
    return render_template("resume.html")

# API for Interview Simulator
@app.route("/interview", methods=["GET", "POST"])
def interview():
    if request.method == "POST":
        data = request.get_json()
        job_title = data.get("job_title", "Software Engineer")

        messages = [
            {"role": "system", "content": "You are an expert interviewer."},
            {
                "role": "user",
                "content": f"Generate 10 interview questions for a {job_title} role."
            }
        ]
        interview_questions = generate_text(messages)
        return jsonify({"questions": interview_questions})
    return render_template("interview.html")

# API for Career Coaching
@app.route("/coaching", methods=["GET", "POST"])
def coaching():
    if request.method == "POST":
        data = request.get_json()
        career_goal = data.get("career_goal", "become a software architect")

        messages = [
            {"role": "system", "content": "You are a professional career coach."},
            {
                "role": "user",
                "content": f"Provide actionable advice for someone with the goal: {career_goal}."
            }
        ]
        coaching_advice = generate_text(messages)
        return jsonify({"advice": coaching_advice})
    return render_template("coaching.html")

# API for Skill Recommendations
@app.route("/skills", methods=["GET", "POST"])
def skills():
    if request.method == "POST":
        data = request.get_json()
        current_role = data.get("current_role", "Software Engineer")

        messages = [
            {"role": "system", "content": "You are an expert in skill development and training."},
            {
                "role": "user",
                "content": f"Suggest the most important skills for someone in the role of {current_role} to learn in 2024."
            }
        ]
        skill_recommendations = generate_text(messages)
        return jsonify({"skills": skill_recommendations})
    return render_template("skills.html")

if __name__ == "__main__":
    app.run(debug=True)
