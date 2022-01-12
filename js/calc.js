let buttons = document.getElementsByClassName("num");
let ecran = document.getElementById("value");

//on boucle sur chaque bouton
for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];

    // on effectue une action au clic
    btn.addEventListener("click", () => {
        keydown(btn);
    })
}

function keydown(btn) {
    let value = btn.innerText;

    switch (value) {
        case "C":
            ecran.value = "";
            break;
        case "=":
            getResult();
            break;
        default:
            ecran.value += value;
    }
}

function getResult() {
    ecran.value = eval(ecran.value);
}