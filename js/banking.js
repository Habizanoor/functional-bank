// take input for deposit and withdrow 
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const newAmountText = input.value;
    const perDayAmount = parseFloat(newAmountText);
    input.value = '';
    return perDayAmount; 
}

// total field function for deposit and withdrow
function updateTotalField(amount,totalFieldId){
    const totalAmount = document.getElementById(totalFieldId);
    const previousAmountText = totalAmount.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const totalChange = parseFloat(previousAmount) + amount;
    totalAmount.innerText = totalChange;
}

function getCurrentBalance(){
    const updatedBalance = document.getElementById('total-balance');
    const mainBalanceText = updatedBalance.innerText;
    const mainBalance = parseFloat(mainBalanceText);
    return mainBalance;
}

// total balance function 
function updateBalance(inputAmount,isAdd){
    const updatedBalance = document.getElementById('total-balance');
   /* const mainBalanceText = updatedBalance.innerText;
    const mainBalance = parseFloat(mainBalanceText);*/
    const previousBalance = getCurrentBalance();
    if(isAdd){
        updatedBalance.innerText = inputAmount + mainBalance;
    }
    else{
        updatedBalance.innerText = mainBalance - inputAmount;
    }
    
}
// deposit 
document.getElementById('deposite-btn').addEventListener('click',function(){
    /*const depositeInput = document.getElementById('deposite-input');
    const newDepositAmountText = depositeInput.value;
    const depositAmount = parseFloat(newDepositAmountText);*/
    // console.log("new",newDepositAmount);
    // input deposit function call  
    const deposit = getInputValue('deposite-input');
    
    if( deposit > 0 ){
        // total function call 
        updateTotalField(deposit,'deposite-total-amount');
    
        // total balance function call 
        updateBalance(deposit,true);
    }
    
    else{
        document.getElementById('deposit-warning').innerText = 'Enter a valid input';
    }
    // input deposit function call 

    /*const depositeTotalAmount = document.getElementById('deposite-total-amount');
    const previousAmountText = depositeTotalAmount.innerText;
    const previousAmount = parseFloat(previousAmountText);
    // console.log("old",previousAmount);
    const totalDeposit = parseFloat(previousAmount) + deposit;
    // depositeTotalAmount.innerText = updatedDepo;*/
    // console.log(totalDeposit);
    // depositeInput.value = '';
    // total function call
    /*const updatedBalance = document.getElementById('total-balance');
    const mainBalanceText = updatedBalance.innerText;
    const mainBalance = parseFloat(mainBalanceText);
    const newUpdatedMainBalance = deposit + mainBalance;
    updatedBalance.innerText = newUpdatedMainBalance;*/
   
});

// withdrow 
document.getElementById('withdrow-btn').addEventListener('click',function(){
    /*const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmount = withdrowInput.value;*/
    
    // console.log("new",withdrowAmount);
    const withdrow = getInputValue('withdrow-input');
    const currentBalance = getCurrentBalance();
    if(withdrow > 0 && withdrow < currentBalance){
        // total withdrow function call 
        updateTotalField(withdrow,'withdrow-total-amount');
    
        // total balance function call 
        updateBalance(withdrow,false);
    }
    else if(withdrow > currentBalance){
        document.getElementById('withdrow-warning').innerText = 'you do not have sufficient amount.';
    }
    else{
        document.getElementById('withdrow-warning').innerText = 'Enter a valid input.';
    }
    // update withdrow total 
    /*const withdrowTotal = document.getElementById('withdrow-total-amount');
    const withdrowTotalAmount = withdrowTotal.innerText;
    withdrowTotal.innerText = withdrow + parseFloat(withdrowTotalAmount);*/
    
    
    /*const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrow;*/
    // withdrowInput.value = '';
    // total balance function call 
   
});