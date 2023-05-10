const phoneNumberInput = document.getElementById("phoneNumber");
const usageInput = document.getElementById("usage");
const resultValue = document.getElementById("resultValue");
const tnbCost = document.getElementById("tnbCost");
const printBtn = document.getElementById("printBtn");

const memberPhoneNumbers = {
  "1234567890": true,
  "0987654321": true,
  // Add more phone numbers here
};

phoneNumberInput.addEventListener("input", () => {
  calculate();
});

usageInput.addEventListener("input", () => {
  calculate();
});

printBtn.addEventListener("click", () => {
  window.print();
});

function calculate() {
  const phoneNumber = phoneNumberInput.value;
  const usage = parseFloat(usageInput.value);
  if (isNaN(usage)) {
    resultValue.textContent = "0";
    tnbCost.textContent = "0";
    return;
  }

  const isMember = memberPhoneNumbers[phoneNumber] === true;
  const price = isMember ? 0.6363 : 1;
  const result = usage * price;
  resultValue.textContent = result.toFixed(2);

  const tnbPrice = 0.509;
  const tnbResult = usage * tnbPrice;
  tnbCost.textContent = tnbResult.toFixed(2);
}
