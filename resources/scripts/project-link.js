// Define card elements and their corresponding URLs
let cards = [
    document.getElementById("project1"),
    document.getElementById("project2"),
    document.getElementById("project3"),
    document.getElementById("project4"),
];
let urls = [
    "https://github.com/AlexAutumns/Aki-RobotCafe",
    "https://github.com/AlexAutumns/python-basic-calculator",
    "https://alexautumns.github.io/random-quote-generator/",
    "https://github.com/AlexAutumns/AutumnsRedditAPI",
];

// Function to open a new tab with the specified URL
function openNewTab(index) {
    let url = urls[index];
    let win = window.open(url);
    win.focus();
}

// Assign onclick events to the card elements
cards.forEach((card, index) => {
    card.onclick = function () {
        openNewTab(index);
    };
});
