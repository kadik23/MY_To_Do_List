var liste=document.getElementById("list")
var input=document.getElementById("in")
var send=document.getElementById("btn")
send.addEventListener("click",add)
function add()
{ if(input.value.length!=0){
    //create Div
const doin=document.createElement("div")
doin.classList.add("do");

    //create li
const element=document.createElement("li")
const bold=document.createElement("b")
    // create content
const contenu=document.createTextNode(input.value)
bold.appendChild(contenu)
element.appendChild(bold)
element.classList.add("ls")

    //create btn done
const elm1=document.createElement("button")
elm1.innerHTML='<span class="material-symbols-outlined" style=" pointer-events: none;">done</span>'
elm1.classList.add("btn-done")

    //create btn delete
const elm2=document.createElement("button")
elm2.innerHTML='<span class="material-symbols-outlined" style=" pointer-events: none;">delete</span>'
elm2.classList.add("btn-delete")


    //create btn modifie
const elm3=document.createElement("button")
elm3.innerHTML='<span class="material-symbols-outlined">edit</span>'
elm3.classList.add("btn-modif")

doin.appendChild(element)
doin.appendChild(elm1)
doin.appendChild(elm2)
doin.appendChild(elm3)

liste.appendChild(doin)
input.value=""

    // click done
elm1.addEventListener("click",change)

function change()
{
if(doin.classList.contains("done")==true)
doin.classList.remove("done")
else
doin.classList.add("done")
}

  //click remove
elm2.addEventListener("click",diir)

function diir()
{
elm2.parentElement.remove()
}

    // click edit
elm3.addEventListener("click",modify)

function modify(){
var write=prompt("change it :",bold.textContent)
bold.textContent=write
}

}
}
