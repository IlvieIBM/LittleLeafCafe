/* ==========================================================================
   Little Leaf Café: optional JavaScript
   --------------------------------------------------------------------------
   Leave this file empty until you've finished the HTML & CSS steps.
   Then follow docs/steps/07-javascript-extras.md.

   Golden rule: the page must still work if this file fails to load.
   ========================================================================== */
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

function getFullYear(year){
   if (!year) return;
}