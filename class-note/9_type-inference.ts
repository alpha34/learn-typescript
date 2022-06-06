// 타입 추론 기본 1
var a = 'abc';

function getA(b = 10) {
    var c = 'hi';
    return b + c;
}

10 + '10' // 1010


// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {   //DetailedDropdown 의 제네릭 값이 Dropdown 의 제네릭으로 넘어간다.
    description: string;
    tag: K
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag:'a',
}

// Best Common Type
var arr = [1, 2, true, true, 'a'];