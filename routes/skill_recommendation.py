from flask import Blueprint, request, jsonify
import openai

skill_blueprint = Blueprint("skill", __name__)

@skill_blueprint.route("/", methods=["POST"])
def recommend_skills():
    data = request.json
    current_role = data.get("current_role")

    prompt = f"Suggest important skills for someone in the role of {current_role} to learn in 2024."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150,
        temperature=0.7
    )

    skills = response.choices[0].text.strip()

    return jsonify({"skills": skills})
