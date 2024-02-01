document.getElementById('searchButton').addEventListener('click', function() {
    const pokemonId = document.getElementById('pokemonId').value;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        const pokemonName = data.name;
        const imageUrl = data.sprites.front_default;
        const types = data.types.map(type => type.type.name);
        const moves = data.moves.slice(0, 4).map(move => move.move.name);

        document.getElementById('pokemonName').textContent = pokemonName;
        document.getElementById('pokemonImage').src = imageUrl;
        document.getElementById('pokemonTypes').textContent = `Tipo(s): ${types.join(', ')}`;
        document.getElementById('pokemonMoves').innerHTML = moves.map(move => `<li>${move}</li>`).join('');
        document.getElementById('pokemonInfo').classList.remove('hidden');
      })
      .catch(error => {
        console.error('Erro ao buscar Pokémon:', error);
      });
  }); 