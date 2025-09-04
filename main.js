function change(){
    let due = Number(document.getElementById('amount-due').value);
    let received = Number(document.getElementById('amount-received').value);
   
    const quarters = 25, dimes = 10, nickels = 5;
   
    let diff = received - due;
    
    let interger = Math.trunc(diff);
    let cents = Math.round((diff - interger) * 100);
    
    let aDollars = interger;    
    let aQuarters = Math.floor(cents / quarters);
    let qRemainder = cents % quarters;
   
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



const createOdometer = (el, value) => {
    const odometer = new Odometer({
        el: el,
        value: value,
    })
}
const dollarsOdometer = document.getElementById('dollars-output');
const quartersOdometer = document.getElementById('quarters-output');
const dimesOdometer = document.getElementById('dimes-output');
const nickelsOdometer = document.getElementById('nickels-output');
const penniesOdometer = document.getElementById('pennies-output');

createOdometer(dollarsOdometer, );
createOdometer(quartersOdometer, 0);
createOdometer(dimesOdometer, 0);
createOdometer(nickelsOdometer, 0);
createOdometer(penniesOdometer, 0);

const button = document.getElementById('calculate-change');

button.addEventListener('click', function() {
    const result = change();
    document.getElementById('dollars-output').innerHTML  = result.dollars;
    document.getElementById('quarters-output').innerHTML = result.quarters;
    document.getElementById('dimes-output').innerHTML    = result.dimes;
    document.getElementById('nickels-output').innerHTML  = result.nickels;
    document.getElementById('pennies-output').innerHTML  = result.pennies;

})




    




