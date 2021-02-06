const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer =document.querySelector(".result");

async function getName() {
    const response = await fetch(url);
    
    // console.log(response);

    const result = await response.json();

    console.log(result);

    const rating = result.results;

    resultContainer.innerHTML =""; 

    for (let i= 0; i < rating.length; i++) {
        console.log(rating[i].name);
        if (i=== 8) {
            break;
        }
        resultContainer.innerHTML += `<div class="result">${rating[i].name}</div>`;
    }
}

getName();

//const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

//const resultContainer =document.querySelector(".result");

async function getRating() {
    const response = await fetch(url);
    
    // console.log(response);

    const result = await response.json();

    console.log(result);

    const rating = result.results;

    for (let i= 0; i < rating.length; i++) {
        console.log(rating[i].rating);
        if (i=== 8) {
            break;
        }

        resultContainer.innerHTML += `<div class="result">${rating[i].rating}</div>`;
    }
}


getRating();




