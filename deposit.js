document.getElementById("btn-deposit").addEventListener('click',function(){
  let newDepositFieldString=document.getElementById('deposit-field').value;
  
  let newDepositFieldValue = parseFloat(newDepositFieldString);



  let previousDepositField=document.getElementById('deposit-total').innerText;

  let previousDepositValue = parseFloat(previousDepositField);
let totalDeposit= previousDepositValue+newDepositFieldValue;
document.getElementById('deposit-total').innerText=totalDeposit;

})
document.getElementById("btn-withdraw").addEventListener('click',function(){
  let newDepositFieldString=document.getElementById('withdraw').value;
  
  let newDepositFieldValue = parseFloat(newDepositFieldString);



  let previousDepositField=document.getElementById('withdraw-total').innerText;

  let previousDepositValue = parseFloat(previousDepositField);
let totalDeposit=newDepositFieldValue;
document.getElementById('withdraw-total').innerText=totalDeposit;

})
document.getElementById("btn-deposit").addEventListener('click',function(){
  let newDepositFieldString=document.getElementById('deposit-field').value;
  
  let newDepositFieldValue = parseFloat(newDepositFieldString);

  let balDepositField=document.getElementById('balance-total').innerText;

  let balDepositValue = parseFloat(balDepositField);
let totalDeposit=balDepositValue+newDepositFieldValue;
document.getElementById('balance-total').innerText=totalDeposit;

})
document.getElementById("btn-withdraw").addEventListener('click',function(){
  let newDepositFieldString=document.getElementById('withdraw').value;
  
  let newDepositFieldValue = parseFloat(newDepositFieldString);

  let balDepositField=document.getElementById('balance-total').innerText;

  let balDepositValue = parseFloat(balDepositField);
let totalDeposit= balDepositValue-newDepositFieldValue;
document.getElementById('balance-total').innerText=totalDeposit;

})
