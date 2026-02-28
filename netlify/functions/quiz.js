exports.handler = async function(event) {

const { notes } = JSON.parse(event.body);

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+process.env.OPENAI_KEY
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{
role:"system",
content:"Generate 5 multiple choice quiz questions from the notes with options A B C D and correct answer."
},

{
role:"user",
content:notes
}

]

})

});

const data = await response.json();

return {

statusCode:200,

body:JSON.stringify({

quiz:data.choices[0].message.content

})

};

};
