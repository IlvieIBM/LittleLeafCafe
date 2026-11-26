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
const navLinks = document.querySelectorAll('a');
const filters = document.querySelector('.filters');
const filter = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.menuCard');
hamburger.hidden = false;
filters.hidden = false;

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

navLinks.forEach(link => {
   link.addEventListener('click', () => {
      navItem.classList.remove('is-open');
      hamburger.setAttribute('is-open', 'false');
   });
});

filter.forEach(button => {
   button.addEventListener('click', () => {

      const isFiltered = button.dataset.filter;

      // Update active button
      filter.forEach(btn => {
         btn.setAttribute('aria-pressed', 'false');
      });

      button.setAttribute('aria-pressed', 'true');

      // Filter cards
      cards.forEach(card => {
         const filterCategory = card.querySelector('.category').dataset.category;

         if (isFiltered !== "all" && filterCategory !== isFiltered) {
           card.setAttribute('aria-hidden', 'true');
         } else {
           card.setAttribute('aria-hidden', 'false');
         }
      });
   });
});

