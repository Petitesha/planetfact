const toggle = (evt, id) => {
  console.log(id)
  const toggle = document.getElementById(id);
  const container = document.querySelector('.container');
  const logo = document.querySelector('.logo h2');
  const listA = document.querySelectorAll('.list a');
  const section1h2 = document.querySelector('.section1-text h2');
  const section1p = document.querySelector('.section1-text p');
  const wikipedia = document.querySelector('.wikipedia');
  const props = document.querySelectorAll('.props');
  const lists = document.querySelectorAll('.list-side a');
  const sidebar = document.querySelector('.sidebar');
  const indicator = document.getElementsByClassName('indicator');
  toggle.classList.toggle('active');
  container.classList.toggle('active');
  logo.classList.toggle('active');
  section1h2.classList.toggle('active');
  section1p.classList.toggle('active');
  wikipedia.classList.toggle('active');
  sidebar.classList.toggle('active');

  for (let i = 0; i < listA.length; i++) {
    listA[i].classList.toggle('active');
  }

  for (let i = 0; i < props.length; i++) {
    props[i].classList.toggle('active');
  }
  for (let i = 0; i < lists.length; i++) {
    lists[i].classList.toggle('active');
  }
};

let user = {};

const signup = (event) => {
  event.preventDefault();
  const confirmPassword = document.querySelector('.confirmPassword');

  if (user.password !== user.confirmPassword) {
    showError(confirmPassword, "Passwords don't match");
    return;
  } else {
    showSuccess(confirmPassword);
  }

  const registeredUsers = JSON.parse(localStorage.getItem('users'));
  console.log(registeredUsers);

  if (!registeredUsers) {
    const array = [];
    array.push(user);
    localStorage.setItem('users', JSON.stringify(array));
  } else {
    const isExisting = registeredUsers.find(
      (item) => item.email === user.email
    );

    if (isExisting) {
      alert(`User $ {
          user.email
        }

        already exists`);
    } else {
      registeredUsers.push(user);
      localStorage.setItem('users', JSON.stringify(registeredUsers));
      const inputs = document.querySelectorAll('.input');
      console.log(inputs);
      inputs.forEach((item) => (item.value = ''));

      user = {};
    }
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  user[name] = value;
  console.log(user);
};

function showError(input, message) {
  console.log(input);
  console.log(message);
  const inputs = input.parentElement;
  inputs.className = 'inputs error';
  const errorMsg = inputs.querySelector('.errormsg');
  errorMsg.innerText = message;
  errorMsg.style.display = 'block';
  // user.style.borderColor = 'red';
}

function showSuccess(input) {
  const inputs = input.parentElement;
  inputs.className = 'inputs success';
  input.style.borderColor = 'green';
  const errorMsg = inputs.querySelector('.errormsg');
  errorMsg.innerText = '';
  errorMsg.style.display = 'none';
}

const login = (event) => {
  event.preventDefault();
  const registeredUsers = JSON.parse(localStorage.getItem('users'));
  console.log(registeredUsers);
  const isExisting = registeredUsers.find((item) => item.email === user.email);

  if (!isExisting) {
    alert(`User $ {
        user.email
      }

      doesnt exists`);
    return;
  }

  if (isExisting.password !== user.password) {
    alert('wrong password');
    return;
  }

  window.location.href = '/index.html';
  localStorage.setItem('isAuthenticated', true);
};

const changeNav = () => {
  const nav = document.querySelector('nav');
  const auth = document.querySelector('.auth');
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  console.log(isAuth);

  if (isAuth) {
    auth.style.display = 'none';
    nav.style.display = 'block';
  }

  // console.log(nav);
  // console.log(auth);
  // nav.classList.toggle('active');
  // auth.classList.toggle('active');
};

changeNav();

const hamburger = document.querySelector('.hamburger img');
const closeBtn = document.querySelector('.hamburger p');
const sidebar = document.querySelector('.sidebar');
console.log(close);

let isMenuOpen = false;

const openSideBar = () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // close.classList.remove('hidden');
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    sidebar.style.display = 'flex';
  } else {
    // hamburger.classList.remove('hidden');
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
    sidebar.style.display = 'none';
  }
};
