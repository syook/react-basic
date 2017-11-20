// import { handleApiResponse } from './utils';

export function createAccount(account){
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4000/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'account': account })
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
