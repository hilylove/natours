/* eslint-disable*/
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';

// DOM elements
const mapBox = document.getElementById('map');
const loginFrom = document.querySelector('.form');
const logOutBtn = document.querySelector('.nav__el--logout');

// Delegation
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginFrom) {
  loginFrom.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
