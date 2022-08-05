var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

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

function addBoard(id){

    // console.log(id);
    // This gives entire HTML Line
    // console.log(id.value);
    // This gives the Input value

    var templateBlock = '<section id ="board-block">'+

    '<div>'+id.value+'<button onclick="removeCard()">Remove Card</button></div>'+
    '<div class="project-block" id = "projectList">'+
        
    '</div>'+
    '</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock
}

/* 
You saw how we added the name to the project boards as entered in the input field in the above video. To accomplish this, we followed the below steps:

The input field was given an attribute "value" to capture the value entered by the user.
The id of the input field was passed to an OnClick function.
In the onClick function, only the value was taken from the entire id through id.value. The value was stored in a variable and then added to the already created project board template.
*/