document.getElementById('deposit-btn').addEventListener('click', ()=> {

    // get total balance
    const totalBalanceElement = document.querySelector('.balance-total');
    const totalBalance = parseFloat(totalBalanceElement.innerText);
   
    // get deposit total
    const depositTotalElement = document.querySelector('.deposit-total');
    const previousDepositTotalAmount = parseFloat(depositTotalElement.innerText);

    // get deposit field from input
    const depositField = document.querySelector('#deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    // total deposit amount
    const currentDeposit = previousDepositTotalAmount + newDepositAmount;

    // set the total amount into the deposit total field
    depositTotalElement.innerText = currentDeposit;

    // set total amount into the balance total field
    totalBalanceElement.innerText = totalBalance + newDepositAmount;

    // after set the amount input will be empty
    depositField.value = '';
    console.log(totalBalance)

});