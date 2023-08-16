<template>
  <div class="about  w-1/2 mx-auto text-white">
    <transition  appear @enter="enter" @before-enter="beforeEnter" @after-enter="afterEnter" >
      <h1 class=" text-4xl text-white mt-4" v-if="showAbout">About</h1>
    </transition>
    <h1 class="m-4">This is an about page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>
<script>
import {ref} from 'vue'
import gsap from 'gsap'
export default{
  setup(){
    var showAbout = ref(true)

    const enter = (el,done) => {
      console.log("enter - starting transition.. ")
     gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete:done
      })
    }

    const beforeEnter = (el) => {
     console.log("before enter")
     el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }

    const afterEnter = (el) => {
      console.log("after enter")
      // setTimeout((el)=>{
      //   showAbout.value = false
      // },5000)
    }

    return{beforeEnter,afterEnter,enter ,showAbout}
  }
}
</script>
<style>


/* .fade3-enter-from,.fade3-leave-to{
  opacity: 0;
  transform:translateY(-20px) ;
}
*/

/* those animation are class animation we'll use animation with gsap */
/* .fade3-enter-active,.fade3-leave-active{
  animation: vibre 2s ease;
} 
@keyframes vibre{
  0%{ opacity: 0;   transform:translateY(-20px); }
  50%{ opacity: 1;  transform:translateY(0); }
  60%{ opacity: 1;  transform:translateY(-8px); }
  70%{ opacity: .3; color: #42b983; transform:translateY(8px); }
  80%{ opacity: 1; color: #42b983; transform:translateY(-4px); }
  90%{ opacity: 1; transform:translateY(4px); }
  100%{ opacity: 1; transform: translateY(0); }
} */
</style>
