import axios from 'axios';

//Haal de zoekwaarde op, declareer in een variabele, sla de ingevoerde zoekterm op in een variable
//Schrijf deze acties in een functie die wordt geactiveerd door een click event op de zoek button
//Maak een string aan die de searchValue aan de API url koppelt
//Schrijf een functie die een get request doet aan de API met de apiUrl

const search = document.getElementById('search');
const searchValue = search.value;
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getSearchValue);
search.addEventListener('keyup', function (e) {
     if (e.keyCode === 13) {
         getSearchValue();
     }
});

function getSearchValue () {
    let searchValue = search.value;
    console.log(searchValue);
    const apiUrl = 'https://restcountries.com/v2/name/' + searchValue;
console.log(apiUrl)
    async function getCountry() {
        try {
            const result = await axios.get(apiUrl);
            const currencies = result.data[0].flags;
            //Maak div aan

            function outputContent() {
            const newSearchInfo = document.createElement("div");
            newSearchInfo.setAttribute('class', 'country-info-card');
            const countryName = document.createElement("h3");
                countryName.setAttribute('class', 'country-name');
                countryName.textContent = result.data[0].name;
            const flag = document.createElement("img");
            flag.setAttribute('src', result.data[0].flags);
            flag.setAttribute('class', 'flag-image');

            const name = result.data[0].name;
            const population = result.data[0].population;
            const subregion = result.data[0].subregion;
            const capital = result.data[0].capital;
            const languages = result.data[0].languages;
            const stringText = document.createElement('p');
            stringText.setAttribute('class', 'country-info-paragraph')
            stringText.innerHTML= `${name} is situated in ${subregion}. It has a population of ${population}.
                                      The capital is ${capital} and you can pay with ${currencies}'s.
                                      They speak ${languages}`;

                   const output = document.getElementById('search-return-info');
                   output.innerText = "john";
                const newP = document.createElement("p");

                newSearchInfo.appendChild(newP);
                newSearchInfo.appendChild(name);
                newSearchInfo.appendChild(stringText);
                output.appendChild(newSearchInfo);




            }
            outputContent();
        } catch(e) {
            console.error(e);
        }
    } getCountry();



    /* if (currencies.length === 1) {

    } else {for (let i = 0; i < currencies.length; i++) {

         }
       }
    }
     */

    //at end clear search

}
