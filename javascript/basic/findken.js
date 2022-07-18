const vaco1 = ["Jett", "Ken"];
const vaco2 = ["Leo", "Kim", "Ken", "Lee"];
const vaco3 = ["Ken", "Justin", "Jett"];

function findKen(arr) {
  return `켄은 ${arr.indexOf("Ken")}에 있다`;
}

const result1 = findKen(vaco1) === "켄은 1에 있다";
const result2 = findKen(vaco2) === "켄은 2에 있다";
const result3 = findKen(vaco3) === "켄은 0에 있다";

if (result1 && result2 && result3) {
  console.log("🎉");
}
