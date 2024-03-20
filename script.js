document.addEventListener('DOMContentLoaded', function() {
    var profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Get form values
        var name = document.getElementById('name').value;
        var linkedin_link = document.getElementById('linkedin_link')
        var bio = document.getElementById('bio').value;
        var email = document.getElementById('email').value;
        var photo = document.getElementById('photo').value; 
        var course = document.getElementById('course').value;
        

        console.log("Name:", name);
        console.log("linkedin_link",linkedin_link)
        console.log("Short Bio:", bio);
        console.log("Email:", email);
        console.log("Photo:", photo);
        console.log("Course:", course);
    });
});
