document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.querySelector('input[name="cardNumber"]');
    const cardExpiryInput = document.querySelector('input[name="cardExpiry"]');
    const cvvInput = document.querySelector('input[name="cvv"]');
  
    cardNumberInput.addEventListener('input', function(event) {
      const inputValue = event.target.value;
      event.target.value = inputValue.replace(/[^\d]/g, ''); 
    });
  
    cardExpiryInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        event.target.value = inputValue.replace(/[^\d/]/g, ''); 
      });
      
  
    cvvInput.addEventListener('input', function(event) {
      const inputValue = event.target.value;
      event.target.value = inputValue.replace(/[^\d]/g, '');
    });
  });
  

  