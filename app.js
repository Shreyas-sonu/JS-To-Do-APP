//! Adding input value to list

let form = document.querySelector("form");
let ul = document.querySelector("ul");
let del = document.querySelectorAll("#del");
let edt = document.querySelectorAll("#edt");

//! Alert on page reload
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
//   e.returnValue = "";
// });
form.addEventListener("submit", e => {
  e.preventDefault();
  let val = e.target[1].value;
  if (val === "") {
    alert("Nothing to add please add something");
    e.target[1].attributes.setAttribute("autofocus", "true");
  } else {
    let add = `<input type="text" value="${val}" disabled><button id="edt">Edit</button><button id="del">Delete</button>`;
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = add;
    let del = li.childNodes[2];
    del.addEventListener("click", e => {
      e.target.parentElement.remove();
    });

    let edt = li.childNodes[1];

    edt.addEventListener("click", e => {
      let tog = e.target.classList.toggle("active");
      if (tog) {
        e.target.previousElementSibling.removeAttribute("disabled");
        e.target.style.background = "Green";
        e.target.innerHTML = "&#10004;";
      } else {
        e.target.previousElementSibling.setAttribute("disabled", "true");
        e.target.style.background = "darkGoldenRod";
        e.target.innerHTML = "&#9986;";
      }
    });
  }
});

//! deleting the element from list

del.forEach(val =>
  val.addEventListener("click", e => {
    e.target.parentElement.remove();
  })
);

//! Editing the List items

edt.forEach(val =>
  val.addEventListener("click", e => {
    let tog = e.target.classList.toggle("active");
    if (tog) {
      e.target.previousElementSibling.removeAttribute("disabled");
      e.target.style.background = "Green";
      e.target.innerHTML = "&#10004;";
    } else {
      e.target.previousElementSibling.setAttribute("disabled", "true");
      e.target.style.background = "darkGoldenRod";
      e.target.innerHTML = "&#9986;";
    }
  })
);
