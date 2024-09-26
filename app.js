const numTarjeta = document.getElementById("numTarjeta");
const numInput = document.getElementById("numInput");
const nameInput = document.getElementById("name");
const card = document.querySelector(".card");
const ccvInput = document.getElementById("ccv");
const expInpuit = document.getElementById("expiracion");

function setNumeroTarjeta(event) {
    let numberText = parseInt(
        numInput.value.replace(/ /g, "")
    )

    if (isNaN(numberText)) {
        numberText = "";
    }

    if (numInput.value == "") {
        numTarjeta.textContent = "#### #### ####";
        return;
    }
    const result = String(numberText).replace(/([0-9]{4})/g, '$1 ');
    
    numInput.value = result;
    numTarjeta.textContent = result;
}
numInput.addEventListener("keyup", setNumeroTarjeta);

function setName() {
    const saveName = String(nameInput.value).replace(/[0-9]/g, "");
    nameInput.value = saveName;
    document.getElementById("nombreCompleto").textContent = `${nameInput.value}`;
    document.getElementById("firma").textContent = `${nameInput.value}`;
}
nameInput.addEventListener("keyup", setName);

function voltearTarjeta() {
    document.querySelector(".card").classList.toggle("flip");
}
function Setccv() {
    document.getElementById("CCV").textContent = `${ccvInput.value}`;
}
ccvInput.addEventListener("keyup", Setccv)

function setDate() {
    document.getElementById("expirar").textContent = `${expInpuit.value}`;
}
expInpuit.addEventListener("change", setDate)

function toggleForm() {
    document.getElementById("form").classList.toggle("hidden");
}

function saveItems (){
    if (nameInput.value == "" || numInput.value == "" || expInpuit.value == "" || ccvInput.value < 3 || numInput.value < 19) {
        alert("Llena todos los datos, por favor");
    }else{
        alert(`            Nombre Completo: ${nameInput.value}
            Número de tarjeta: ${numInput.value}
            Expiración: ${expInpuit.value}
            CCV: ${ccvInput.value}`)
    }
}