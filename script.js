const header = document.getElementById("headerHB");
const body = document.getElementById("body");
const bodyChildrens = [...body.children];

function mouseOver(el) {
  body.classList.add("bodyHov");
  bodyChildrens.forEach((element) => {
    if (element.children && element !== header) {
      [...element.children].forEach((element) => {
        if (element.children) {
          [...element.children].forEach((element) => {
            if (el !== element) {
              element.classList.add("elementNotHov");
            }
          });
        } else if (el !== element) {
          element.classList.add("elementNotHov");
        }
      });
    } else if (el !== element) {
      element.classList.add("elementNotHov");
    }
  });
}
function mouseOut(el) {
  body.classList.remove("bodyHov");
  bodyChildrens.forEach((element) => {
    if (element.children && element !== header) {
      [...element.children].forEach((element) => {
        if (element.children) {
          [...element.children].forEach((element) => {
            if (el !== element) {
              element.classList.remove("elementNotHov");
            }
          });
        } else if (el !== element) {
          element.classList.remove("elementNotHov");
        }
      });
    } else if (el !== element) {
      element.classList.remove("elementNotHov");
    }
  });
}

bodyChildrens.forEach((el) => {
  if (el.children && el !== header) {
    [...el.children].forEach((el) => {
      if (el.children) {
        [...el.children].forEach((el) => {
          el.addEventListener("mouseover", () => mouseOver(el));
          el.addEventListener("mouseout", () => mouseOut(el));
        });
      } else {
        el.addEventListener("mouseover", () => mouseOver(el));
        el.addEventListener("mouseout", () => mouseOut(el));
      }
    });
  } else {
    el.addEventListener("mouseover", () => mouseOver(el));
    el.addEventListener("mouseout", () => mouseOut(el));
  }
});
