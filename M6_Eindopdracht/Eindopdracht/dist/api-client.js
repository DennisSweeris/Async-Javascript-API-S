const baseUrl = "https://jsonbox.io/";
const apiUrl = "https://jsonbox.io/box_d99b748509e865099d34";
const endPoint = "box_d99b748509e865099d34";

// GET
const getData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {},
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// POST
const postData = async data => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// DELETE
const deleteData = async id => {
  const endpoint = `${apiUrl}/${id}`;
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// PUT/UPDATE
const putData = async (id, data) => {
  const endpoint = `${apiUrl}/${id}`;
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
