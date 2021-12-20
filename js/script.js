console.log('JS OK');

/* 
1. Chiedi all’utente il suo nome,
2. Chiedi il suo cognome,
3. Chiedi il suo colore preferito
4. Aggiungo anno alla fine della password
5. Infine stampa sulla pagina nomecognomecolorepreferito21
*/

// Chiediamo il nome 
const userName = prompt('Come ti chiami?');
console.log(userName);

// Chiediamo il cognome 
const userSurname = prompt('Quale è il tuo cognome?');
console.log(userSurname);

// Chiediamo il colore preferito
const userFavColor = prompt('Quale è il tuo colore preferito?');
console.log(userFavColor);

// aggiungiamo anno alla fine della password
const year = '21';
console.log(year);

// Creiamo la password
const userPassword = userName + userSurname + userFavColor + year;
console.log(userPassword);

// Recupero elemento in cui stampare
const finalpasswordElement = document.getElementById('finalpassword');

// Stampiamo la password
finalpasswordElement.innerText = userPassword;
