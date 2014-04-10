var myBalance = 1000.00;
console.log(myBalance);

var oDP = 750.00;

var response = query();

function query() {
    var response = prompt('Would you like to (w)ithdraw, (d)eposit, check (b)alance, or (e)xit?')

    switch(response.toLowerCase()) {
    case 'w':
        withdraw();
        break;
    case 'd':
        deposit();
        break;
    case 'b':
        balance();
        break;
    case 'e':
        exit();
    }
}

function withdraw() {
    var value = prompt('Enter the amount you would like to withdraw');
    myBalance -= parseInt(value);
    if(myBalance < 0) {
        console.log(myBalance)
        myBalance -= 50.00;
        console.log(myBalance)
        myBalance += oDP;
        console.log(myBalance)
        oDP = 0;
    }
    if(myBalance < -750.00) {
        return alert('Your account has been closed for going below -750.00');
    }
    alert('Your balance is' + ' ' + myBalance);
    query();
}

function deposit() {
    var value = prompt('Enter the amount you would like to deposit');
    if(value >= 500.00) {
        myBalance += 25.00;
    }
    myBalance += parseInt(value);
    alert('Your balance is' + ' ' + myBalance);
    query();
}

function balance() {
    alert('Your balance is' + ' ' + myBalance);
    query();
}

function exit() {
    alert('Your session is over');
}

function overdraft() {
    myBalance += parseInt(overdraftProtection);
    overdraftProtection = 0;
}
