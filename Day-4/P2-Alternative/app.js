let button = document.querySelector(".btn");

let h1 = document.querySelectorAll('h1');

// let teams = ["CSK", "MI", "RCB", "KKR", "SRH", "DC", "RR", "PBKS", "LSG", "GT"];

let teams = [
    {
        team: "CSK",
        primaryColor: '#FFFF00',    // Yellow
        secondaryColor: '#0152a2'    // Black
    },
    {
        team: "MI",
        primaryColor: '#045093',    // Blue
        secondaryColor: '#FFD700'    // Gold
    },
    {
        team: "RCB",
        primaryColor: '#DA1818',    // Red
        secondaryColor: '#000000'    // Black
    },
    {
        team: "KKR",
        primaryColor: '#3B215D',    // Purple
        secondaryColor: '#D1AB3E'    // Gold
    },
    {
        team: "SRH",
        primaryColor: '#FB643E',    // Orange
        secondaryColor: '#000000'    // Black
    },
    {
        team: "DC",
        primaryColor: '#17449B',    // Blue
        secondaryColor: '#D71920'    // Red
    },
    {
        team: "RR",
        primaryColor: '#0033A0',    // Blue
        secondaryColor: '#FFCC00'    // Gold
    },
    {
        team: "PBKS",
        primaryColor: '#D71920',    // Red
        secondaryColor: '#C0C0C0'    // Silver
    },
    {
        team: "LSG",
        primaryColor: '#005FA8',    // Blue
        secondaryColor: '#FFAC1C'    // Orange
    },
    {
        team: "GT",
        primaryColor: '#0D1E2D',    // Dark Blue
        secondaryColor: '#B4975A'    // Gold
    }
];





button.addEventListener('click', function () {
    let num = Math.floor(Math.random() * teams.length);

    
    let winner = teams[num];

    
    

    h1[1].innerHTML = winner.team;
    h1[1].style.backgroundColor = winner.primaryColor
    h1[1].style.color = winner.secondaryColor
})