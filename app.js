fetch ("/data.json") 
    .then(res => res.json())
    .then(data => {
        document.querySelector(".icon-1").src = data[0].icon
        document.querySelector(".category-1").textContent = `${data[0].category}`
        document.querySelector(".score-1").textContent = `${data[0].score}`
        
        document.querySelector(".icon-2").src = data[1].icon
        document.querySelector(".category-2").textContent = `${data[1].category}`
        document.querySelector(".score-2").textContent = `${data[1].score}`
        
        document.querySelector(".icon-3").src = data[2].icon
        document.querySelector(".category-3").textContent = `${data[2].category}`
        document.querySelector(".score-3").textContent = `${data[2].score}`
        
        document.querySelector(".icon-4").src = data[3].icon
        document.querySelector(".category-4").textContent = `${data[3].category}`
        document.querySelector(".score-4").textContent = `${data[3].score}`
    });