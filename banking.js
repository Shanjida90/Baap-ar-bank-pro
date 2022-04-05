    // get deposit and withdraw amount by function
    function getInputValue(inputId) {
              const inputField=document.getElementById(inputId);
            const inputAmountText=inputField.value;
            const amountValue=parseFloat(inputAmountText);
         // clear deposit input
            inputField.value=" ";
            return amountValue;
    }
    function updateTotalField (totalFieldId,takeInputOfFields) {
           const currentTotal=document.getElementById(totalFieldId);
         const previousTotalText=currentTotal.innerText;
        const previousAmount=parseFloat(previousTotalText);
        const newTotal=previousAmount +takeInputOfFields;
        currentTotal.innerText=newTotal;
    }
    function updateBalance(amount,isAdd) {
        const balanceTotal=document.getElementById('balance-total');
        const balalnceTotalText=balanceTotal.innerText;
        const previousBalanceTotal=parseFloat(balalnceTotalText);
        if (isAdd==true) {
            balanceTotal.innerText=previousBalanceTotal+amount;
        }
        else{
            balanceTotal.innerText=previousBalanceTotal-amount;
        }
    }



    



// // handle deposit button event
document.getElementById("deposit-button").addEventListener('click',function () {
        // get the amount deposited
     
    // update deposit total
    //  const depositTotal=document.getElementById('deposit-total');
    //  const previousDepositText=depositTotal.innerText;
    // const previousDepositAmount=parseFloat(previousDepositText);
    // const newDepositTotal=previousDepositAmount +depositAmount;
    // depositTotal.innerText=newDepositTotal;
    // clear deposit input
    // depositInput.value="";

// -----------------get balance total Aafter deposit-------------------->  
// const balanceTotal=document.getElementById('balance-total');
// const balalnceTotalText=balanceTotal.innerText;
// const previousBalanceTotal=parseFloat(balalnceTotalText);
// const newBalanceTotal=previousBalanceTotal + depositAmount;
// balanceTotal.innerText=newBalanceTotal;
const depositAmount=getInputValue('deposit-input');
updateTotalField('deposit-total',depositAmount);
updateBalance(depositAmount,true);
})

// // handle withdraw button event
// // catch withdraw button
document.getElementById('withdraw-button').addEventListener('click',function () {
   

    //get and  update withdraw total
    // const withdrawTotal=document.getElementById('withdraw-total');
    // const previousWithdrawText=withdrawTotal.innerText;
    // const previousWithdrawAmount=parseFloat(previousWithdrawText);
    // const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    // withdrawTotal.innerText=newWithdrawTotal;
     // get balance after withdraw
    // const balanceTotal=document.getElementById('balance-total');
    // const balalnceTotalText=balanceTotal.innerText;
    // const previousBalanceTotal=parseFloat(balalnceTotalText);
    // const newBalanceTotal=previousBalanceTotal-withdrawAmount;
    // balanceTotal.innerText=newBalanceTotal;
       const withdrawAmount=getInputValue('withdraw-input');
    updateTotalField('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount,false);
})