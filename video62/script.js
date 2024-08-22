const adjectives = ["Crazy", "Amazing", "Fire"];
const shopNames = ["Engine", "Food", "Garments"];
const otherWords = ["Bros", "Limited", "Hub"];

function generateBusinessNames() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = ""; // Clear the list before generating new names

    adjectives.forEach(adjective => {
        shopNames.forEach(shopName => {
            otherWords.forEach(otherWord => {
                const li = document.createElement("li");
                li.textContent = `${adjective} ${shopName} ${otherWord}`;
                nameList.appendChild(li);
            });
        });
    });
}
