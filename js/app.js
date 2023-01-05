const button = document.querySelector(".btn"); //sledování kliku
const image = document.querySelector(".img"); //sledování obrázku
const sizeOfImg = document.querySelector(".size"); //sledování velikosti

const webApi = "https://random.dog/woof.json";

async function fetchHandler() { // asynchronní funkce, která posílá požadavek na server
    try { //pomocí této konstrukci vyhledáváme chyby
        const response = await fetch(webApi); // tady ukládáme odpověď serveru, fetch vrátí promise
        const data = await response.json(); // dekódujeme body ReadableStream v JSON
        image.src = data.url; // vlastnost src elementu image přirovnáváme elementu data, který je odkazem
        sizeOfImg.innerHTML = `Size if the image: ${data.fileSizeBytes}`;
    } catch(error) {
        console.log(error);
    }
}

button.addEventListener("click", () => {
    fetchHandler();
});