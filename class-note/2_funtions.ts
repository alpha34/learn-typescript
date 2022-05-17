//함수의 파라미어테 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum3(a: number, b: number): number{
    return a + b;
}

// sum3(10, 20, 30, 40); //에러


// 함수의 옵셔널 파라미터  => ? (물음표)를 넣으면 해당 파라미터는 받을수도 있고 안받을수도 있다.
function log(a: string, b?: string, c?: string) {
    
}

log('hello wolrd');
log('hello wolrd', 'abc');