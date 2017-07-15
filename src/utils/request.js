import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300 && response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


export default function request(url, payload) {
  let options;
  if (payload) {
    // var data = new FormData();
    // data.append("json", JSON.stringify(payload));
    const data = JSON.stringify(payload);
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: data,
    };
  }
  return fetch(url, options)
    .then(parseJSON)
    .catch((error) => {
      console.error('API Error: ', error);
    });
}

