console.log('JS OK');

/* 
1. Chiedi all’utente il suo nome,
2. Chiedi il suo cognome,
3. Chiedi il suo colore preferito
4. Aggiungo anno alla fine della password
5. Infine stampa sulla pagina nomecognomecolorepreferito21
*/

// ç Chiediamo il nome 
const userName = prompt('Come ti chiami?');
console.log(userName);

// ç Chiediamo il cognome 
const userSurname = prompt('Quale è il tuo cognome?');
console.log(userSurname);

// ç Chiediamo il colore preferito
const userFavColor = prompt('Quale è il tuo colore preferito?');
console.log(userFavColor);

// ç aggiungiamo anno alla fine della password
const year = '21';
console.log(year);

// ç Creiamo la password
const password = userName + userSurname + userFavColor + year;
console.log(password);