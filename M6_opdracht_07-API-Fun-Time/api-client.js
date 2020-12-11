const apiUrl = 'https://icanhazdadjoke.com/';
const options = {
  method: 'GET',
  headers: { accept: 'application/json' },
};

const getData = async () => {
  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
