// 인터페이스와 type 비교
// interface PersonInterface {
//     name: String;
//     age: number;
// }

type PersonType = {
    name: String;
    age: number;
}

var hongki: PersonType = {
    name: '홍기',
    age : 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}

//타입과 인터페이스의 차이
// 인터페이스는 확장이 가능하나, 타입별칭은 확장이 불가능하다.
// 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천.