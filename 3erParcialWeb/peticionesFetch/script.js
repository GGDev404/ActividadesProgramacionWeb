fetch("https://api.mercadolibre.com/sites/MLA/search?q=halo")
.then(res => res.json())
.then(res => console.log(res.results))
.catch( err => console.error(err));

fetch('biblioteca.json')
.then(res => res.json())
.then(res => console.log(data.titulo));


fetch('http://localhost:5500/users', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail: 'pp@pp.com', password: '123' })
})
.then(res => res.json())
.then(res=> {
      console.log(res);
});


document.getElementById("btnProducts").addEventListener("click", function() {

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=pc")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la petición: " + response.status);
            }
        })
        .then(function(data) {
            showProducts(data.results);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function showProducts(Products) {
    var listProducts = document.getElementById("listProducts");
    listProducts.innerHTML = "";

    Products.forEach(function(Products) {
        var li = document.createElement("li");
        li.textContent = Products.title;
        listProducts.appendChild(li);
    });
}

document.getElementById("btnPokemons").addEventListener("click", function() {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la petición: " + response.status);
            }
        })
        .then(function(data) {
            mostrarNombres(data.results);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function mostrarNombres(listPokemons) {
    var listaPokemon = document.getElementById("listPokemons");
    listaPokemon.innerHTML = "";

    listPokemons.forEach(function(pokemon) {
        var li = document.createElement("li");
        li.textContent = pokemon.name;
        listaPokemon.appendChild(li);
    });
}