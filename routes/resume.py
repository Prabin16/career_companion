from flask import Blueprint, request, jsonify
import openai

resume_blueprint = Blueprint("resume", __name__)

# Set OpenAI API Key
openai.api_key = "your-api-key"

@resume_blueprint.route("/", methods=["POST"])
def generate_resume():
    data = request.json
    job_title = data.get("job_title")
    skills = data.get("skills", [])

    prompt = f"Create a professional resume for a {job_title}. Highlight the following skills: {', '.join(skills)}."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300,
        temperature=0.7
    )

    resume_content = response.choices[0].text.strip()
    print(resume_content)
    return jsonify({"resume": resume_content})
