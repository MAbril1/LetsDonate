const bcrypt = require('bcryptjs');
const axios = require('axios');

const loginData = function() {;
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;

    console.log(email, password);

    let user;
        
    let searchable = {};
    
    searchable["searchEmail"] = email;
    axios.post("api/loginUser", searchable)
    .then((result) => {
        if(!result.data.success){
            alert("Failed Search");
        }else{
            user = result.data.users;
            console.log(user[0].name);

            // Match Password
            bcrypt.compare(password, user[0].password, function(err, isMatch){
                if(err) throw err;
                if(isMatch)
                {
                    console.log("Password Match");
                }
                else
                {
                    console.log("Wrong Password");
                }
            });

        }
    })
    .catch(exception => {
        alert("Failed Search");
    })
}

export default loginData;