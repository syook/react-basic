import { handleApiResponse } from './utils';

export function allUsers() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      response.json().then(
        data => {
          resolve(data);
        })
    }).catch((error) => {
      reject(error);
    })
  })
}

export function createUser(user){
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'user': user })
    }).then((response) => {
      response.json().then(
        data => {
          resolve(data);
        })
    }).catch((error) => {
      reject(error);
    });
  });
}

export function updateUser(user){
  console.log(user);
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'user': user })
    }).then((response) => {
      response.json().then(
        data => {
          resolve(data);
        })
    }).catch((error) => {
      reject(error);
    });
  });
}
