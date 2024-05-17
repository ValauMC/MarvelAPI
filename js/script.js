const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const apikey = '4a2119ed87b7a8e77d7fc1e7c35c5465';
const ts = '1';
const hash = 'b66bcb000de3e394d472f739e0851940';
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}`;
const main = document.getElementById("main");

fetch(url, requestOptions)
    .then((response) => response.json())
    .then((response) => printData(response.data.results))
    .catch((error) => console.error(error));

const printData = (personajes) => {
    //console.log(personajes.length);
    let str = '< class="row">';
    let i = 0;
    let name = [];
    let img = [];
    let bio = [];

    for (i = 0; i < personajes.length; i++) {
        name[i] = personajes[i].name;
        img[i] = (personajes[i].thumbnail.path) + '.' + (personajes[i].thumbnail.extension);
        bio[i] = personajes[i].description;

        if (!name[i]) {
            name[i] = "Lo sentimos, no encontramos el nombre "
        }

        if (!img[i]) {
            img[i] = "Lo sentimos, no encontramos el nombre "
        }

        if (!bio[i]) {
            bio[i] = "Lo sentimos, no encontramos el nombre "
        }

        str = str + `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img class="card__img" src="${img[i]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${name[i]}</h5>
                        <p class="card-text">${bio[i]}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    str = str + '</div>'
    main.innerHTML = str;
}
