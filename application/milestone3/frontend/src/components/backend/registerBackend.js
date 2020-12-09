const bcrypt = require('bcryptjs');
const axios = require('axios');

const formData = function() {
    // form data
    let name;
    let email;
    let zipcode;
    let password;
    let password2;
    let profileImage;

    if(!document.forms.registerForm.name.value &&
        !document.forms.registerForm.email.value &&
        !document.forms.registerForm.zipcode.value &&
        !document.forms.registerForm.password.value &&
        !document.forms.registerForm.password2.value)
    {
        alert("Form cannot be empty!");
        return;
    }
    else
    {
        name = document.forms.registerForm.name.value;
        email = document.forms.registerForm.email.value;
        zipcode = document.forms.registerForm.zipcode.value;
        password = document.forms.registerForm.password.value;
        password2 = document.forms.registerForm.password2.value;
        profileImage = document.forms.registerForm.profileImage;
    }

    if(password.length < 6 && password2.length < 6)
    {
        alert("Password should be 6 or more characters");
        return;
    }

    console.log(name, email, zipcode, password, password2, profileImage);

    // add logic to prevent registering with the same email

    // checks if user entered the correct password twice
    if(password.localeCompare(password2) == 0)
    {
        let form = new FormData();

        // unsure of this, but needed to push form data to database
        // can be used later for user avatar
        form.append("imageFile", profileImage.files[0]);

        form.append("name", name);
        form.append("email", email);
        form.append("zipcode", zipcode);
        console.log(form.getAll("name"), form.getAll("imageFile"));

        // generate the salt for user password hash
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, function(err, hash){ // hashes the password
                if(err) 
                {
                    console.log(err);
                }

                // appends encrypted password to form
                password = hash;
                form.append("password", password);

                // console.log(form.getAll("name"));
                // console.log(form.getAll("password"));

                // calls api to register user to database
                axios.post("/api/registerUser", form, { headers: { 'content-type': "multipart/form-data"}})
                .then((result) => {
                    if(result.data.success){
                        alert("Successfully created account");
                    }else{
                        alert("Account Failure Occurred");
                    }
                })
                .catch(exception => {
                    alert("Account Failure Occurred");
                })
        });
    });
    }
    else
    {
        alert("Passwords do not match");
    }
}

export default formData;