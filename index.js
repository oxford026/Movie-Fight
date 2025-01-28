const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '406cea08',
            s: searchTerm

        }
    });

    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    setTimeout(() => {
        fetchData(event.target.value);
    }, 2000
   )}


    input.addEventListener('input', onInput);


