async function fetchPokemonInfo() {
    const idOrName = document.getElementById('pokemonInput').value;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        
        if (response.status === 200) {
            const pokemonData = response.data;
            const nomePokemon = pokemonData.name;
            const habilidadesPokemon = pokemonData.abilities.map(ability => ability.ability.name);
            
            document.getElementById('nomePokemon').value = nomePokemon;
            const listaHabilidade = document.getElementById('habilidadesPokemon');
            listaHabilidade.innerHTML = '';
            habilidadesPokemon.forEach(ability => {
                const listItem = document.createElement('li');
                listItem.textContent = ability;
                listaHabilidade.appendChild(listItem);
            });
        } else {
            console.error('Não foi possível obter os dados do Pokémon.');
        }
    } catch (error) {
        console.error('Ocorreu um erro ao fazer a solicitação:', error);
    }
}