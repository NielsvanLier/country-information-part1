import axios from 'axios';

async function getFromApi() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        result.data.map((i) => {


            const region =  i.region;
            let regionColor = '';
            //regiokleur teruggeven
            function getColor (){
                if (region === 'Africa') {
                    return regionColor = 'blue';
                } else if (region === 'Americas') {
                    return regionColor = 'green';
                } else if (region === 'Asia') {
                    return regionColor = 'red';
                } else if (region === 'Europe') {
                    return regionColor = 'yellow';
                } else if (region === 'Oceania') {
                    return regionColor = 'purple';
                } else {
                    return regionColor = 'black';
                }
            }getColor();

            let newElement = document.createElement('div');
            newElement.classList.add('country-card');
            newElement.innerHTML = `<li class="country-data"><img class="flag" src="${i.flag}"><p class="country-name" style="color: ${regionColor}">${i.name}</p></br>
                               <p class="country-population">Has a population of ${i.population} people</p></li>`;


            const landList = document.getElementById('landen');
            landList.appendChild(newElement);
        })


        return result; //Kan dit niet lezen buiten de functie, why??
    } catch(e) {
        console.error(e);
    }
}
getFromApi();

