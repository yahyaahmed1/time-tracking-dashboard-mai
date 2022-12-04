let daily = document.querySelector("p.daily"),
  weekly = document.querySelector("p.weekly"),
  monthly = document.querySelector("p.monthly");

let sectionName = document.querySelectorAll("section:not(.info)");

let currentNum = document.querySelectorAll(".card h1"),
  previousNum = document.querySelectorAll("span.previous");




fetch("./data.json").then((result) => {
  let data = result.json();
  return data;
}).then((list) => {
  for (let i = 0; i < list.length; i++) {
    daily.addEventListener("click", () => {
      weekly.classList.remove("checked");
      monthly.classList.remove("checked");
      daily.classList.add("checked");
      if (daily.classList.contains("checked")) {
        if (sectionName[i].className === list[i].title) {
          currentNum[i].innerHTML = "";
          if (list[i].timeframes.daily.current === 1) {
            currentNum[i].append(`${list[i].timeframes.daily.current}hr`);
          } else {
            currentNum[i].append(`${list[i].timeframes.daily.current}hrs`);
          }
          // ----------------------------------------------------------------------
          previousNum[i].innerHTML = "";
          if (list[i].timeframes.daily.previous === 1) {
            previousNum[i].append(`${list[i].timeframes.daily.previous}hr`);
          } else {
            previousNum[i].append(`${list[i].timeframes.daily.previous}hrs`);
          }
        }
      }
    });
    weekly.addEventListener("click", () => {
      daily.classList.remove("checked");
      monthly.classList.remove("checked");
      weekly.classList.add("checked");
      if (weekly.classList.contains("checked")) {
        if (sectionName[i].className === list[i].title) {
          currentNum[i].innerHTML = "";
          if (list[i].timeframes.weekly.current === 1) {
            currentNum[i].append(`${list[i].timeframes.weekly.current}hr`);
          } else {
            currentNum[i].append(`${list[i].timeframes.weekly.current}hrs`);
          }
          // ----------------------------------------------------------------------
          previousNum[i].innerHTML = "";
          if (list[i].timeframes.weekly.previous === 1) {
            previousNum[i].append(`${list[i].timeframes.weekly.previous}hr`);
          } else {
            previousNum[i].append(`${list[i].timeframes.weekly.previous}hrs`);
          }
        }
      }
    });
    monthly.addEventListener("click", () => {
      weekly.classList.remove("checked");
      daily.classList.remove("checked");
      monthly.classList.add("checked");
      if (monthly.classList.contains("checked")) {
        if (sectionName[i].className === list[i].title) {
          currentNum[i].innerHTML = "";
          if (list[i].timeframes.monthly.current === 1) {
            currentNum[i].append(`${list[i].timeframes.monthly.current}hr`);
          } else {
            currentNum[i].append(`${list[i].timeframes.monthly.current}hrs`);
          }
          // ----------------------------------------------------------------------
          previousNum[i].innerHTML = "";
          if (list[i].timeframes.monthly.previous === 1) {
            previousNum[i].append(`${list[i].timeframes.monthly.previous}hr`);
          } else {
            previousNum[i].append(`${list[i].timeframes.monthly.previous}hrs`);
          }
        }
      }
    });
  }
});



