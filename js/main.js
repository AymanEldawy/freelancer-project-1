function getResultByCol(col) {
  return document.querySelectorAll(
    `.check .box-col:nth-of-type(${col}) .active`
  ).length;
}

function result() {
  if (checkIfAllElementRating()) {
    document.querySelector(".box-result").innerHTML = `
  <div class="box-col">
    <strong>مجموع (ب)</strong>
    <span>${getResultByCol(1)}</span>
  </div>
  <div class="box-col">
    <strong> 1 مجموع (ح)</strong>
    <span>${getResultByCol(2)}</span>
  </div>
  <div class="box-col">
    <strong>مجموع (س)</strong>
    <span>${getResultByCol(3)}</span>
  </div>
  <div class="box-col">

    <strong>مجموع (م)</strong>
    <span>${getResultByCol(4)}</span>
  </div>
  <div class="box-col">
    <strong>مجموع (ح)</strong>
    <span>${getResultByCol(5)}</span>
  </div>
  `;
  } else {
    document.querySelector(".modal").classList = 'modal show msg';
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".show-result").addEventListener("click", result);
  document.querySelector(".fa-times").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("show");
  });
  document.querySelector(".open-modal").addEventListener("click", () => {
    if (checkIfAllElementRating()) {
      getFinalResult();
      document.querySelector(".modal").classList = "modal show";
    } else {
      document.querySelector(".modal").classList = 'modal show msg';
    }
  });
  document
    .querySelectorAll(".check")
    .forEach((check) =>
      check.addEventListener("click", () => checkByRow(check))
    );
});
function checkIfAllElementRating() {
  let checkElement = 124;
  for (let i = 1; i < 26; i++) {
    let elements = 0;
    for (let j = 1; j < 6; j++) {
      let row = document.querySelector(
        `.check-${i} .box-col:nth-of-type(${j}) .active`
      );
      if (row !== null) checkElement--;
      else break;
    }
  }
  return checkElement == 0;
}

function getFinalResult() {
  console.log(checkIfAllElementRating());
  if (checkIfAllElementRating()) {
    function getTextResultByCol(num) {
      if (num > 101) return "القوي";
      else if (num >= 76 && num < 100) return "فوق المتوسط";
      else if (num >= 51 && num < 75) return " متوسط";
      else if (num >= 26 && num < 50) return " دون المتوسط";
      else if (num >= 0 && num < 25) return " ضعيف";
    }
    let colOne = getResultByCol(1);
    let colTwo = getResultByCol(2);
    let colThree = getResultByCol(3);
    let colFour = getResultByCol(4);
    let colFive = getResultByCol(5);
    document.querySelector(".modal .body").innerHTML = `
    <li>
    <div class="key">البقاء والحياة  (ب)</div>
    <div class="val">
      <span>${getTextResultByCol(colOne)}</span>
      <span>${colOne}</span>
    </div>
  </li>
  
  <li>
    <div class="key">الحرية (ح1)</div>
    <div class="val">
      <span>${getTextResultByCol(colTwo)}</span>
      <span>${colTwo}</span>
    </div>
  </li>
  <li>
    <div class="key">القوة وتقدير الذات (س)</div>
    <div class="val">
      <span>${getTextResultByCol(colThree)}</span>
      <span>${colThree}</span>
    </div>
  </li>
  <li>
    <div class="key">المرح ( م)</div>
    <div class="val">
      <span>${getTextResultByCol(colFour)}</span>
      <span>${colFour}</span>
    </div>
  </li>
  <li>
    <div class="key">الحب والانتماء (ح)</div>
    <div class="val">
    <span>${getTextResultByCol(colFive)}</span>
    <span>${colFive}</span>
    </div>
  </li>
  `;
  }
}

// document


let indexVal = {};
document.querySelectorAll('.check').forEach(check => indexVal[check.id] = {});

function checkByRow(check) {
  // indexVal[] = {}
  function executeRating(stars) {
    const starClassActive = "rating__star fa fa-star";
    const starClassInactive = "rating__star fa fa-star-o";
    const starsLength = stars.length;
    let i;
    let index = i;
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star);
        if (star.className === starClassInactive) {
          indexVal[check.id] = { i: i + 1 }
          console.log(indexVal)
          for (i; i >= 0; --i) {
            stars[i].className = starClassActive + ` active`
          };
        } else {
          for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
        }
      };
    });
    return starsLength
  }
  let checkId = check.id;
  for (let j = 1; j < 7; j++) {
    let ratingStars = [
      ...document.querySelectorAll(
        `#${checkId} .box-col:nth-of-type(${j}) .rating__star`
      ),
    ];
    let a = executeRating(ratingStars);
    console.log(a)
  }
  console.log(indexVal);
}
