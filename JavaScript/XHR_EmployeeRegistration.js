function registerEmployee(name, role){
    var xhr = new XMLHttpRequest();
    //console.log(name.value);
    //console.log(role.value);
    
    if (name.value && role.value) {
        var empDetails = {
            name : name.value,
            role : role.value
        }

        xhr.open('POST','https://reqres.in/api/users')
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
        xhr.send(JSON.stringify(empDetails));
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                var response = xhr.response;
                console.log(response);
                
                
                var parsedResponse = JSON.parse(response);
                console.log(parsedResponse);
                
                alert("Employee with ID " + parsedResponse.id + " successfully registered!");

                sessionStorage.setItem('user-details', xhr.responseText);
                // Storing the user details in the Session Storage of the Browser
            }
        }
    } else {
        alert("Please input both the fields in the form.");
    }
}