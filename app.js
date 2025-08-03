fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach((item, index) => {
      if (index < 4) {
        document.querySelector(`.icon-${index + 1}`).src = item.icon;
        document.querySelector(`.category-${index + 1}`).textContent = item.category;
        document.querySelector(`.score-${index + 1}`).textContent = item.score;
      }
    });
  });
