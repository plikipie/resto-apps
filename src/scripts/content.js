import data from "../DATA.json";

let getData = "";
data.restaurants.forEach((resto) => {
  getData += `<div tabindex="0" class="main__card">
    <h1 class="img__tagline">Kota: ${resto.city}</h1>
    <img src="${resto.pictureId}" alt="${resto.name}" class="card__img" />
    <div class="card__tagline">
        <h2 class="rating">Rating : ${resto.rating}</h2>
        <h3 class="img__title">${resto.name}</h3>
        <p class="img__description">
            ${resto.description}
        </p>
    </div>
</div>`;
});

document.getElementById("main__content").innerHTML = getData;
