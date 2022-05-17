// js 문자열 선언
var str1 = 'heollo';

// ts 문자열 선언
let str2: string = "hello";

// ts 숫자
let num: number = 10;

// ts 배열
let arr: Array<number> = [1, 2, 3];
//let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10] //에러
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', "10"]
let items: number[] = [1, 2, 3];

// ts 튜플 (배열 각각 인덱스의 타입정리)
let address: [string, number] = ['gangnam', 100];

// ts 객체
let obj: object = {};
// let peron: object = {
//     name: 'capt',
//     age: 100
// }

let peron: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// ts 진위값
let show: boolean = true;