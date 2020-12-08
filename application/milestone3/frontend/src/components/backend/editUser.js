import currentUser from './currentUser.js';

const bcrypt = require('bcryptjs');
const axios = require('axios');

const editUserData = function() {
    // form data
    let newName;
    let newEmail;
    let newZipcode;
    let newProfileImage;
    // let currentPassword;
    // let newPassword;

    let currentCurrentUser = currentUser.getUser(); // gets the current user data to modify later

    // checks if there is new data for user
    if(!document.forms.editUserForm.newName.value) newName = currentUser.getUser().name;
    else
    {
        newName = document.forms.editUserForm.newName.value;
        currentCurrentUser.name = newName;
    }

    if(!document.forms.editUserForm.newEmail.value) newEmail = currentUser.getUser().email;
    else
    {
        newEmail = document.forms.editUserForm.newEmail.value;
        currentCurrentUser.email = newEmail;
    }

    if(!document.forms.editUserForm.newZipcode.value) newZipcode = currentUser.getUser().zipcode;
    else 
    {
        newZipcode = document.forms.editUserForm.newZipcode.value;
        currentCurrentUser.zipcode = newZipcode;
    }

    if(!document.forms.editUserForm.newProfileImage.value) newProfileImage = currentUser.getUser().userImage;
    else newProfileImage = document.forms.newProfileImage.userImage;

    currentUser.setUser(currentCurrentUser); // sets the current user with the new data

    console.log(newName, newEmail, newZipcode, newProfileImage);

    let form = new FormData();
    form.append("imageFile", "profileImage.files[0]");
    form.append("name", newName);
    form.append("email", newEmail);
    form.append("zipcode", newZipcode);
    form.append("currentEmail", currentUser.getUser().email);
    console.log(form.getAll("name"), form.getAll("imageFile"));

    // calls api to edit user to database
    axios.post("/api/editUser", form, { headers: { 'content-type': "multipart/form-data"}})
    .then((result) => {
        if(result.data.success){
            console.log(result.data.filename);
            alert("Successfully Posted");
        }else{
            alert("Post Failure Occurred");
        }
    })
    .catch(exception => {
        alert("Post Failure Occurred");
    })

    window.location.reload(); // needed to refresh what is rendered on the navbar
}

export default editUserData;