window.addEventListener('DOMContentLoaded',() =>{
    displayCocktails();
})

// Add a "keyup" event listener to the search input
const form = document.querySelector('#search-form')
const inputField = form.querySelector('.input-field');
inputField.addEventListener('keyup', function() {
    const userInput = inputField.value.toLowerCase(); 

    // Filter the drinksArray based on user input
    let filteredCocktails = drinksArray.filter(drink => 
        drink.strDrink.toLowerCase().includes(userInput)
    );

    // Display the filtered cocktails
    displayCocktails(filteredCocktails);
});

function displayCocktails(){   
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a',{
        headers:{
            'Accept': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const drinksArray = data.drinks;
      let cocktailsContainer = drinksArray.map((cocktail) =>{
        return`
        <article class="cocktail">
        <img src="${cocktail.strDrinkThumb}" class="image">    
<p class="cocktail-name">${cocktail.strDrink}</p>
    </article>
    `
      })
      document.querySelector('.cocktails-container').innerHTML = cocktailsContainer.join('')
    })
}

