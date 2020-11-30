const emptyResultList = () => document.querySelector(".results__container").innerHTML = "";
const emptyButtonList = () => document.querySelector(".results").innerHTML = "";
const addToResultList = li => document.querySelector(".results").appendChild(li);
const addToButtonList = button => document.querySelector(".results__container").appendChild(button);

const resultsContainer = document.querySelector(".results__container");
const resultsList = document.querySelector(".results");
const emptyList = document.querySelectorAll("nav input");

// Event Listeners
emptyList.forEach(input =>
    input.addEventListener("click", () => {
        emptyResultList();
        emptyButtonList();
        if (btnCountries.onclick = () => console.log(`Countries displayed`));
        if (btnCountriesMostPeople.onclick = () => console.log(`Countries with the most people`));

    })
);

// Removes duplicates
const keepUnique = (items, item) => {
    if (!Array.isArray(items)) items = [];
    if (!items.includes(item)) items.push(item);
    return items;
};