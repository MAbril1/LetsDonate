const bcrypt = require('bcryptjs');
const axios = require('axios');

const formData = function () {
    // form data
    let name = document.forms.registerForm.name.value;
    let email = document.forms.registerForm.email.value;
    let zipcode = document.forms.registerForm.zipcode.value;
    let password = document.forms.registerForm.password.value;
    let password2 = document.forms.registerForm.password2.value;

    console.log(name, email, zipcode, password, password2);

    // checks if user entered the correct password twice
    if (password.localeCompare(password2) == 0) {
        let form = new FormData();

        // unsure of this, but needed to push form data to database
        // can be used later for user avatar
        form.append("imageFile", "productImage.files[0]");

        form.append("name", name);
        form.append("email", email);
        form.append("zipcode", zipcode);

        // generate the salt for user password hash
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) { // hashes the password
                if (err) {
                    console.log(err);
                }

                // appends encrypted password to form
                password = hash;
                form.append("password", password);

                // console.log(form.getAll("name"));
                // console.log(form.getAll("password"));

                // calls api to register user to database
                axios.post("/api/registerUser", form, { headers: { 'content-type': "multipart/form-data" } })
                    .then((result) => {
                        if (result.data.success) {
                            alert("Successfully Posted");
                        } else {
                            alert("Post Failure Occurred");
                        }
                    })
                    .catch(exception => {
                        alert("Post Failure Occurred");
                    })
            });
        });
    }
    else {
        alert("Passwords do not match");
    }
}

export default formData;