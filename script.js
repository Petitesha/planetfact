// const user = document.querySelector('.name');
// const email = document.querySelector('.email');
// const password = document.querySelector('.password');
// const confirmPassword = document.querySelector('.confirmPassword');
// const form = document.querySelector('.form');
// const input = document.querySelector('.')

const container = document.querySelector('.container');
const logo = document.querySelector('.logo h2')
const listA = document.querySelector('.list a')
const section1h2 = document.querySelector('.section1-text h2')
const section1p = document.querySelector('.section1-text p')
const wikipedia = document.querySelector('.wikipedia')
const props = document.querySelectorAll('.props')
const toggle = document.getElementById('toggle');
const indicator = document.getElementsByClassName('indicator')
toggle.addEventListener('click', function(){
    toggle.classList.toggle('active')
    container.classList.toggle('active')
    logo.classList.toggle('active')
    listA.classList.toggle('active')
    section1h2.classList.toggle('active')
    section1p.classList.toggle('active')
    wikipedia.classList.toggle('active')
    for (let i = 0; i < props.length; i++) {
        props[i].classList.toggle('active')
      }    
}) 
   




// function showError(input, message) {
//     console.log(input)
//     console.log(message)
//     const inputs = input.parentElement;
//     inputs.className = 'inputs error';
//     const errorMsg = inputs.querySelector('.errormsg');
//     errorMsg.innerText = message; 
//     errorMsg.style.display = 'block';
//     user.style.borderColor = 'red'; 
// }

// function showSuccess (input) {
//    const inputs = input.parentElement;
//     inputs.className = 'inputs success';
//     user.style.borderColor = 'green'; 
//     const errorMsg = inputs.querySelector('.errormsg');
//     errorMsg.innerText = ''; 
//     // errorMsg.style.display = 'none';
// }
// function checkEmail(input) {
//     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(re.test(input.value.trim())) {
//     showSuccess(input)
//   } else {
//     showError(input, 'Email is not valid')
//   }
// }
// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         // console.log(input.value)
//         if (input.value.trim() === '') {
//             // console.log('@GOT HR')
//             showError(input, `${getFieldName(input)} is Required`)
//         }else{
//             showSuccess(input)

//         }
//     });
// }
// function checkLength(input, min , max) {
//     if(input.valuelength < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters `)
//     } else if (input.value.length > max){
//         showError(input, `${getFieldName(input)} must be less than ${max} character`)
//     } else {
//         // showSuccess(input);
//     }
// }

// function checkPasswordsMatch(input1, input2) {
//     if(input1.value!==input2.value){
//         showError(input2, 'passwords do not match')
//     } else {
//         // showSuccess(input2);
//     }
// }

// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     checkEmail(email)
//     checkRequired([user, email, password, confirmPassword]);
//     checkLength(user, 3 , 15);
//     checkLength(password, 6 , 25);
//     checkPasswordsMatch(password, confirmPassword)
// })


