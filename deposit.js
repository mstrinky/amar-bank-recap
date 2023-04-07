document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit button click');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    // console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
})