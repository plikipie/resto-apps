import data from "../DATA.json";

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
