function checkCashRegister(price, cash, cid) {
  let change = [];
  let totalChangePerCoin = 0;
  let totalChangeReturned = 0;
  let changeNeeded = (cash - price)*100; // Use *100 to avoid weird javascript math errors
  let values = {
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE":5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED":100
  };
  
  // Total cash in drawer, rounded to nearest hundredth
  let totalCashInDrawer = (cid.reduce((sum, item) => sum += item[1], 0) * 100) / 100;

  if(totalCashInDrawer == cash - price) {
    return {status: "CLOSED", change: cid};
  }
  if(totalCashInDrawer < cash - price) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  for(let i=cid.length - 1; i>=0; i--) {
    while(changeNeeded/100 >= values[cid[i][0]] && cid[i][1] > 0) {
      cid[i][1] -= values[cid[i][0]];
      changeNeeded -= values[cid[i][0]]*100;
      totalChangePerCoin += values[cid[i][0]];
      totalChangeReturned += values[cid[i][0]];
    }
    if(totalChangePerCoin > 0 ) {
      change.push([cid[i][0], totalChangePerCoin]);
      totalChangePerCoin = 0;
    }
  }

  if(totalChangeReturned*100/100 == cash - price) {
    return {status: "OPEN", change: change};
  }

  // Cannot return exact change
  return {status: "INSUFFICIENT_FUNDS", change: []};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
