fetch("./data.json")
  .then((res) => res.json())
  .then(res => {
    const periods = document.querySelectorAll(".period p");

    periods.forEach(nodeElt => {
      nodeElt.addEventListener("click", (e) => {
        let activeElt = document.querySelector(".period p.active");
        activeElt.classList.remove("active");
        e.target.classList = ["active"];

        let currentLabel = e.target.textContent.toLowerCase();
        const labelLastTime = {
          "daily": "Last Day - ",
          "weekly": "Last Week - ",
          "monthly": "Last Month - ",
        }

        res.forEach(elt => {
          const classElt = elt.title === "Self Care" ? ".self-care" : '.' + elt.title.toLowerCase();
          const baseElt = document.querySelector(classElt);
          const currentTime = baseElt.querySelector(".details p:first-child");
          const lastWeekTime = baseElt.querySelector(".details p:last-child");
          currentTime.textContent = elt.timeframes[currentLabel].current + "hrs";
          lastWeekTime.textContent = labelLastTime[currentLabel] + elt.timeframes[currentLabel].previous + "hrs";
        })
      })
    });
  })
  .catch((err) => console.log(err));