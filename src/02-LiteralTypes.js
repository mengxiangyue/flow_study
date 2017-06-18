// @flow

// 可以使用原始类型字面值 作为参数  只能接受给定的字面值 一般用于类似枚举的功能

function acceptsTwo(value: 2) {
  // ...
}

acceptsTwo(2);   // Works!
// acceptsTwo(3);   // Error!
// acceptsTwo("2"); // Error!


function getColor(name: "success" | "warning" | "danger") {
  switch (name) {
    case "success" : return "green";
    case "warning" : return "yellow";
    case "danger"  : return "red";
  }
}

getColor("success"); // Works!
getColor("danger");  // Works!
// getColor("error");   // Error!
