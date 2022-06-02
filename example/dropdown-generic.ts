// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropDownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// interface numberOfProducts {
//   value: number;
//   selected: boolean;
// }

// // 인터페이스로 설정시 값에 따라서 여러 인터페이스를 구성해야 함.
// interface numberOfProducts2 {
//   value: boolean;
//   selected: boolean;
// }

// 제네릭 인터페이스 사용
interface DropDownItem<T> {
  value: T;
  selected: boolean;
}


const numberOfProducts: DropDownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropDownItem<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
})