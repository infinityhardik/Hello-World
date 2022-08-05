var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

showProject();

function showProject(listId){
   

    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+
        '<ul>'+
            '<li>Task one</li>'+
            '<li>Task two</li>'+
        '</ul>'+
        '</div>';
        if(listId){
            document.getElementById(listId).innerHTML += template;
        }else{
            document.getElementById('projectList').innerHTML +=template;
        }
        // Hard-coding List Id in else loop if new ID is not passed as a parameter.
        // This is to make sure that a default board is visible on page load.
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
var idName = 1;
function addBoard(id){
    idName++;
    var listId = 'projectList_'+idName;
    var templateBlock = '<section id ="board-block">'+
    '<div>'+id.value+'<button onclick="removeCard()">Remove Card</button></div>'+
    '<div class="project-block" id ='+listId+'>'+
        
    '</div>'+
    '</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProject(listId);
}

/* 
To add the project card to a board, 
we followed the usual method to create the template, where we added the HTML code. 
Then the method appended the project card to the board. 
The project card needs an ID (projectList) to be added to the project board, 
and the template adds the same ID every time it is hardcoded. However, the ID cannot be duplicated, 
so this will not work. To overcome this issue, we created a variable idName and set it to 1. 
This variable was incremented each time the function to create the project card was run. 
After creating the dynamic ID value, the value was passed to the function showProjects(), 
which were called in the same method.
*/