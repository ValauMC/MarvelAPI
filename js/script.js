const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const apikey = '4a2119ed87b7a8e77d7fc1e7c35c5465';
const ts = '1';
const hash = 'b66bcb000de3e394d472f739e0851940';
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}`;
const marvel = document.getElementById("marvel");

/* makeRequest (url, "getMarvel(data)") */

fetch(url, requestOptions)
    .then((response) => response.json())
    .then((response) => printData(response.data.results))
    .catch((error) => console.error(error));

    

const printData = (personajes) => {
    //console.log(personajes.length);
    let str = "";
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
            img[i] = "Lo sentimos, no encontramos la imagen "
        }

        if (!bio[i]) {
            bio[i] = "Lo sentimos, no encontramos la Biografía "
        }

        str += `
        <div class="card">
            <img width="230" src="${img[i]}" class="card__img" alt="...">
            <div class="card-body">
                <h1 class="card-title">${name[i]}</h1>
            </div>
            <p>${bio[i]}</p>
            <button class="boton" onclick="showDetail('${name}', '${url}', '${bio}')"> Más información</button>
        </div>
        `
    }
    marvel.innerHTML = str;
}


        
function showDetail(name, img, bio) {
    Swal.fire({
        title: name,
        imageUrl: img,
        html: bio,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/img/Rocket.gif")
        left top
        no-repeat
        `
    });
}
