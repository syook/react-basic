import { handleApiResponse } from './utils';
const token = localStorage.getItem('token');

export function allUsers() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token
      }
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
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token
      },
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
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token
      },
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
