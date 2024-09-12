function calculateElectronicsBudget(laptop, tablets, mobile) {
  let perLaptopPrice = 35000;
  let perTabletPrice = 15000;
  let perMobilePrice = 20000;

  let totalLaptop = laptop * perLaptopPrice;
  let totalTablets = tablets * perTabletPrice;
  let totalMobile = tablets * perMobilePrice;
  const totalMoneyRequired = totalLaptop + totalTablets + totalMobile;

  return totalMoneyRequired;
}
const total = calculateElectronicsBudget(50,30,10);
console.log(total)
const discount = total* 15/100;
console.log("Your discount amount is :",discount)
const youPay = total-discount;
console.log("You Pay After Discount: ",youPay)