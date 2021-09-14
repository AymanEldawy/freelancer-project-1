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
      document.querySelector(".modal").classList.add("show");
    }
  });
  // document
  //   .querySelectorAll(".box-col")
  //   .forEach((item) => item.addEventListener("click", () => requireChoose()));
  document
    .querySelectorAll(".check")
    .forEach((check) =>
      check.addEventListener("click", () => checkByRow(check))
    );
});
// Required choose
// function requireChoose() {
//   // document.querySelectorAll('.check').forEach(row => {
//   //   row.addEventListener('click', () => {
//   //     let indexValue = [];
//   //     row.children.forEach
//   //     row = document.querySelectorAll(
//   //       `.check-${i} .box-col:nth-of-type(${j}) .active`
//   //     ).length
//   //   })
//   // })

//   for (let i = 1; i < 26; i++) {
//     let elements = 0;
//     for (let j = 1; j < 6; j++) {
//       let row = document.querySelectorAll(
//         `.check-${i} .box-col:nth-of-type(${j}) .active`
//       ).length;
//       if (row !== null) {
//         if (!indexValue.includes(row)) {
//           indexValue.push(row);
//           elements++;
//         } else console.log(row);
//         // console.log(row)
//       } else {
//       }
//     }
//     if (elements >= 4) {
//     }
//   }
// }
// requireChoose();
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

function checkByRow(element) {
//   let indexVal = {};
//   let star = 0;
//   console.log(indexVal)
//   if (Object.keys(indexVal).includes(``)) {
//     //
    
//   }
//   let id = element.id;
//   for (let i = 1; i < 6; i++) {
//     // let className = row.className;
//     let rateLen =
//       document.querySelectorAll(
//         `#${id} .box-col:nth-of-type(${i}) .rating .active`
//       ) || "empty";
//     indexVal[rateLen.length] = rateLen.length;
//   }
//   // document.querySelectorAll(`#${id} .box-col`).length;
//   // console.log(document.querySelectorAll(`#${id} .box-col`).length);
}
function rating() {
  function executeRating(stars) {
    const starClassActive = "rating__star fa fa-star";
    const starClassInactive = "rating__star fa fa-star-o";
    const starsLength = stars.length;
    let i;
    // indexVal[stars] = stars
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star);
        if (star.className === starClassInactive) {
          for (i; i >= 0; --i)
            stars[i].className = starClassActive + ` active`;
        } else {
          for (i; i < starsLength; ++i)
            stars[i].className = starClassInactive;
        }
      };
    });
  }
  for (let i = 1; i < 26; i++) {
    for (let j = 1; j < 7; j++) {
      let ratingStars = [
        ...document.querySelectorAll(
          `.check-${i} .box-col:nth-of-type(${j}) .rating__star`
        ),
      ];
      executeRating(ratingStars);
    }
  }
}
rating();