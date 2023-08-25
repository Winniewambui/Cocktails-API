const form = document.querySelector('#search-form')
const userInput = form.querySelector('.input-field').value;

// form.addEventListener('submit', displayCocktails)

// function displayCocktails(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a',{
        headers:{
            'Accept': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        const drinksArray = data.drinks;
      let cocktailsContainer = drinksArray.map((cocktail) =>{
        return`
        <article class="cocktail">
        <img src="${cocktail.drink}" class="image">    
<p class="cocktail-name">${cocktail.strDrink}</p>
    </article>
    `
      })
      document.querySelector('.cocktails-container').innerHTML = cocktailsContainer.join('')
    })
// }