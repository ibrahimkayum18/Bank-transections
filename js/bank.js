

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-money');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositValueString = totalDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString)
    
    const currentDeposit = newDeposit + previousDepositValue;
    totalDeposit.innerText = currentDeposit;

    const balanceTotal = document.getElementById('balance-total');
    const balanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceString);

    const currentBalance = previousBalance + newDeposit;
    balanceTotal.innerText = currentBalance;
    
    depositField.value = '';
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-money');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);
    
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    
    const currentWithdraw = withdrawTotal + withdrawValue;
    withdrawTotalElement.innerText = currentWithdraw;

    const balanceTotal = document.getElementById('balance-total');
    const balanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceString);

    const currentBalance = previousBalance - withdrawValue;
    balanceTotal.innerText = currentBalance;

    withdrawField.value = '';
})


