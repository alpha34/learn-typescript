// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);


// 유니온 타입 : 하나의 타입 이외에 다른 타입도 사용할 수 있음.
var hk: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}

// 유니온 타입 |
function askSomone(somone: Developer2 | Person2) {
    somone.name;
    // somone.skill; //error
    // somone.age; //error
}

var hk3: string | number | boolean;

// 인터셉션 타입 &
var hk4: string & number & boolean;
// 인터셉션 타입을 사용할 경우, 모두 사용할 수 있음 
function askSomone2(somone: Developer2 & Person2) {
    somone.name;
    somone.skill;  
    somone.age; 
}


// 유니온 타입과 인터섹션 타입 차이
// 유니온 타입 : parameter 상태에 따라서 자유롭게 넘길 수 있음.
askSomone({ name: '디벨로퍼', skill: '웹 개발' });
askSomone({ name: '캡틴', age: 100 });

// 인터셉션 타입 : parameter 타입을 정확히 넘겨야 함.
askSomone2({ name: '디벨로퍼', skill: '웹 개발', age: 100 });
// askSomone2({ name: '캡틴', age: 100 });