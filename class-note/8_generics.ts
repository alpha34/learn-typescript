// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);  // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// 제네릭
// function logText<T>(text:T):T {  // 호출하는 시점에 타입도 같이 넘겨줌.
//     console.log(text);
//     return text;
// }
// logText<string>('하이');


// 기존 문법과 제네릭의 차이점

// 동일한 코드를 타입에 따라 작성해야 함.

/* 
function logText(text: string) {
    console.log(text);
    // text.split('').reverse().join();
    return text;
}
function logNumber(num: number) {
    console.log(num);
    return num
}

logText('a');
logText(10);
const num = logNumber(10);
logText(true);
 */


// 유니온을 활용할때

/* 
function logText(text: string | number) {
    console.log(text);
    return text;
}
const a = logText('a');
a.split('')  // stirng|number 타입이라서 split사용시 error 발생..
logText(10);
 */

function logText<T>(text: T):T {
    console.log(text);
    return text;
}
const str = logText<String>('abc');
str.split('')  // 제네릭의 장점으로 string의 함수를 사용할 수 있음.
const login = logText<boolean>(true);

logText(10);


//인터페이스에 제네릭을 선언하는 방법
// 그냥 인터페이스
interface Dropdown1{
    value: string;
    selected: boolean;
  }
  const obj1 : Dropdown1 = { value: 'abc', selected: false };
  
  
  // 제네릭 선언한 인터페이스
  interface Dropdown2<T>{
    value: T;
    selected: boolean;
  }
  
  const obj2 : Dropdown2<string> = { value: 'abc', selected: false };// 제네릭 인터페이스 사용시
  
  
  //제네릭의 타입 제한
  function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
      console.log(text);
    })
    return text;
  }
  
logTextLength<string>(['hi', 'abc']);
  
//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LegnthType{
    length: number;
}

function logTextLength2<T extends LegnthType>(text:T):T {
    text.length;
    return text;
}

logTextLength2('a'); // O
logTextLength2({ length: 10 }); // O
logTextLength2(10); // x  10은 length 속성을 제공하지 않기 때문에 에러 발생

//제네릭 타입 제한 3 - key of 이용하기
interface ShoppingItems {
    name: string;
    price: number;
    stock: number;
}

//ShoppingItems 타입중에 한가지가 타입이 된다.
function getShoppingItemOption<T extends keyof ShoppingItems>(itemOption: T):T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption("name");
getShoppingItemOption("price");