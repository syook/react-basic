import { handleApiResponse } from './utils';

export function createAccount(account){
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4000/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'account': account })
    }).then(function(response) {
      console.log('successful', response);
      return response;
    }).catch(function(error) {
      console.log('failure', error);
      return error;
    });
  });
}
