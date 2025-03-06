document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('formContainer');
    const successMessage = document.getElementById('successMessage');
    const radioOptions = document.querySelectorAll('.radio-option');
    
    // Add selected class to radio options
    radioOptions.forEach(option => {
    const radioInput = option.querySelector('.radio-input');
    
    radioInput.addEventListener('change', function() {
        radioOptions.forEach(opt => {
        opt.classList.remove('radio-option-selected');
        });
        
        if (this.checked) {
        option.classList.add('radio-option-selected');
        }
    });
    });
    
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');
    
    // Validate first name
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').style.display = 'block';
        firstName.classList.add('input-error');
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
        firstName.classList.remove('input-error');
    }
    
    // Validate last name
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').style.display = 'block';
        lastName.classList.add('input-error');
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
        lastName.classList.remove('input-error');
    }
    
    // Validate email
    if (!email.value.trim()) {
        document.getElementById('emailErrorRequired').style.display = 'block';
        document.getElementById('emailErrorValid').style.display = 'none';
        email.classList.add('input-error');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById('emailErrorRequired').style.display = 'none';
        document.getElementById('emailErrorValid').style.display = 'block';
        email.classList.add('input-error');
        isValid = false;
    } else {
        document.getElementById('emailErrorRequired').style.display = 'none';
        document.getElementById('emailErrorValid').style.display = 'none';
        email.classList.remove('input-error');
    }
    
    // Validate query type
    if (!queryType) {
        document.getElementById('queryTypeError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('queryTypeError').style.display = 'none';
    }
    
    // Validate message
    if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        message.classList.add('input-error');
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
        message.classList.remove('input-error');
    }
    
    // Validate consent
    if (!consent.checked) {
        document.getElementById('consentError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('consentError').style.display = 'none';
    }
    
    if (isValid) {
        // Show success message
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form
        form.reset();
        radioOptions.forEach(opt => {
        opt.classList.remove('radio-option-selected');
        });
    }
    });
});