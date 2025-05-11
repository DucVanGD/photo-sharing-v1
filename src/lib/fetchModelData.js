const BASE_URL = "http://localhost:8081/api"; 

async function fetchModel(url) {
  try {
    url = `${BASE_URL}/${url}`;
    const response = await fetch(url); // gọi đến REST API backend
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // parse JSON từ response
    return data;
  } catch (err) {
    console.error("Fetch error at:", url, err);
    throw err;
  }
}

export default fetchModel;
