
  function validate(creditCardNumber) {
    const cleanedNumber = creditCardNumber.replace(/\D/g, '');
  
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
    const amexPattern = /^3[47][0-9]{13}$/;
    const discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    const dinersPattern = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  
    if (visaPattern.test(cleanedNumber)) {
      return 'Valid Visa card number';
    } else if (mastercardPattern.test(cleanedNumber)) {
      return 'Valid Mastercard number';
    } else if (amexPattern.test(cleanedNumber)) {
      return 'Valid American Express card number';
    } else if (discoverPattern.test(cleanedNumber)) {
      return 'Valid Discover card number';
    } else if (dinersPattern.test(cleanedNumber)) {
      return 'Valid Diners Club card number';
    } else {
      return 'Invalid credit card number';
    }
  }
  
  const creditCardNumber = '4111-1111-1111-1111';
  const validationResult = validate(creditCardNumber);
  console.log(validationResult);
  document.write(validationResult);
  