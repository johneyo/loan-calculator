// listen fpr submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
  const results = document.getElementById('results');
  results.style.display = 'none';
  // show loader
  const loading = document.getElementById('loading');loading.style.display = 'block';
  const fault1 = document.getElementById('fault1');fault1.style.display = 'none';
  const fault2 = document.getElementById('fault2');
  fault2.style.display = 'none'; 
  const fault3 = document.getElementById('fault3');
  fault3.style.display = 'none';

  setTimeout(calculateResults, 2000);
    e.preventDefault();
});

function calculateResults(e){
  console.log('Calculating...');
  
  //UI VARIABLES
  const amount = document.getElementById('amount');
  console.log(amount.value);
  if(amount.value == ''){
    fault1.style.display = 'block';
};
  const interest = document.getElementById('interest');
  if(interest.value == ''){
    fault2.style.display = 'block';
};
  const years = document.getElementById('years');
   if(years.value == ''){
    fault3.style.display = 'block';
};
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) /100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;
  
const x = Math.pow(1 + calculateInterest, calculatePayment);
const monthly = (principal* x *calculateInterest )/(x-1);
if (isFinite(monthly)){
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value =(monthly * calculatePayment).toFixed(2);
totalInterest.value =((monthly*calculatePayment)- principal).toFixed(2);
 results.style.display = 'block';
 loading.style.display = 'none';
}else {
  showError('Please check your numbers');
}
}
function showError(error){
  results.style.display = 'none';
  loading.style.display = 'none';
  //create a div
  const errorDiv = document.createElement('div');
//get element
const card = document.querySelector('.card');
const heading = document.querySelector('.heading')

  //add class
  errorDiv.className = 'alert alert-danger'
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading)

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
  }
function clearError(){
    document.querySelector('.alert').remove();
}
 
