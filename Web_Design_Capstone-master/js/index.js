function getAge() {
	const date = new Date();
	const age = date.getFullYear() - 1998;
	document.getElementById('age').innerHTML = age;
}