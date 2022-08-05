let yes = document.getElementById('yesButton');
yes.addEventListener('click', function(){ alert('Thank you for your feedback') });

let para = document.getElementById('commentContainer').style;
para.display = "none";

let no = document.getElementById('noButton');
no.addEventListener('click', function(){ para.display = 'block';});

let submit = document.getElementById('submitButton');
submit.addEventListener('click', function(){ 
    if(document.getElementById('commentBox').value !== ""){
        alert('Thank you for taking your time to give us feedback. We hope you have a better experience next time');
    } else {
        alert('The comments section cannot be empty');
    }
});