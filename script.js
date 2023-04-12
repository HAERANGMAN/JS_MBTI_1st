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
    image: 'https://picsum.photos/200/300?random=1',
    question: '문항 1: 이것보다 저것이 더 좋다는 것에 동의하십니까?',
    choices: ['예', '아니오'],
    score: ['N', 'S']
  },
  {
    image: 'https://picsum.photos/200/300?random=2',
    question: '문항 2: 휴대폰을 자주 사용하십니까?',
    choices: ['예', '아니오'],
    score: ['E', 'I']
  },
  {
    image: 'https://picsum.photos/200/300?random=3',
    question: '문항 3: 일을 미루지 않고 바로 처리하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['J', 'P']
  },
  {
    image: 'https://picsum.photos/200/300?random=4',
    question: '문항 4: 누군가가 말을 할 때 집중해서 듣는 편입니까?',
    choices: ['예', '아니오'],
    score: ['S', 'N']
  },
  {
    image: 'https://picsum.photos/200/300?random=5',
    question: '문항 5: 타인과 대화할 때 자신의 생각을 잘 표현할 수 있는 편입니까?',
    choices: ['예', '아니오'],
    score: ['T', 'F']
  },
  {
    image: 'https://picsum.photos/200/300?random=6',
    question: '문항 6: 새로운 사람을 만날 때 친구가 되려고 노력하십니까?',
    choices: ['예', '아니오'],
    score: ['E', 'I']
  },
  {
    image: 'https://picsum.photos/200/300?random=7',
    question: '문항 7: 결정을 내릴 때 감정보다는 논리를 중요시하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['T', 'F']
  },
  {
    image: 'https://picsum.photos/200/300?random=8',
    question: '문항 8: 실용성보다는 이론과 개념을 중요시하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['N', 'S']
  },
  {
    image: 'https://picsum.photos/200/300?random=9',
    question: '문항 9: 주로 외향적인 성격을 가지고 있습니까?',
    choices: ['예', '아니오'],
    score: ['E', 'I']
  },
  {
    image: 'https://picsum.photos/200/300?random=10',
    question: '문항 10: 의견 차이가 있을 때 갈등을 피하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['J', 'P']
    },
    {
    image: 'https://picsum.photos/200/300?random=11',
    question: '문항 11: 문제를 해결하는데 시간이 오래 걸려도 인내심을 가지고 차근차근 해결하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['J', 'P']
    },
    {
    image: 'https://picsum.photos/200/300?random=12',
    question: '문항 12: 자신의 감정을 솔직하게 표현하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['F', 'T']
    },
    {
    image: 'https://picsum.photos/200/300?random=13',
    question: '문항 13: 새로운 상황에 대처하는 데 유연하게 대처하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['P', 'J']
    },
    {
    image: 'https://picsum.photos/200/300?random=14',
    question: '문항 14: 상대방의 의견을 경청하며 이해하려고 노력하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['F', 'T']
    },
    {
    image: 'https://picsum.photos/200/300?random=15',
    question: '문항 15: 여러 가지 일을 동시에 처리하는 것을 좋아하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['S', 'N']
    },
    {
    image: 'https://picsum.photos/200/300?random=16',
    question: '문항 16: 다른 사람들의 주의를 받는 것을 좋아하는 편입니까?',
    choices: ['예', '아니오'],
    score: ['E', 'I']
    }
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