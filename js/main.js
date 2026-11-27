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
const today = new Date();
const day = today.getDay();

const status = document.querySelector("#open-status");
const dayCell = document.querySelector(`tr[data-day="${day}"]`);
const row = dayCell ? dayCell.closest("tr") : null;

hamburger.hidden = false;
filters.hidden = false;

function toMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function isOpen(row) {
  const times = row.querySelectorAll("time");

  const openingTime = times[0].getAttribute("datetime");
  const closingTime = times[1].getAttribute("datetime");

  const openingMinutes = toMinutes(openingTime);
  const closingMinutes = toMinutes(closingTime);

  const currentMinutes =
    today.getHours() * 60 + today.getMinutes();

  return currentMinutes >= openingMinutes &&
         currentMinutes < closingMinutes;
}
console.log("Today's day:", day);
console.log("Today's row:", row);
console.log("Status element:", status);
console.log("Opening hours:", row?.querySelectorAll("time"));

if (row) {
  row.classList.add("is-today");

  if (isOpen(row)) {
    status.textContent = "Open now";
    status.classList.add("status--open");
    status.classList.remove("status--closed");
  } else {
    status.textContent = "Closed now";
    status.classList.add("status--closed");
    status.classList.remove("status--open");
  }

  status.hidden = false;
}


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

