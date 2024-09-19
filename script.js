document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('birthdayError').textContent = '';
    document.getElementById('positionError').textContent = '';
    document.getElementById('courseLevelError').textContent = '';
    document.getElementById('timeSlotError').textContent = '';
    document.getElementById('agreementError').textContent = '';

    let isValid = true;

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    const position = document.getElementById('position').value.trim();
    const courseLevel = document.getElementById('courseLevel').value.trim();
    const timeSlot = document.getElementById('timeSlot').value.trim();
    const agreement = document.getElementById('agreement').checked;

    // Validate form data
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required';
        isValid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits';
        isValid = false;
    }

    if (birthday === '') {
        document.getElementById('birthdayError').textContent = 'Birthday is required';
        isValid = false;
    }

    if (position === '') {
        document.getElementById('positionError').textContent = 'Position is required';
        isValid = false;
    }

    if (courseLevel === '') {
        document.getElementById('courseLevelError').textContent = 'Course level is required';
        isValid = false;
    }

    if (timeSlot === '') {
        document.getElementById('timeSlotError').textContent = 'Preferred time slot is required';
        isValid = false;
    }

    if (!agreement) {
        document.getElementById('agreementError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    }

    
    // If form is valid, prepare and send data
    if (isValid) {
        // Construct the data object
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            birthday,
            position,
            courseLevel,
            timeSlot
        };
        
        const url = 'https://rn3isnamsk.execute-api.us-east-1.amazonaws.com/default/qwert';
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: "follow"
        };
        
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.error('Error:', error));
    }
    
});
