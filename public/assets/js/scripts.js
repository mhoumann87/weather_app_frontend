// get the elements on the pages
const copy = document.querySelector('#copy');
const contact = document.querySelector('#contact');

const year = new Date().getFullYear();
const aLink =
  '<a href="https://www.michael.h.dk" target="_blank">Michael Houmann</a>';
const text = 'Michael Houmann';
const mail = 'mailto:admin@michael-h.dk';

copy.innerHTML =
  year === 2021 ? `&copy;${year} ${aLink}` : `&copy;2021 - ${year} ${aLink}`;

contact.innerHTML = `<a href="${mail}">Send me an e-mail</a>`;
