from flask import Blueprint, request, jsonify
import openai

interview_blueprint = Blueprint("interview", __name__)

@interview_blueprint.route("/", methods=["POST"])
def generate_interview_questions():
    data = request.json
    job_title = data.get("job_title")

    prompt = f"Generate 10 interview questions for the position of {job_title}."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=200,
        temperature=0.7
    )

    questions = response.choices[0].text.strip()

    return jsonify({"questions": questions})
