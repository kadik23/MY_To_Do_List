<template>
   <h1 class="text-3xl font-bold text-white mt-4 ">
     MY TO <span>DO</span> LIST 
  </h1>
  <div>
    <transition name="fade1">
      <toast v-if="toastValue" />
    </transition>
    <todo @badValue="showToast"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import todo from '../components/todo'
import toast from '../components/Toast'

export default {
  components: { todo,toast  },
  setup() {
    const toastValue = ref(false)

    const showToast = () =>{
      console.log(toastValue.value)
      toastValue.value=true
      setTimeout(()=> toastValue.value=false,3000)
      }
    return {toastValue,showToast}
  }
}
</script>
<style>

span{
  color: #42b983;
}

/* .fade1-enter-from{
  opacity: 0;
  transform: translateY(-60px);

}

.fade1-enter-to{
  opacity: 1;
  transform: translateY(0px);
} */

.fade1-enter-active{ 
  /* transition: all 1s ease; */
  animation : wobble 1s ease;
}

.fade1-leave-active{ 
  transition: all 1s ease;
}

.fade1-leave-to{
  opacity: 0;
  transform: translateY(-60px);

}
@keyframes wobble{
0%{ opacity: 0;transform: translateY(-60px);}
50%{ opacity: 1; transform: translateY(0);}
60%{ opacity: 1;transform: translateX(8px);}
70%{ opacity: 1;transform: translateX(-8px);}
80%{ opacity: 1;transform: translateX(4px);}
90%{ opacity: 1;transform: translateX(-4px);}
100%{ opacity: 1;transform: translateX(0px);}
}

/* vue underestand that leave to is 1 opacity by default so no problem to mask it */
/* .fade1-leave-from{
  opacity: 1;
} */



</style>
