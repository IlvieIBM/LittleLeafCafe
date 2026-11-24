# Page content

This file has all the text and images for the page. Your job is to turn it
into HTML, and **choosing the right element for each piece is part of the
exercise**. This file deliberately doesn't tell you which tags to use.

> Notes in *(brackets and italics)* are instructions for you. Don't copy them onto the page.

---

## Site header

- Logo image: `images/logo.svg`, 40 × 40 *(decorative: the café name sits right next to it)*
- Café name: **Little Leaf Café** *(the logo and name together link to `index.html`)*
- Navigation links, each jumping to its section on the page:
  - Menu
  - About
  - Visit
  - Contact

---

## Hero

*(The top banner. Its headline is the most important heading on the whole page.)*

- Small label above the headline: Small-batch coffee · Greenfield
- Main headline: **Slow coffee for busy people.**
- Intro text: Small-batch coffee, loose-leaf tea and pastries baked every morning — two minutes from the station. Grab one to go, or stay a while.
- Link: **See the menu** → goes to the Menu section
- Link: **Find us** → goes to the Visit section
- Image: `images/hero.svg`, 480 × 400. It shows an illustration of a steaming green coffee cup next to a cookie.

---

## Menu

- Section heading: **Our menu**
- Intro: Everything is made in-house or sourced from within 30 miles.

Eight menu items. Each one has a name, price, description, category and a
decorative emoji icon *(screen readers don't need to hear "hot beverage", so hide the emoji from them)*.

| Icon | Name             | Price | Description                                            | Category |
| ---- | ---------------- | ----- | ------------------------------------------------------ | -------- |
| ☕   | Flat white       | £3.20 | Double ristretto with silky steamed milk.              | Coffee   |
| ☕   | Cortado          | £2.90 | Equal parts espresso and warm milk. Small but mighty.  | Coffee   |
| 🧊   | Cold brew        | £3.50 | Steeped for 18 hours. Smooth, sweet and never bitter.  | Coffee   |
| 🍵   | Sencha           | £2.60 | Grassy Japanese green tea, brewed at exactly 70°C.     | Tea      |
| 🫖   | Chai latte       | £3.40 | Our own spice blend, simmered with black tea and milk. | Tea      |
| 🥐   | Butter croissant | £2.80 | Flaky, golden and baked here every morning at 6am.     | Food     |
| 🍌   | Banana bread     | £3.00 | Toasted and served warm with salted butter.            | Food     |
| 🥑   | Avocado toast    | £6.50 | Sourdough, smashed avocado, chilli flakes and lime.    | Food     |

---

## About

- Section heading: **About us**
- Paragraph: Little Leaf started in 2019 as a coffee cart outside Greenfield station. Our regulars kept asking where they could sit down, so in 2021 we moved into the old flower shop across the road — and kept the green door.
- Paragraph: We're a team of six who care about doing simple things well: good beans, fresh bakes, and remembering your order.
- A customer quote: "The best flat white in town, and they always remember my dog's name." *(said by)* Priya, a regular since 2019

A box with a smaller heading, **Why people love us**, and this list:

- Beans roasted locally every week
- Oat, soy and almond milk at no extra cost
- Free Wi-Fi and plenty of plugs
- Bring a reusable cup and get 20p off
- Dogs are always welcome

---

## Visit

- Section heading: **Visit us**
- Intro: Pop in for a quick takeaway or settle in for the afternoon.

**Opening hours** *(this is tabular data: each day has its hours)*

| Day       | Hours         |
| --------- | ------------- |
| Monday    | 07:00 – 18:00 |
| Tuesday   | 07:00 – 18:00 |
| Wednesday | 07:00 – 18:00 |
| Thursday  | 07:00 – 18:00 |
| Friday    | 07:00 – 18:00 |
| Saturday  | 08:00 – 17:00 |
| Sunday    | 09:00 – 15:00 |

**Find us** *(a smaller heading)*

> Little Leaf Café
> 12 Station Road
> Greenfield GF1 2AB
> Phone: 01234 567 890 *(make it a link that starts a call: the full number is +441234567890)*
> Email: hello@littleleaf.example *(make it a link that opens an email)*

**Getting here** *(a smaller heading)*

Turn left out of the main exit of Greenfield station and look for the green door. Bike racks are right outside, and there's step-free access through the side entrance.

---

## Contact

- Section heading: **Get in touch**
- Intro: Planning a birthday breakfast, want to book the back room for a meeting, or just have a question? Send us a message and we'll reply within two working days.

A contact form with these fields:

| Label                          | Kind of field          | Required? | Notes                                                                                     |
| ------------------------------ | ---------------------- | --------- | ----------------------------------------------------------------------------------------- |
| Name                           | single line of text    | yes       | The browser can autofill it                                                               |
| Email                          | email address          | yes       | The browser can autofill it                                                               |
| What's it about?               | pick one from a list   | yes       | Options: "Please choose…" (no value), "A general question", "Booking the back room", "Feedback" |
| Message                        | multiple lines of text | yes       | At least 20 characters. Show the hint "At least 20 characters." under the field            |
| Send me the monthly newsletter | tick box               | no        |                                                                                           |

…and a **Send message** button.

*(There's no server, so the form can't really send anything. That's fine for this exercise.)*

---

## Site footer

- © 2026 Little Leaf Café. Built while learning HTML & CSS.
- Link: **Back to top ↑** *(goes back to the top of the page)*
