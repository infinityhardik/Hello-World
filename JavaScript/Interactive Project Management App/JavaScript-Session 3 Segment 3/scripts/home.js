var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

// projectListObject.forEach(function(value, index){console.log(value);});
// To check the Output of Value.
/* The forEach loop is used to iterate over an array and calls the defined function once for each array element. 
The forEach loop takes a function and passes two parameters; 
the index represents the number of iterations and the value representing each object in the array. */

showProject();

function showProject(){

    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+
        '<ul>'+
            '<li>Task one</li>'+
            '<li>Task two</li>'+
        '</ul>'+
        '</div>';
        document.getElementById('projectList').innerHTML += template;
    })
}
    

function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}

function removeCard(){
    document.getElementById('projectList').innerHTML = '';
}