// Addition value by col
function addByCol(col) {
  let inputByCol = document.querySelectorAll(
    `.check .col:nth-child(${col}) input`
  );
  let newArr = [];
  inputByCol.forEach((input) => newArr.push(+input.value));
  let result = newArr.reduce((a, b) => a + b);
  return result;
}
function getResults() {
  console.log("Run...");
  document.querySelector(`.results .col:nth-child(3)`).innerHTML = addByCol(3);
  document.querySelector(`.results .col:nth-child(5)`).innerHTML = addByCol(5);
  document.querySelector(`.results .col:nth-child(7)`).innerHTML = addByCol(7);
  document.querySelector(`.results .col:nth-child(9)`).innerHTML = addByCol(9);
  document.querySelector(`.results .col:nth-child(11)`).innerHTML = addByCol(
    11
  );
  getFinalResult()
}

window.addEventListener("DOMContentLoaded", () => {
  let inputs = document.querySelectorAll(` .check-25 input`);
  inputs.forEach((input) => {
    input.addEventListener("keyup", getResults);
  });
  document.querySelector(".show-result").addEventListener("click", getResults);
});

//
function getFinalResult() {
  let valueColOne = addByCol(3);
  let valueColTwo = addByCol(5);
  let valueColThree = addByCol(7);
  let valueColFour = addByCol(9);
  let valueColFive = addByCol(11);
  document.querySelector(".row-body").innerHTML = `
  <div class="row">
            <div class="col">البقاء والحياة ب</div>
            <div class="col">${valueColOne > 101 ? valueColOne : "----"}</div>
            <div class="col">${
              valueColOne > 75 && valueColOne <= 100 ? valueColOne : "----"
            }</div>
            <div class="col">${
              valueColOne > 51 && valueColOne <= 75 ? valueColOne : "----"
            }</div>
            <div class="col">${
              valueColOne > 25 && valueColOne <= 51 ? valueColOne : "----"
            }</div>
            <div class="col">${
              valueColOne >= 0 && valueColOne <= 25 ? valueColOne : "----"
            }</div>
          </div>
          <div class="row">
            <div class="col">الحب والانتماء ح</div>
            <div class="col">${valueColTwo > 101 ? valueColTwo : "----"}</div>
            <div class="col">${
              valueColTwo > 75 && valueColTwo <= 100 ? valueColTwo : "----"
            }</div>
            <div class="col">${
              valueColTwo > 51 && valueColTwo <= 75 ? valueColTwo : "----"
            }</div>
            <div class="col">${
              valueColTwo > 25 && valueColTwo <= 51 ? valueColTwo : "----"
            }</div>
            <div class="col">${
              valueColTwo >= 0 && valueColTwo <= 25 ? valueColTwo : "----"
            }</div>
          </div>
          <div class="row">
            <div class="col">القوة وتقدير الذات س</div>
            <div class="col">${valueColThree > 101 ? valueColThree : "----"}</div>
            <div class="col">${
              valueColThree > 75 && valueColThree <= 100 ? valueColThree : "----"
            }</div>
            <div class="col">${
              valueColThree > 51 && valueColThree <= 75 ? valueColThree : "----"
            }</div>
            <div class="col">${
              valueColThree > 25 && valueColThree <= 51 ? valueColThree : "----"
            }</div>
            <div class="col">${
              valueColThree >= 0 && valueColThree <= 25 ? valueColThree : "----"
            }</div>
          </div>
          <div class="row">
            <div class="col">الحرية ح1</div>
            <div class="col">${valueColFour > 101 ? valueColFour : "----"}</div>
            <div class="col">${
              valueColFour > 75 && valueColFour <= 100 ? valueColFour : "----"
            }</div>
            <div class="col">${
              valueColFour > 51 && valueColFour <= 75 ? valueColFour : "----"
            }</div>
            <div class="col">${
              valueColFour > 25 && valueColFour <= 51 ? valueColFour : "----"
            }</div>
            <div class="col">${
              valueColFour >= 0 && valueColFour <= 25 ? valueColFour : "----"
            }</div>
          </div>
          <div class="row">
            <div class="col">المرح م</div>
            <div class="col">${valueColFive > 101 ? valueColFive : "----"}</div>
            <div class="col">${
              valueColFive > 75 && valueColFive <= 100 ? valueColFive : "----"
            }</div>
            <div class="col">${
              valueColFive > 51 && valueColFive <= 75 ? valueColFive : "----"
            }</div>
            <div class="col">${
              valueColFive > 25 && valueColFive <= 51 ? valueColFive : "----"
            }</div>
            <div class="col">${
              valueColFive >= 0 && valueColFive <= 25 ? valueColFive : "----"
            }</div>
          </div> `;

}
getFinalResult()