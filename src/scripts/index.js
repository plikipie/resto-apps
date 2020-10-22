import "regenerator-runtime"; /* for async await transpile */
import "../styles/css/main.css";
import "../styles/css/appbar.css";
import "../styles/css/jumbotron.css";
import "../styles/css/content.css";
import "../styles/css/footer.css";

import data from "../DATA.json";

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     var data = JSON.parse(xhttp.responseText);
//     console.log(data);
//   }
// };
// xhttp.open("GET", "data", true);
// xhttp.send();
// // data.forEach((resto, index) => {
// //   console.log(`${index + 1}. ${resto.name} (${resto.pictureId})`);
// // });

let getData = "";
data.restaurants.forEach((resto) => {
  getData += `<div class="main__card">
    <h4 class="img__tagline">Kota: ${resto.city}</h4>
    <img src="${resto.pictureId}" alt="" class="card__img" />
    <div class="card__tagline">
        <h3 class="rating">Rating : ${resto.rating}</h3>
        <h1 class="img__title">${resto.name}</h1>
        <p class="img__description">
            ${resto.description}
        </p>
    </div>
</div>`;
});

document.getElementById("main__content").innerHTML = getData;
