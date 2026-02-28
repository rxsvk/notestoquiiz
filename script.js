async function generateQuiz(){

const notes = document.getElementById("notes").value;

if(notes.trim()==""){
alert("Please paste notes first");
return;
}

document.getElementById("quiz").innerHTML="Generating quiz...";

const response = await fetch("/.netlify/functions/quiz",{

method:"POST",

body:JSON.stringify({notes})

});

const data = await response.json();

document.getElementById("quiz").innerText=data.quiz;

}