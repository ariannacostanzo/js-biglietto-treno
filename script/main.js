console.log('JS OK')

//Elemento opzionale che ho inserito io per fare capire all'utente cosa sta succedendo

alert("Salve, inserendo i dati potrai scoprire il prezzo del biglietto di viaggio. Buona fortuna!")

// 0. Prendo l'elemento html che mi serve e creo un messaggio

let message = "Il prezzo del tuo biglietto da viaggio è: "
let paragraph = document.getElementById('myParagraph');
// console.log ("Il messaggio è: " + message)

// 1. Chiedere all'utente il numero chilometri

const kilometersNumber = parseInt(prompt("Quanti Kilometri vuoi percorrere", 50));

// 2. Chiedere all'utente l'età

const userAge = parseInt(prompt("Qual è la tua età?", 18));

console.log("I kilometri sono: " + kilometersNumber);
console.log("L'età è: " + userAge);

// 3. Stabilire il prezzo del viaggio con questi dati

let ticketPrice = (kilometersNumber * 0.21);

// 6. Controllare tutti quei casi in cui l'utente potrebbe immettere qualcosa di diverso rispetto a cosa è stato chiesto.
// Questa parte l'ho costruita dopo
let errorMessage = "";

if (isNaN(kilometersNumber) || isNaN(userAge)) {
    errorMessage += "Devi inserire dei numeri!";
    alert(errorMessage)
} else {
// 4. Creare la condizione per cui in base all'età ci potrebbe essere uno sconto

    if (userAge < 18) {
        ticketPrice = (ticketPrice - (ticketPrice *20)/100).toFixed(2);
        message += `<strong> ${ticketPrice}€<strong>` ;
        console.log("il prezzo è scontato per i minorenni")
    } else if (userAge > 65) {
        ticketPrice = (ticketPrice - (ticketPrice *40)/100).toFixed(2);
        message += `<strong> ${ticketPrice}€<strong>` ;
        console.log("il prezzo è scontato per gli over 65")
    } else {
        ticketPrice = (ticketPrice).toFixed(2);
        message += `<strong> ${ticketPrice}€<strong>` ;
        console.log("il prezzo non è scontato");
    }
}


// 5. Inserire il prezzo finale nella pagina html

paragraph.innerHTML = message 