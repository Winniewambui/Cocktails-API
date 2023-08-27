window.addEventListener('DOMContentLoaded', () => {
    displayCocktails();
});

//fetch and display all cocktails on browser
function displayCocktails() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a', {
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const cocktailArray = data.drinks;

        let cocktailsContainer = cocktailArray.map((cocktail) => {
            return `
            <article class="cocktail">
                <img src="${cocktail.strDrinkThumb}" class="image">    
                <p class="cocktail-name">${cocktail.strDrink}</p>
            </article>
            `;
        });

        document.querySelector('.cocktails-container').innerHTML = cocktailsContainer.join('');
    });

}

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display initial data here

    const searchInput = document.querySelector('.input-field');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterCocktailsBySearchTerm(searchTerm);
    });
});

//filtering cocktails according to the searchTerm used by the User
 function filterCocktailsBySearchTerm(searchTerm) {
    const cocktailsContainer = document.querySelector('.cocktails-container');
    const cocktailArticles = cocktailsContainer.querySelectorAll('.cocktail');

    cocktailArticles.forEach(cocktailArticle => {
        const cocktailName = cocktailArticle.querySelector('.cocktail-name').textContent.toLowerCase();

        // Set display based on whether the name includes the search term
        cocktailArticle.style.display = cocktailName.includes(searchTerm) ? 'block' : 'none';
    });
}