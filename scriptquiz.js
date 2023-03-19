
window.addEventListener("DOMContentLoaded", (event) =>  {
    const form = document.querySelector('form');


form.addEventListener('submit', (event) => {


  let Totaloui = 0;
  let Totalnon = 0;
  const inputs = form.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    if (input.checked) {
      if (input.value === 'oui') {
        Totaloui++;
      } else if (input.value === 'non') {
        Totalnon++;
      }
    }
  });

  
  let result ;
  if (Totaloui > Totalnon) {
    result = 'ATTEINT';
  } else {
    result = 'PAS ATTEINT';
  }

  
  alert(`VOUS ÊTES ${result} DE LA COVID-19.`);
});
});