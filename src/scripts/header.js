// src/scripts/header.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.mfn-main-navigation__burger');
    const nav = document.querySelector('.mfn-main-navigation__items');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  });