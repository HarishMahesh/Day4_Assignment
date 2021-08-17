/* 2. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console */

function getApiData()
{
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all')
    xhr.responseType = "json"

    xhr.send()

    xhr.onload = () => {
        const data = xhr.response;
        getAllFlags(data)
    }
}


getApiData();

function getAllFlags(data)
{
    data.forEach(obj => {

        console.log(obj.flag);
        
    });
}