var input= document.createElement("input");
input.classList.add("inputnum");
input.setAttribute("type","number");
input.setAttribute("placeholder","Enter value");
document.body.appendChild(input);

var rediv= document.createElement("div");
rediv.classList.add("rediv");
document.body.appendChild(rediv);


var button = document.createElement("input");
button.classList.add("submit");
button.setAttribute("type","submit");
button.setAttribute("value","submit");
rediv.appendChild(button);

var reset = document.createElement("input");
reset.classList.add("reset");
reset.setAttribute("type","submit");
reset.setAttribute("value","reset");
rediv.appendChild(reset);

var bord= document.createElement("div");
bord.classList.add("bord");
document.body.appendChild(bord);
var innerdiv= document.createElement("div");
innerdiv.classList.add("innerdiv");
bord.appendChild(innerdiv); 

button.addEventListener('click',function(){
    var inp = document.querySelector(".inputnum").value;
    console.log(inp);
    for(let i = 0;i<inp;i++){
        var cont= document.createElement("div");
        cont.classList.add("cont");
        innerdiv.appendChild(cont); 
        var x = Math.random()*256;
        var y = Math.random()*256;
        var z = Math.random()*256;
        var color = "rgb("+x+","+y+","+z+")"
        cont.style.background=color;
    }
})
reset.addEventListener('click',
function(){location.reload()}
)