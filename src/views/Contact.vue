<template>
    <h2 class="text-3xl font-bold text-white mt-4 mb-14">
            Contact
    </h2>
    <transition-group 
        tag="ul"
        class="w-2/5  mx-auto  h-60  flex flex-wrap justify-around"
        @before-enter="beforeEnter"
        @enter="enter"
        appear
    >
        <li 
            class="w-2/5 h-24 m-1 cursor-pointer bg-slate-700 rounded-xl  flex flex-col items-center justify-center"
            v-for="(icon, index) in icons" 
            :key="icon.name"
            :data-index="index"
        >
            <span class="material-symbols-outlined mb-2">
            {{icon.name}}
            </span>
            <h2 class=" text-vue-col">{{ icon.text }}</h2>
        </li>
    </transition-group>
</template>

<script>
import gsap from 'gsap'
import {ref} from 'vue'
export default {
    setup(){
        const icons=ref([
      { name: 'alternate_email', text: 'by email'},
      { name: 'call', text: 'by phone'},
      { name: 'mail', text: 'by post'},
      { name: 'local_fire_department', text: 'by smoke signal'},
    ])

    
    const beforeEnter = (el) => {
     el.style.transform = 'translateY(100px)'
      el.style.opacity = 0
    }

    const enter = (el,done) => {
     gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.2,
        onComplete:done
      })
      
    }
        return {icons,beforeEnter,enter}
    }
}   
</script>

<style>

</style>