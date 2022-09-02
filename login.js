const loginForm = document.querySelector('.login');
const nav = document.querySelector('nav');
const auth = document.querySelector('.auth');

console.log(nav)
console.log(auth)

const user = {};

const handleChange = (event) => {
    const { name, value } = event.target;
    user[name] = value;
    console.log(user);
  };

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem('users'));
    console.log(registeredUsers)
    const isExisting = registeredUsers.find(
        (item) => item.email === user.email
      );
      if (!isExisting) {
        alert(`User ${user.email} doesnt exists`);
        return
      }
      if(isExisting.password !==  user.password){
        alert('wrong password') 
        return
      }
      auth.classList.style.display = 'none';
      nav.classList.style.display = 'block';

      window.location.href = '/index.html'
})

