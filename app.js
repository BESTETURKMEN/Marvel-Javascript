
const getCardsData = () => {
    fetch("data.json").then(res => res.json()).then(data => data.map((item) => {
        const cards = document.createElement("div");
        cards.id = "cards";
        cards.innerText = item.Name

        const photo = document.createElement("img");
        photo.setAttribute("src", item.photo);

        cards.appendChild(photo);
        container.appendChild(cards);


    }))
}
getCardsData()


const container = document.getElementsByClassName("container")[0];
const header = document.createElement("div");
header.className = "header";
header.innerText = "STAR WARS MOVİE CHARACTERS";
container.appendChild(header);
