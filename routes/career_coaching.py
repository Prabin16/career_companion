from flask import Blueprint, request, jsonify
import openai

coaching_blueprint = Blueprint("coaching", __name__)

@coaching_blueprint.route("/", methods=["POST"])
def career_advice():
    data = request.json
    career_goal = data.get("career_goal")

    prompt = f"Provide actionable career advice for someone with the goal: {career_goal}."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150,
        temperature=0.7
    )

    advice = response.choices[0].text.strip()

    return jsonify({"advice": advice})
