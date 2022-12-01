function userChoices(){
    let choices = Array.from(document.getElementsByClassName('genre-value'));
    let valueOfChoices =[];
     choices.forEach(ele=>{
        if (ele.checked) {
            
            valueOfChoices.push(ele.value);
        }
    })
    
localStorage.setItem('values',JSON.stringify(valueOfChoices));
window.location.href = "../../spitify/html/homepage.html";
}