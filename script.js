document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const confirmationDiv = document.getElementById('confirmation');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

    
        const name = document.querySelector('input[name="Name"]').value;
        const email = document.querySelector('input[name="Email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const gender = document.querySelector('input[name="Gender"]:checked')?.value;
        const qualification = Array.from(document.querySelectorAll('input[name="Qualification"]:checked')).map(el => el.value);
        const course = document.querySelector('select[name="Course"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        
        const thankYouMessage = `
            <h2>Thank you for your submission!</h2>
            <p>We have received your form. Here's a summary of your details:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Password:</strong> ${password}</li>
                <li><strong>Gender:</strong> ${gender}</li>
                <li><strong>Qualification:</strong> ${qualification.join(', ')}</li>
                <li><strong>Course:</strong> ${course}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
        `;

        
        form.style.display = 'none';
        confirmationDiv.innerHTML = thankYouMessage;
        confirmationDiv.style.display = 'block';
    });
});
