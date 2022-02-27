var danishprice = 50;
var wellPacked = true;
var butterBreadprice = 25;
var toastPrice = 10;
var myBudget = 100;

// if (danishprice < myBudget) {
//     console.log('danish khamu');
// }
// else if (butterBreadprice < myBudget) {
//     console.log('buttter bon khamu');
// }
// else if (toastPrice < myBudget) {
//     console.log('toast diye cha khabo');
// }
// else {
//     console.log('batash khabo');
// }

// nested condition
if (danishprice < myBudget) {
    if (wellPacked == true) {
        console.log('i will eat danish');
    }
    else {
        console.log('i dont eat rotten danish');
    }
}