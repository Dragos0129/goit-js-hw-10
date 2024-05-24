import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_Tx5EpcGzdRVwkceBx2WBAdgAW4tizm3Ez3N1rsFS1E56HZH20Inz1bUgvyL3JIRX';

const apiKey =
  'live_Tx5EpcGzdRVwkceBx2WBAdgAW4tizm3Ez3N1rsFS1E56HZH20Inz1bUgvyL3JIRX';

const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedId}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};

export { fetchBreeds, fetchCatByBreed };
