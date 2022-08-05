function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}

/* 
While changing the diaplay of an element in JavaScript, one of the ways to undo the effect of  
style.display = 'none' is by setting it to style.display = '' 
This way, the display declaration from the style attribute is removed altogether 
and is reverted to the actual value of the display property which is declared in the style sheet. 
If it is not defined anywhere in the style sheet, it is reverted to the default value of the browser. 
*/