// 타입 정의
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean
// }

//인터페이스 정의 : 장점 : 아래 길게 쓴 타입을 짧게 쓸 수 있다.
interface Todo  {
  id: number;
  title: string;
  done: boolean
}

//let todoItems: Todo[];   => 인터페이스 사용한것
let todoItems: { id: number; title: string; done: boolean }[];

// api
function fetchTodoItems(): { id: number; title: string; done:boolean }[] {  // todo 에 대한 형식을 정확히 기재해야 함.
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: { id: number; title: string; done:boolean }): void {  // todo 에 대한 형식을 정확히 기재해야 함.
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: { id: number; title: string; done:boolean }): void {  // todo 에 대한 형식을 정확히 기재해야 함.
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Object {
  return todoItems[0];
}

function showCompleted(): Object[] {
  return todoItems.filter(item => item.done);
  // 위와 동일
  // return todoItems.filter(function (item) {
  //   if (item.done) {
  //     return item;
  //   }
  // })
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '스크립트 4',
    done: false
  }
  addTodo(item1);
  addTodo({ id: 5, title: '스크립트 5', done: false });
}

// NOTE: 유틸 함수
function log() : void{
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
