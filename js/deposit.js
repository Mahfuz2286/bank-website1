document.getElementById('btn-deposit').addEventListener('click', function () {
    console.log('deposit button clicked')

    const newDepositAmount = getInputFieldValueById('deposit-field');
    // get previous total by Id
    const previousdepositTotal = getTextElementValueById('deposit-total');
    //    calculate new deposit total
    const newDepositTotal = previousdepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);
    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})