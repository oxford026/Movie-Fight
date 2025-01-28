const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '406cea08', 
            s: 'avengers'
        }
    });

    console.log(response.data);
};

fetchData()