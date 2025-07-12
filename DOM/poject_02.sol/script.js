const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
//adding an event that revoke only we submit is invoked ny the user 
form.addEventListener('submit', function (e) {
  e.preventDefault();
//  is used to stop the default action of an event
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height < 0) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight < 0) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});