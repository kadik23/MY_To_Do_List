<template>
    <div class="mt-2 w-2/3 h-16 flex flex-row justify-center items-center container mx-auto" :style="{marginBottom: !todos.length ? '30px': '64px'}">
      <input 
        type="text" 
        class="h-2/3 bg-white px-24 py-2 mr-16 border-none rounded-2xl "
        v-model="newTodo"
        placeholder="Add a new todo..."
        />
        <button @click="filTaskOnPage"  id="btn" class=" h-2/3 py-2 px-4 rounded-3xl bg-white border-none cursor-pointer" >Send</button>
    </div>
    <transition name="switch" mode="out-in">
        <div v-if="todos.length" >
        <transition-group tag="ul" name="list" class="w-2/5 flex flex-col justify-start items-center mx-auto" appear><!--appear means when i open this site it appear with animation that i did it before !-->
            <!-- <transition name="list"> -->
                <!-- TODO: Add the list of todos here -->
                <div
                    class="h-12 do bg-neutral-700 rounded-xl mb-2 mr-auto flex flex-row justify-around items-center"
                    :id="todo.id"
                    v-for="todo in todos"
                    :key="todo.id"
                    :class="{ done: todo.done }"
                >
                    <li class="px-2 py-2 list-none w-4/6 h-2/3 bg-white rounded-md font-bold">{{ todo.content }}</li>
                    <button
                        @click="click_done(todo.id)"
                        class="w-6 h-6 bg-white border-solid border-1 border-black rounded-md cursor-pointer"
                        :style="{ backgroundColor: todo.done ? 'green' : 'white' }"
                    >
                        <span class="material-symbols-outlined pointer-events-none" :style="{ backgroundColor: todo.done ? 'green' : 'white' }">
                            done
                        </span>
                    </button>
                    <button @click="remove(todo.id)" class="w-6 h-6 bg-white border-solid border-1 border-black rounded-md cursor-pointer">
                        <span class="material-symbols-outlined pointer-events-none">delete</span>
                    </button>
                    <button @click="modify(todo.id)" class="w-6 h-6 bg-white border-solid border-1 border-black rounded-md cursor-pointer">
                        <span class="material-symbols-outlined pointer-events-none">edit</span>
                    </button>
                </div>
            <!-- </transition> -->
        </transition-group >
        </div>
        <div v-else class="text-white opacity-70 ">Oooh, nothing left todo!</div>
    </transition>
</template>


<script>
import { ref } from 'vue'

export default {
setup(props,{emit}){
    
    var todos=JSON.parse(localStorage.getItem("todos")) ? ref(JSON.parse(localStorage.getItem("todos"))) : ref([])
    var newTodo=ref('')
console.log(todos.value)

    function filTaskOnPage(){
        if(newTodo.value){
                const id = Math.random()
                todos.value.push({id:id,content:newTodo.value,done:false})
        }
        else{
            // alert("value is empty")
            emit('badValue')
            return
        }
                    newTodo.value=''  
                    ls_function()
    }

    //    ---------if click remove----------    
    function remove(index){
        todos.value = todos.value.filter(todo => todo.id != index)
        ls_function()
    }
        
    //  //-------if click edit-------------
    function modify(index){
        const todo = todos.value.find(todo => todo.id === index);
        if (todo) {
            const write = prompt("Change it:", todo.content);
            if (write) {
                todo.content = write;
                ls_function()
            }
        }

    }

    //--------if click done---------
    function click_done(index){
        const todo = todos.value.find(todo => todo.id === index);
        if(todo){
            todo.done=!todo.done
            ls_function()
        }
    }

    // local Storage Function
    function ls_function(){
        let string=JSON.stringify(todos.value)//convert from table or object to string
        localStorage.setItem("todos",string)//write in lS
    }

        return {todos,newTodo,filTaskOnPage,remove,modify,click_done,ls_function}
    }

  


}
</script>

<style>
*{
margin: 0;
padding: 0;
}
ul{
    position: relative;
}

.do{
    width: 500px;
    transition: all .5s ease-in-out;
}

.done{
    text-decoration: line-through;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
}

.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}

.list-enter-to{
    opacity: 1;
    transform:scale(1) ;
}

.list-enter-active{
    transition: all .7 ease;
    
}

.list-leave-active{
    transition: all .7 ease;
    position: absolute;
}

.list-leave-to{
    opacity: 0;
    transform: scale(.6);
}

.list-move{
    transition: all .3s ease;
}


.switch-enter-from,.switch-leave-to{
    opacity: 0;
    transform: translateY(20px);
}

/* default animation */
/* .switch-enter-to,.switch-leave-from{
    opacity: 1;
    transform: translateY(0);
} */

.switch-enter-active,.switch-leave-active{
    transition: all .3s ease;
}




</style>