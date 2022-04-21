import axios from 'axios';

async function getFromApi() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data[0]);

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        result.data.map((i) => {
            let newElement = document.createElement('div');
            newElement.classList.add('country-card');
            newElement.innerHTML = `<li class="country-data"><p class="country-name">${i.name}</p>
                               <p class="country-population">Has a population of ${i.population} people</p>
                               <img class="flag" src="${i.flag}"></></li>`;

            const landList = document.getElementById('landen');
            landList.appendChild(newElement);
            const region =  i.region;
            return region;
        })

        const region =  i.region;
        let regionColor = '';
        //regiokleur teruggeven
        if (region === 'Africa') {
            regionColor = 'blue';
        } else if (region === 'Americas') {
            regionColor = 'green';
        } else if (region === 'Asia') {
            regionColor = 'red';
        } else if (region === 'Europe') {
            regionColor = 'yellow';
        } else if (region === 'Oceania') {
            regionColor = 'purple';
        } else {
            regionColor = 'black';
        }

        //style de namen van de landen op regiokleur
        document.getElementsByClassName('country-name').style.color='pink';

        return result; //Kan dit niet lezen buiten de functie, why??
    } catch(e) {
        console.error(e);
    }
}
getFromApi();


/*
const region = "Africa";
 switch (region) {
     case 'Africa':
         return 'blue';
         break;
     case  'Americas':
         return 'green';
         break;
     case 'Asia':
         return 'red';
         break;
     case  'Europe':
         return 'yellow';
         break;
     case 'Oceania':
         return 'purple';
         break;
     default:
         return 'black';
         break;
 }
*/

