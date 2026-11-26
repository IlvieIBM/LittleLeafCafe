/* ==========================================================================
   Little Leaf Café: optional JavaScript
   --------------------------------------------------------------------------
   Leave this file empty until you've finished the HTML & CSS steps.
   Then follow docs/steps/07-javascript-extras.md.

   Golden rule: the page must still work if this file fails to load.
   ========================================================================== */
document.documentElement.classList.add('js');

const hamburger = document.getElementById('hamburger');
const navItem = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('a')
hamburger.hidden = false;

const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

function getFullYear(year) {
   if (!year) return;
}

hamburger.addEventListener('click', () => {
const isExpanded = hamburger.getAttribute("aria-expanded") === 'true';
hamburger.setAttribute('aria-expanded', String(!isExpanded));
navItem.classList.toggle('is-open', !isExpanded);
});

navLinks.forEach(link =>{
link.addEventListener('click', () => {
   navItem.classList.remove('is-open');
   hamburger.setAttribute('is-open', 'false');
});
});