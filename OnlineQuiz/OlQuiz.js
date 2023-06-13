function submitQuiz() {
    const answers = {
      q1: "b",
      q2: "a",
      q3: "b"
    };
  
    let score = 0;
    const totalQuestions = Object.keys(answers).length;
  
    for (let i = 1; i <= totalQuestions; i++) {
      const question = "q" + i;
      const selectedOption = document.querySelector('input[name="' + question + '"]:checked');
  
      if (selectedOption && selectedOption.value === answers[question]) {
        score++;
      }
    }
  
    const quizResult = document.getElementById("quizResult");
    quizResult.textContent = "Your score: " + score + "/" + totalQuestions;
  }
  