const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }
  
    return response.data.Search;
  };
  
  const input = document.querySelector('input');
  
  
  
  const onInput = async event => {
    const movies = await fetchData(event.target.value);
    
    for (let movie of movies) {
      const a = document.createElement('a');
  
      a.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        <h3>${movie.Year}</h3>
      `;

  
      document.querySelector('.dropdown-content').appendChild(a);
    }
  };
  input.addEventListener('input', debounce(onInput, 500));
  

  
 