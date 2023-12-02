const pokemonName = document.querySelector('.pokemon__name');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['version']['heneration-v']['black-white']['animated']['front_defalt'];
    input.value = '';
}

FormData.addEventListener('submit', (event) => {
    event.preventDefalt();
    renderPokemon(input.value);
    
})