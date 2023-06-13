
    function validat() {
      var name = document.getElementById('name').value;
      var regNumber = document.getElementById('regNumber').value;
      var dob = document.getElementById('dob').value;
      var program = document.getElementById('program').value;
      var email = document.getElementById('email').value;
      var tempAddress = document.getElementById('tempAddress').value;
      var permAddress = document.getElementById('permAddress').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var permAddressCheckbox = document.getElementById('permAddressCheckbox').checked;

      var nameRegex = /^[a-zA-Z ]{2,30}$/;
      var regNumberRegex = /^[a-zA-Z0-9]+$/;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var phoneNumberRegex = /^\d{10}$/;

      if (!nameRegex.test(name)) {
        alert("Please enter a valid name (up to 30 alphabets).");
        return false;
      }

      if (!regNumberRegex.test(regNumber)) {
        alert("Please enter a valid register number (alphabets and numbers only).");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
      }

      if (permAddressCheckbox) {
        document.getElementById('permAddress').value = tempAddress;
      }

      return true;
    }
   