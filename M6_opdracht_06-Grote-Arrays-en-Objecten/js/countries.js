// Query selectors
const btnCountries = document.querySelector(".countries");

// Event Listener
btnCountries.addEventListener("click", () => generateCountryHTML(displayCountries()))

// Adding to HTML
const generateCountryHTML = country => {
    const li = document.createElement("li");
    li.innerHTML = country;
    return li;
};

// Sorted country list
const displayCountries = () =>
    randomPersonData.map(person => person.region)
        .reduce(keepUnique)
        .sort()
        .map(generateCountryHTML)
        .forEach(addToResultList);