// Query selectors
const btnCountriesMostPeople = document.querySelector(".countries_most_people");

// Event listener
btnCountriesMostPeople.addEventListener("click", () => generateCountryMostPeopleHTML(displayCountryMostPeople()));

// Adding to HTML
const generateCountryMostPeopleHTML = (MostPeople) => {
    MostPeople.map((item) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.country}: ${item.amount}`;
        addToResultList(li)
    });
};

const displayCountryMostPeople = () => {
    const countryList = randomPersonData.map((person) => person.region);
    const countries = Array.from(
        countryList.reduce((unique, item) =>
            unique.set(item, (unique.get(item) || 0) + 1), new Map()),
        ([country, countries]) => ({ country, amount: countries })
    );
    countries.sort((c1, c2) => c1.amount > c2.amount ? -1 : 1);
    return countries
};
