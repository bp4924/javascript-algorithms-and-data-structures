let name = "Lydia";

function getName() {
  console.log(name);
  //  let name = "Sarah";
  name = "Sarah"; // removing the let allows the console.log to return the original name.
}

getName();
