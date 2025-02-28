
        function validateForm() {
            let errors = [];
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let bio = document.getElementById("bio").value;
            let address = document.getElementById("address").value;
            let interests = document.querySelectorAll("input[name='interests']:checked").length;

            if (!/^[a-zA-Z ]+$/.test(name)) errors.push("Name should contain only alphabets.");
            if (!email.endsWith("@gmail.com")) errors.push("Email must end with @gmail.com.");
            if (password.length < 6) errors.push("Password must be at least 6 characters.");
            if (bio.length > 250) errors.push("Bio cannot exceed 250 characters.");
            if (address.length > 250) errors.push("Address cannot exceed 250 characters.");
            if (interests < 3) errors.push("Select at least 3 interests.");

            let errorList = document.querySelector(".error-messages");
            errorList.innerHTML = "";
            if (errors.length > 0) {
                errors.forEach(error => errorList.innerHTML += `<li>${error}</li>`);
                return false;
            }
            return true;
        }
    