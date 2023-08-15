document.getElementById('withdraw-btn').addEventListener('click', ()=> {

    // get total balance
    const totalBalanceElement = document.querySelector('.balance-total');
    const totalBalance = parseFloat(totalBalanceElement.innerText);
   
    // get deposit total
    const withdrawTotalElement = document.querySelector('.withdraw-total');
    const previousWithdrawTotalAmount = parseFloat(withdrawTotalElement.innerText);

    // get deposit field from input
    const withdrawField = document.querySelector('#withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // total deposit amount
    const currentWithdraw = previousWithdrawTotalAmount + newWithdrawAmount;

    // set the total amount into the deposit total field
    withdrawTotalElement.innerText = currentWithdraw;

    // set total amount into the balance total field
    totalBalanceElement.innerText = totalBalance - newWithdrawAmount;
    
    // after set the amount input will be empty
    withdrawField.value = '';

})