const days = ["일", "월", "화", "수", "목", "금", "토"];
const th = document.querySelectorAll("th");
console.log(th);
for (let i in th) {
  th[i].textContent = days[i];
}
