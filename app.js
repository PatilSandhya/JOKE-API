const jtext = document.getElementById("joke");
const jbtn = document.getElementById("jokebtn");

jbtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming"
    )
    const data = await res.json();
    console.log(data);
    console.log(data.joke);
    console.log(data.delivery)
    
    let joke = "";
    if(data.joke == undefined){
        joke = `${data.setup} <br/> ${data.delivery}`
    }else{
        joke = data.joke;
    }
    jtext.innerHTML = joke;
}