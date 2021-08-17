// 3.Use the same rest countries and print all countries name, region, sub region and population

function getApiData()
{
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all')
    xhr.responseType = "json"

    xhr.send()

    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
        getDetails(data)
    }
}


getApiData();

function getDetails(data)
{
    data.forEach(({name,region,subregion,population}) => {
        console.log(`name : ${name} , region : ${region} , subregion : ${subregion} , population : ${population}`);        
    });
}
