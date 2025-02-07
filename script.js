const usageElement = document.getElementById("usage");
const resultValueElement = document.getElementById("resultValue");
const tnbCostElement = document.getElementById("tnbCost");

const memberRate = 0.6363;
const nonMemberRate = 1;
const tnbRate = 0.57;

const phoneNumberList = [
  "1234567890",
  "0987654321",
  "‭0137781434‬",
  // Add more phone numbers here as needed
];

const phoneInputElement = document.getElementById("phoneInput");

usageElement.addEventListener("input", updateCost);
phoneInputElement.addEventListener("input", updateCost);

function updateCost() {
  const usage = parseFloat(usageElement.value);

  if (isNaN(usage)) {
    resultValueElement.textContent = "0";
    tnbCostElement.textContent = "0";
    return;
  }

  const phoneNumber = phoneInputElement.value;
  const rate = phoneNumberList.includes(phoneNumber) ? memberRate : nonMemberRate;
  const cost = usage * rate;
  const tnbCost = usage * tnbRate;

  resultValueElement.textContent = cost.toFixed(2);
  tnbCostElement.textContent = tnbCost.toFixed(2);
}
