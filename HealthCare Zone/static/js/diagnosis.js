const diagnosisForm = document.getElementById('diagnosis-form');
const resultBox = document.getElementById('result-box');

diagnosisForm.addEventListener('submit', function(event) {
  // Allow the form to submit normally
  diagnosisForm.submit(); // Continue with form submission after showing the result box
});
