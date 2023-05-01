/* Menu */

const hamburgerMenu = document.querySelector('.nav-open-btn');
const navMenu = document.querySelector('.navbar-list');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-link').forEach((n) =>
	n.addEventListener('click', () => {
		hamburgerMenu.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

/* Table */

const scheduleData = [
	{
		day: 'Monday',
		classes: [
			`9:00 - 10:30
					Ida
					Ahstanga Class`,
			`9:00 - 10:30
					Alex
					Vinyasa Class`,
			`9:00 - 10:30
					Ida
					Ahstanga Class`,
			`9:00 - 10:30
					Alex
					Vinyasa Class`,
			`9:00 - 10:30
					Ida
					Ahstanga Class`,
			`9:00 - 10:30
					Kate
					Vinyasa Class`,
		],
	},
	{
		day: 'Tuesday',
		classes: [
			`12:30 - 13:00
					Ida
					Ahstanga Class`,
			`12:30 - 13:00
					Ida
					Ahstanga Class`,
			`12:30 - 13:00
					Ida
					Ahstanga Class`,
			`12:30 - 13:00
					Ida
					Ahstanga Class`,
			`12:30 - 13:00
					Ida
					Ahstanga Class`,
			`11:00 - 12:30
					Kate
					Ahstanga Class`,
		],
	},
	{
		day: 'Wednesday',
		classes: [
			`16:30 - 16:30
					Alex
					Hatha Class`,
			`16:30 - 16:30
					Alex
					Hatha Class`,
			`16:30 - 16:30
					Alex
					Hatha Class`,
			`16:30 - 16:30
					Alex
					Hatha Class`,
			`16:30 - 16:30
					Alex
					Hatha Class`,
			`14:00 - 15:00
					Alex
					Hatha Class`,
		],
	},
	{
		day: 'Thursday',
		classes: [
			`17:00 - 18:30
					Kate
					Vinyasa Class`,
			`17:00 - 18:30
					Kate
					Vinyasa Class`,
			`17:00 - 18:30
					Kate
					Vinyasa Class`,
			`17:00 - 18:30
					Kate
					Vinyasa Class`,
			`17:00 - 18:30
					Kate
					Vinyasa Class`,
		],
	},
	{
		day: 'Friday',
		classes: [
			`19:0 - 20:30
					Ida
					Ahstanga Class`,
			`19:0 - 20:30
					Ida
					Ahstanga Class`,
			`19:0 - 20:30
					Ida
					Ahstanga Class`,
			`19:0 - 20:30
					Ida
					Ahstanga Class`,
			`19:0 - 20:30
					Ida
					Ahstanga Class`,
		],
	},
];

const scheduleTable = document.querySelector('#schedule-body');

scheduleData.forEach((day) => {
	const newRow = document.createElement('tr');

	day.classes.forEach((yogaClass) => {
		const classCell = document.createElement('td');
		classCell.classList.add('TData');
		const classData = yogaClass.split('\n');

		const classTime = classData[0];
		console.log(classData[0]);
		const classInstructor = classData[1];
		const className = classData[2];

		const instructorSpan = document.createElement('span');
		instructorSpan.classList.add('bold');

		const instructorName = document.createTextNode(classInstructor);
		instructorSpan.appendChild(instructorName);

		classCell.innerHTML = `${classTime}<br>`;
		classCell.appendChild(instructorSpan);
		classCell.innerHTML += `<br>${className}`;

		newRow.appendChild(classCell);
	});

	scheduleTable.appendChild(newRow);
});

/* Form */
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!nameInput.validity.valid) {
		alert('Please enter a valid name.');
		return;
	}

	if (!emailInput.validity.valid) {
		alert('Please enter a valid email address.');
		return;
	}

	alert('Message sent!');
	form.reset();
});
