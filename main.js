function change(){
    let due = Number(document.getElementById('amount-due').value);
    let received = Number(document.getElementById('amount-received').value);
   
    const quarters = 25, dimes = 10, nickels = 5;
   
    let diff = received - due;
    let posNum = Math.abs(diff);
    
    let interger = Math.trunc(posNum);
    let decimal = Math.round((posNum - interger) * 100);
    
    let aDollars = interger;    
    let aQuarters = Math.floor(decimal / quarters);
    let qRemainder = decimal % quarters;
   
    let aDimes = Math.floor(qRemainder/ dimes);
    let dRemainder = qRemainder % dimes;
    
    let aNickels = Math.floor(dRemainder / nickels);
    let nRemainder = dRemainder % nickels;
    
    let aPennies = nRemainder;
     return {
        dollars: aDollars,
        quarters: aQuarters,
        dimes: aDimes,
        nickels: aNickels,
        pennies: aPennies
    };

}

const button = document.getElementById('calculate-change');

button.addEventListener('click', function() {
    const result = change();
    document.getElementById('dollars-output').textContent = result.dollars
    document.getElementById('quarters-output').textContent = result.quarters
    document.getElementById('dimes-output').textContent = result.dimes
    document.getElementById('nickels-output').textContent = result.nickels
    document.getElementById('pennies-output').textContent = result.pennies

})




    




