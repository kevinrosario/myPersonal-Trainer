export let apiUrl;

const apiUrls = {
  production: 'https://mypersonal-trainer.herokuapp.com',
  development: 'http://localhost:4741'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export const thirdPartyAPI = 'https://wger.de/api/v2/exercise/?format=json&status=2&language=2&limit=60';
