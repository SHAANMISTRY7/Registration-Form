const form = document.querySelector('#my-form');
const name = document.querySelector('#user');
const email = document.querySelector('#email');
const list = document.querySelector('.list');
const error = document.querySelector('.error_msg');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(name.value === '' || email.value === '') {
		error.style.display = 'block';
		setTimeout(() => error.style.display = 'none', 3000);
	} else {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`Name : ${name.value}, Email : ${email.value}`));
		list.appendChild(li);

		list.style.marginTop = "50px";

		name.value = '';
		email.value = '';
	}
}