
class Person7{
    // 차이1: 타입스크립트는 type 을 지정해야 한다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){ // 차이2: 타입스크립트는 type 을 지정해야 한다.
        this.name = name;
        this.age = age;
    }
}

// 리엑트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 최신 문법 - 리엑트 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}