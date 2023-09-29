/* 
step-1: add event listenser to the button
step-2: get the input value inside the withdraw input filed
step-2.5: make sure input filed value string to number
step-3: get the current withdraw total
step-4: add numbers to set the total withdraw
step-4.5: set the withdraw total
step-5: get current total balance 
step-6: calculate current total balance
step-6.5: set the balance total
step-7: clear the deposit input filed
 */
// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2: 
    const withdrawInputFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawInputFiled.value;
    // step-2.5
    const newWithdrawAmount = parseFloat(newWithdrawAmountString); 

    // step-3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-7:
    withdrawInputFiled.value = '';

    // step-5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tor Baap er bank e ato taka naaai :) ');
        return;
    }

     // step-4: 
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     // step-4.5:
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step-6.5
    balanceTotalElement.innerText = currentBalanceTotal;

    


})