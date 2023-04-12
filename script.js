const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice button');

let currentQuestion = 0;
let score = {
  I: 0,
  E: 0,
  N: 0,
  S: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0
};

const questions = [
  {
    image: 'https://example.com/question1.jpg',
    question: '문항 1: 이것보다 저것이 더 좋다는 것에 동의하십니까?',
    choices: ['예', '아니오'],
    score: ['N', 'S']
  },
  {
    image: 'https://example.com/question2.jpg',
    question: '문항 2: 아침에 일어나는 것이 어려우십니까?',
    choices: ['예', '아니오'],
    score: ['I', 'E']
  },
  // 총 16개의 문항이 있어야 합니다.
];

function loadQuestion() {
  const q = questions[currentQuestion];
  question.innerHTML = `
    <img src="${q.image}">
    <p>${q.question}</p>
    <div class="choice">
      <button id="choice1" class="btn">${q.choices[0]}</button>
      <button id="choice2" class="btn">${q.choices[1]}</button>
    </div>
  `;
}

function nextQuestion(choice) {
  const selectedScore = {
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0
  };
  
  if (currentQuestion < questions.length - 1) {
    if (choice === questions[currentQuestion].choices[0]) {
      selectedScore[questions[currentQuestion].score[0]] = 1;
    } else {
      selectedScore[questions[currentQuestion].score[1]] = 1;
    }
    
    Object.keys(score).forEach((key) => {
      score[key] += selectedScore[key];
    });
    
    currentQuestion++;
    loadQuestion();
  } else {
    // 결과를 계산하고 출력하는 코드를 작성합니다.
    const result = calculateResult(score);
    const resultText = getResultText(result);
    const resultImage = getResultImage(result);
    question.innerHTML = `
      <img src="${resultImage}">
      <p>${resultText}</p>
      <p>점수:</p>
      <ul>
        <li>I: ${score.I}</li>
        <li>E: ${score.E}</li>
        <li>N: ${score.N}</li>
        <li>S: ${score.S}</li>
        <li>F: ${score.F}</li>
        <li>T: ${score.T}</li>
        <li>P: ${score.P}</li>
        <li>J: ${score.J}</li>
      </ul>
    `;
  }
}

function calculateResult(score) {
  let result = '';
  result += score.I > score.E ? 'I' : 'E';
  result += score.N > score.S ? 'N' : 'S';
  result += score.F > score.T ? 'F' : 'T';
  result += score.P > score.J ? 'P' : 'J';
  return result;
}


function getResultText(result) {
  let resultText = '당신의 MBTI 유형은 ';
  switch(result) {
    case 'ISTJ':
      resultText += 'ISTJ (신중한 관리자)입니다.';
      break;
    case 'ISFJ':
      resultText += 'ISFJ (용감한 수호자)입니다.';
      break;
    case 'INFJ':
      resultText += 'INFJ (선의의 옹호자)입니다.';
      break;
    case 'INTJ':
      resultText += 'INTJ (용의주도한 전략가)입니다.';
      break;
    case 'ISTP':
      resultText += 'ISTP (만능 재주꾼)입니다.';
      break;
    case 'ISFP':
      resultText += 'ISFP (호기심 많은 예술가)입니다.';
      break;
    case 'INFP':
      resultText += 'INFP (열정적인 중재자)입니다.';
      break;
    case 'INTP':
      resultText += 'INTP (논리적인 사색가)입니다.';
      break;
    case 'ESTP':
      resultText += 'ESTP (모험을 즐기는 사업가)입니다.';
      break;
    case 'ESFP':
      resultText += 'ESFP (자유로운 영혼의 연예인)입니다.';
      break;
    case 'ENFP':
      resultText += 'ENFP (재기발랄한 활동가)입니다.';
      break;
    case 'ENTP':
      resultText += 'ENTP (뜨거운 논쟁을 즐기는 변론가)입니다.';
      break;
    case 'ESTJ':
      resultText += 'ESTJ (엄격한 관리자)입니다.';
      break;
    case 'ESFJ':
      resultText += 'ESFJ (사교적인 외교관)입니다.';
      break;
    case 'ENFJ':
      resultText += 'ENFJ (정의로운 사회운동가)입니다.';
      break;
    case 'ENTJ':
      resultText += 'ENTJ (대담한 통솔자)입니다.';
      break;
    default:
      resultText += '알 수 없습니다.';
  }
  return resultText;
}

function getResultImage(result) {
  let resultImage = '';
  switch(result) {
    case 'ISTJ':
    case 'ISFJ':
    case 'INFJ':
    case 'INTJ':
      resultImage = 'https://example.com/result1.jpg';
      break;
    case 'ISTP':
    case 'ISFP':
    case 'INFP':
    case 'INTP':
      resultImage = 'https://example.com/result2.jpg';
      break;
    case 'ESTP':
    case 'ESFP':
    case 'ENFP':
    case 'ENTP':
      resultImage = 'https://example.com/result3.jpg';
      break;
    case 'ESTJ':
    case 'ESFJ':
    case 'ENFJ':
    case 'ENTJ':
      resultImage = 'https://example.com/result4.jpg';
      break;
    default:
      resultImage = '';
  }
  return resultImage;
}

loadQuestion();