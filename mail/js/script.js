/*
    STEPS
    1. Creare una lista di email con un array
    2. Chiedere all'utente la propria email attraverso un prompt
    3. Verificare se la email dell'utente è presente nella lista
    4. Stampare in console l'esito del controllo
*/

const emaillist = ['tizio@email.com', 'caio@email.com', 'sempronio@email.com', 'mailutente@email.com', 'placeholder@email.com'];

console.log('emaillist', emaillist, emaillist.lenght);

let usermail = (prompt('Digita la tua email'));

if (usermail == emaillist[0] || 
    usermail == emaillist[1] ||
    usermail == emaillist[2] ||
    usermail == emaillist[3] ||
    usermail == emaillist[4]) {

    alert('La tua email è nella lista');

    console.log('La tua email è nella lista');
    console.log('usermail', usermail);
}
else {
    alert('La tua email non è nella lista');

    console.log('La tua email non è nella lista');
};