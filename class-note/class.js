// 생성자 함수형
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);


/////////////////////////////////////////////////  위 코드와 아래 코드는 같다...


//Class:  ES2015 (ES6)에서 나온 문법
class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var hongki = new Person('홍기', 30); // 생성되었습니다.
console.log(hongki);