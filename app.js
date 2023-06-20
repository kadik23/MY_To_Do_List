var liste=document.getElementById("list")
var input=document.getElementById("in")
var send=document.getElementById("btn")
var tasks=JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : []
filTaskOnPage()
var isDone=false

function filTaskOnPage(){
    let index=0
    liste.innerHTML=""
    var task

    for(task of tasks){
        //create Div
        const Div=document.createElement("div")
        Div.id=`div_list${index}`
        Div.classList.add("do");
        if(task.done)
        Div.classList.add("done");
        

        //create li
        const li=document.createElement("li")
        const bold=document.createElement("b")

        // create content of li
        const contenu=document.createTextNode(task.content)
        bold.appendChild(contenu)
        li.appendChild(bold)
        li.classList.add("ls")

        //create btn done
        const Done= `   <button onclick="click_done(${index})" class="btn-done" style="background-color: ${task.done ? 'green' : 'white'};">
                            <span class="material-symbols-outlined"  style=" pointer-events: none; background-color: ${task.done ? 'green' : 'white'};">done</span>
                        </button> 
                    `
      
        

        //create btn delete
        const Delete=`   <button onclick="diir(${index})" class="btn-delete">
                            <span class="material-symbols-outlined"  style=" pointer-events: none;">delete</span>
                        </button> 
                    `


        //create btn modifie
        const Edit=`    <button onclick="modify(${index})" class="btn-edit">
                            <span class="material-symbols-outlined"  style=" pointer-events: none;">edit</span>
                        </button> 
                    `

        Div.appendChild(li)
        Div.innerHTML+=Done
        Div.innerHTML+=Delete

        Div.innerHTML+=Edit

        liste.appendChild(Div)
        input.value=""
        index++
    }
}

//    ---------if click add----------

send.addEventListener("click",()=>{
    if(input.value.length!=0){
        tasks.push({"content" : input.value,"done" : isDone}) 
        filTaskOnPage()        
        ls_function()
    }
})




//    ---------if click remove----------
 
    function diir(index){
        let Div=document.getElementById(`div_list${index}`)
            if (Div){
                Div.remove()
            }
        tasks.splice(index, 1);
        filTaskOnPage()
        ls_function()    
    }


 
    //  //-------if click edit-------------
 
     function modify(index){
     var write=prompt("change it :",tasks[index].content)
     if(write)
     tasks[index].content=write
     filTaskOnPage()   
    ls_function()

    }



   //--------if click done---------

function click_done(index){
            let Div=document.getElementById(`div_list${index}`)
            if (Div){
                if (Div.classList.contains("done") == true) {
                    Div.classList.remove("done")
                    isDone = false                }
                else {
                    Div.classList.add("done")
                    isDone = true
                }
                tasks[index].done = isDone
            }
            let Icone = Div.querySelector(`.material-symbols-outlined`);
            Icone.style.backgroundColor = tasks[index].done ? 'green' : 'white';  
            let DoneBtn = Div.querySelector(`.btn-done`);
            DoneBtn.style.backgroundColor = tasks[index].done ? 'green' : 'white';  
            ls_function()
}


// local Storage Function
function ls_function(){
    let string=JSON.stringify(tasks)//convert from table or object to string
    localStorage.setItem("tasks",string)//write in lS
}

