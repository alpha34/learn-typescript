enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike
console.log(myShoes);  // 0 출력.. 기본적인 값으로 0이 나옴.

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike
console.log(myShoes2);  // '나이키'


//예제
enum Answer { 
    Yes = 'Y',
    No = 'N'
}

// 이넘 활용 사례 (예제)
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }

    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);

// askQuestion('Yes');
// askQuestion('y');
// askQuestion('예스');