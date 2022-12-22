let playernumber = Math.floor(Math.random() * 6) + 1;

let computernumber = Math.floor(Math.random() * 6) + 1;

if (playernumber > computernumber) {
    console.log('Vince il giocatore');
    console.log('playernumber', playernumber);
    console.log('computernumber', computernumber);
}
else if (playernumber < computernumber) {
    console.log('Vince il computer');
    console.log('playernumber', playernumber);
    console.log('computernumber', computernumber);
}
else {
    console.log('Pareggio');
    console.log('playernumber', playernumber);
    console.log('computernumber', computernumber);
}