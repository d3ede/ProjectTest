function showName() {
    document.getElementById("name").innerHTML = document.getElementById("nimi").value;
}
function showAge() {
    document.getElementById("age").innerHTML = document.getElementById("vanus").value;
}
function radioButton() {
    let gender=document.getElementById("gender");
    let boy=document.getElementById("boy");
    let girl=document.getElementById("girl");

    if(boy.checked){
        gender.innerHTML="Sina on "+boy.value;
    } else if(girl.checked){
        gender.innerHTML="Sina on "+girl.value;
    } else{
        gender.innerHTML="Choose the gender";
    }
}
function showKool(){
    let school=document.getElementById("school");
    let kool=document.getElementById("kool");

    if(kool.selectedIndex!==0){
        school.innerHTML="Your school: "+kool.value;
    } else{
        school.innerHTML="Choose the school!";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll("td");
    const colors = ["white"];
    
    cells.forEach((cell, index) => {
        cell.style.backgroundColor = colors[index % colors.length];
        cell.addEventListener("click", function() {
            cells.forEach(c => c.style.backgroundColor = colors[Array.prototype.indexOf.call(cells, c) % colors.length]);
            cell.style.backgroundColor = "lavender";
        });
    });
});