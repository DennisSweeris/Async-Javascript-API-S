// Query Selectors
const jokeBtn = document.querySelector('.btn__joke');
const jokeContainer = document.querySelector('.joke');

// Event Listener
jokeBtn.addEventListener('click', () => {
  getJoke().then(data => renderJoke(data));
});

const getJoke = async () => {
  try {
    const result = await getData();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Add to HTML
const renderJoke = dadjoke => {
  jokeContainer.innerHTML = '';
  const jokeParagraph = document.createElement('p');
  const jokeImg = document.createElement('img');

  jokeParagraph.innerHTML = dadjoke.joke;
  jokeImg.src = `https://icanhazdadjoke.com/j/${dadjoke.id}.png`;

  jokeContainer.appendChild(jokeParagraph);
  jokeContainer.appendChild(jokeImg);

  return jokeContainer;
};
