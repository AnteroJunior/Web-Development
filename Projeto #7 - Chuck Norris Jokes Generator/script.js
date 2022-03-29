// Getting jokes categories after DOM load
async function getCategories(){

    // Create a variable to store all options
    let arrCategories = await fetch('https://api.chucknorris.io/jokes/categories');

    // Convert to JSON
    arrCategories = await arrCategories.json();

    // Here we create menu options
    arrCategories.forEach(category => {
        
        let newOption = document.createElement('option');
        newOption.setAttribute('id', category);
        newOption.setAttribute('value', category);
        newOption.innerHTML = category;

        let getSelect = document.querySelector('select');
        getSelect.appendChild(newOption);

    });

}

async function getJoke(){

    // Category value
    let value = document.querySelector('select');
    value = value.value;

    // Fetch
    try {

        // Here we get RANDOM jokes; thats the default value for select
        if(value == 'choose'){

            // Joke p
            // Inserindo um loader enquanto espera a resposta do fetch
            
            let paragraph = document.getElementById('joke');

            paragraph.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';

            // Fetch
            let joke = await fetch(`https://api.chucknorris.io/jokes/random`);

            joke = await joke.json();

            let getImage = document.getElementById('chuck-norris');
            getImage.src = joke.icon_url;

            // Change joke text
            paragraph.innerHTML = joke.value;

        } else {
            
            // Joke p
            // Insert loader while we're waiting fetch response
            
            let paragraph = document.getElementById('joke');

            paragraph.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';

            // Fetch
            let joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`);

            joke = await joke.json();

            let getImage = document.getElementById('chuck-norris');
            getImage.src = joke.icon_url;

            // Change joke value
            paragraph.innerHTML = joke.value;

        }

    } catch (error) {

        // Mostra mensagem de erro
        alert(error);

    }

}

// Execute getCategories() when DOM is loaded
document.addEventListener("DOMContentLoaded", getCategories);