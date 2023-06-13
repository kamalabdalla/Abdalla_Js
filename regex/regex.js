// let fom = document.getElementById("fom");
// fom.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  let name = document.getElementById("name");
  let zip = document.getElementById("zip");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let cnfpssd = document.getElementById("cnfpssd");

  name.value = "";
  zip.value = "";
  phone.value ="";
  email.value = "";
  password.value = "";
  cnfpssd.value = "";

});

function check() {
  document.getElementById("name").addEventListener("blur", function () {
    const name = document.getElementById("name");
    const par = document.getElementById("pp");

    const patern = /^[a-zA-Z(\s)?]{2,23}$/;

    if (!patern.test(name.value)) {
      par.style.display = "block";
    } else {
      par.style.display = "none";
    }
  });

  total = 0;
  for (i = 0; i < document.fom1.box.length; i++) {
    if (document.fom1.box[i].checked) {
      total = total + 1;
    }
  }
  if (total > 2) {
    alert("please select two color");
    document.fom1.box.checked = false;
  }

  let pssd = document.getElementById("password").value;
  let cpssd = document.getElementById("cnfpssd").value;
  let mssg = document.getElementById("ms");
  if (pssd.length != 0) {
    if (pssd == cpssd) {
      mssg.textContent = "passd is math";
    } else {
      mssg.textContent = "passd is not math";
    }
  }

  return false;
}
// let p = document.getElementById('o')
// setInterval(()=>{
//     console.log('abdalla')
//     o.textContent = 'abdalla'
// }, 3000);

const email =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})(\.([a-zA-Z]{2,5}))?$/;

const zip = /^[0-9]{5}$/;

const ph = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/


// Minimum eight characters, at least one letter and one number:
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

// Minimum eight characters, at least one letter, one number and one special character:
// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"