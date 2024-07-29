document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var isValid = true;
    var errorMessage = '';

    var name = document.getElementById('name').value.trim();
    var age = document.getElementById('age').value.trim();
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value.trim();
    var position = document.getElementById('position').value;

    if (!name) {
        isValid = false;
        errorMessage += 'Name is required.<br>';
    }

    if (!age) {
        isValid = false;
        errorMessage += 'Age is required.<br>';
    } else if (isNaN(age) || age < 18 || age > 65) {
        isValid = false;
        errorMessage += 'Age must be a number between 18 and 65.<br>';
    }

    if (!dob) {
        isValid = false;
        errorMessage += 'Date of Birth is required.<br>';
    }

    if (!gender) {
        isValid = false;
        errorMessage += 'Gender is required.<br>';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.<br>';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Invalid email format.<br>';
    }

    if (!position) {
        isValid = false;
        errorMessage += 'Job Position is required.<br>';
    }

    if (!isValid) {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        document.getElementById('successMessage').innerHTML = '';
    } else {
        document.getElementById('errorMessage').innerHTML = '';
        document.getElementById('successMessage').innerHTML = 'Form submitted successfully!';
        // Optionally, you can actually submit the form data to the server here
        // document.getElementById('jobForm').submit();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
