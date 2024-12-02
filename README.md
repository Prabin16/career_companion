
# **Career Companion**

Career Companion is a Flask-based web application powered by OpenAI's GPT-3.5-Turbo. It offers four key features to assist users in their career development:

1. **Resume Builder**: Generates detailed resumes based on job titles and skills.
2. **Interview Simulator**: Provides tailored interview questions for a given role.
3. **Career Coaching**: Offers actionable advice for achieving career goals.
4. **Skill Recommendations**: Suggests relevant skills to learn based on your current role.

---

## **Features**
- **Resume Builder**: Input a job title and skills, and get a complete resume with a professional summary, work experience, and projects.
- **Interview Simulator**: Receive mock interview questions customized for your role.
- **Career Coaching**: Get tailored advice for your career goals.
- **Skill Recommendations**: Discover essential skills to stay competitive in your field.

---

## **Prerequisites**
1. **Python**: Version 3.7 or higher.
2. **OpenAI API Key**: An active API key from [OpenAI](https://platform.openai.com/).
3. **Libraries**:
   - Flask
   - OpenAI

Install required libraries:
```bash
pip install flask openai
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/career-companion.git
cd career-companion
```

### **2. Set Your OpenAI API Key**
You need to load your OpenAI API key as an environment variable for secure access.

#### On Linux/Mac:
Add this line to your shell configuration file (`~/.bashrc`, `~/.zshrc`, etc.):
```bash
export OPENAI_API_KEY="your-api-key"
```
Reload the shell:
```bash
source ~/.bashrc
```

#### On Windows:
Command Prompt:
```bash
set OPENAI_API_KEY="your-api-key"
```

PowerShell:
```bash
$env:OPENAI_API_KEY = "your-api-key"
```

### **3. Run the Flask Application**
Start the application:
```bash
python app.py
```

### **4. Access the Application**
Open your browser and navigate to:
```
http://127.0.0.1:5000/
```

---

## **Project Structure**
```
career_companion/
├── app.py
├── routes/
│   ├── resume.py
│   ├── interview.py
│   ├── career_coaching.py
│   ├── skill_recommendation.py
├── templates/
│   ├── index.html
│   ├── resume.html
│   ├── interview.html
│   ├── coaching.html
│   ├── skills.html
└── README.md            # Project documentation
```

---

## **Features in Detail**

### **Resume Builder**
- **Route**: `/resume`
- **Description**: Generates a detailed resume based on a job title and a list of skills.
- **Input**: Job title, skills (comma-separated).
- **Output**: A complete resume in plain text.

### **Interview Simulator**
- **Route**: `/interview`
- **Description**: Provides 10 mock interview questions for a specified job title.
- **Input**: Job title.
- **Output**: List of tailored interview questions.

### **Career Coaching**
- **Route**: `/coaching`
- **Description**: Offers personalized advice for achieving a career goal.
- **Input**: Career goal.
- **Output**: Actionable career advice.

### **Skill Recommendations**
- **Route**: `/skills`
- **Description**: Suggests the most relevant skills for a given role.
- **Input**: Current role.
- **Output**: List of skills to learn.

---

## **Troubleshooting**

### **1. 405 Method Not Allowed**
Ensure the form or JavaScript sends a `POST` request for routes that expect data submission.

### **2. OpenAI API Key Errors**
- Ensure the API key is set correctly in your environment.
- Check your usage limits at [OpenAI Dashboard](https://platform.openai.com/account/usage).

### **3. Missing Dependencies**
Install required libraries:
```bash
pip install flask openai
```

---

## **Future Improvements**
- Add PDF export for resumes.
- Implement user authentication for saving session data.
- Integrate additional AI models or APIs for enhanced features.

---

## **License**
This project is licensed under the MIT License.
