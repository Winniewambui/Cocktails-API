window.addEventListener('DOMContentLoaded', () => {
    displayCocktails();
});

// Add a "keyup" event listener to the search input
const form = document.querySelector('#search-form');
const inputField = form.querySelector('.input-field');

function displayCocktails() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a', {
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const cocktailArray = data.drinks;
        const userInput = inputField.value.toLowerCase(); 
        
        let filteredCocktails = cocktailArray.filter(cocktail =>
            cocktail.strDrink.toLowerCase().includes(userInput)
        );

        // Display the filtered cocktails
        displayFilteredCocktails(filteredCocktails); 

        let cocktailsContainer = filteredCocktails.map((cocktail) => {
            return `
            <article class="cocktail">
                <img src="${cocktail.strDrinkThumb}" class="image">    
                <p class="cocktail-name">${cocktail.strDrink}</p>
            </article>
            `;
        });

        document.querySelector('.cocktails-container').innerHTML = cocktailsContainer.join('');
    });

    inputField.addEventListener('keyup', function() {
        displayCocktails();
    });
}

function displayFilteredCocktails(filteredCocktails) {
    // Display your filtered cocktails here
}