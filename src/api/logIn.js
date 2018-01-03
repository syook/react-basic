// import { handleApiResponse } from './utils';

export function logIn(user, subdomain){
  return new Promise((resolve, reject) => {
    fetch(`http://${subdomain}.lvh.me:4000/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'user': user })
    }).then((response) => {
      response.json().then(
        data => {
          resolve(data);
        }).catch(
        error => {
          reject(error);
        })
      // console.log('successful', response);
      // return response;
    }).catch(function(error) {
      console.log('failure', error);
      return error;
    });
  });
}
