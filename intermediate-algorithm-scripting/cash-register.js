function checkCashRegister(price, cash, cid) {
  const startCID = cid;
  let startChangeDue = 100 * (cash - price);
  let changeDue = startChangeDue;
  const cidValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let change = [];

  let status = "OPEN";
  let changeGiven = 0;
  for (let i = cid.length - 1; i >= 0; i--) {
    // remove change from cid until change == 0 or cid == 0
    changeGiven = 0;

    while (cidValues[i] <= changeDue) {
      // get change from drawer
      if (cid[i][1] === 0) break;

      cid[i][1] -= cidValues[i] / 100;

      changeGiven += cidValues[i];
      changeDue -= cidValues[i];
    }

    cid[i][1] = changeGiven / 100;
    // push to change
    if (changeGiven > 0) {
      change.push(cid[i]);
    }
  }
  //  console.log(`change given ${changeGiven} cash ${cash} startCID ${startCID}`);
  // return Closed for exact change

  if (changeGiven === startChangeDue) {
    status = "CLOSED";
    change = startCID;
  }

  if (changeDue > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }

  return { status, change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log("---");
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  ' should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}'
);
console.log("---");

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log('should return {status: "INSUFFICIENT_FUNDS", change: []}');
console.log("---");

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log('should return {status: "INSUFFICIENT_FUNDS", change: []}');

console.log("---");

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  'should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}'
);
