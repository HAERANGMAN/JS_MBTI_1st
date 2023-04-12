const questions = [
        {
          question: '1. 당신의 현재 기분은?',
          answers: [
            {
              text: '좋음',
              result: '1_1.jpg'
            },
            {
              text: '나쁨',
              result: '1_2.jpg'
            }
          ]
        },
        {
          question: '2. 빨간색과 파란색 중 어떤 색깔을 더 좋아하시나요?',
          answers: [
            {
              text: '빨간색',
              result: '2_1.jpg'
            },
            {
              text: '파란색',
              result: '2_2.jpg'
            }
          ]
        },
        // 이하 생략
      ];
      
      let currentQuestionIndex = 0;
      
      const container = document.querySelector('.container');
      const questionEl = container.querySelector('.question h2');
      const answerEl = container.querySelector('.answer');
      const resultEl = container.querySelector('.result img');
      
      function showQuestion(question) {
        questionEl.textContent = question.question;
      
        answerEl.innerHTML = '';
        for (const answer of question.answers) {
          const button = document.createElement('button');
          button.textContent = answer.text;
          button.addEventListener('click', () => {
            showResult(answer.result);
          });
          answerEl.appendChild(button);
        }
      }
      
      function showResult(result) {
        resultEl.src = result;
      
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion(questions[currentQuestionIndex]);
        } else {
          container.removeChild(questionEl.parentNode);
          container.removeChild(answerEl);
        }
      }
      
      showQuestion(questions[currentQuestionIndex]);