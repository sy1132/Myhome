<script>
		const form = document.querySelector('form');
		const emailInput = document.querySelector('#email');
		const passwordInput = document.querySelector('#password');
		const confirm-passwordInput = document.querySelector('#confirm-password');

		form.addEventListener('submit', function(event));
			Event.preventDefault();
			const email = emailInput.value;
			const password = passwordInput.value;
			const confirm-password = confirm-passwordInput.value;

			if (email === '' || password === '' || confirm-password === ''){
				alert('Please fill in all fields.');
				return;
            }
			if (password !== confirm-password){
				alert('Passwords do not match.');
				return;
            }
</script>