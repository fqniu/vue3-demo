<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{msg}}</div>
    <div>{{msg2}}</div>
    <div>{{msg3}}</div>
    <button @click="changeMsg">更改数据</button>
    <div>{{num}}</div>
    <div>{{doubleNum}}</div>
    <button @click="add">+1</button>
  </div>
</template>

<script>
// 使用 toRefs 把 reactive 变为响应式数据
import { reactive, toRefs, ref, computed, watch ,onMounted, onUnmounted} from '@vue/composition-api';

export default {
  data(){
    return {
      msg:'fqniu'
    }
  },
  /**
   * setup 函数在vue3.0是一个非常重要的函数，他的执行时机在beforeCreate之后 和created之前，
   * 很多代码都必须写在这个函数里面，并且如果在组价的template中使用，那么就必须在setup中return 出去；
   * 
   * setup中两个参数说明：
   * 
   * props 用于接收父组件传递的值，注意：必须先在setup外面props中定义，才能通过props.xxx拿到父组件传递过来的值
   * 
   * context上下文对象，这个上下文对象中包含一些有用的属性，这些属性在vue2.x中需要通过this才能访问，在vue3.0中，他们的访问如下
   * setup(props, context){
   *  context.attrs
   *  context.slots
   *  context.parent
   *  context.root
   *  context.emit
   *  context.refs
   * }
   * 
   * computed计算属性：
   * 1、写在setup函数中  const getDoubleNum = computed(() => state.num *2)
   * 2、写在state中      const state = reactive({ myName:computed(() => 'my name is fqniu') })
   * 
   * 生命周期
   * 
   * 
   * 
  */ 

  setup(){
    console.log('setup');
    const state = reactive({
      msg2 : '我在学vue3',
      num : 1,
      // 这里不用导出
      doubleNum : computed(() => {
        return state.num*2
      })
    })
    // return state

    watch(() => state.num, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })

    const msg3 = ref('我在学vue3.0')

    const changeMsg = () => {
      console.log('--------');
      state.msg2 = "niufuqiang"
      msg3.value = "修改msg3的值"
    }

    const  add = ()=>{
      state.num++
    }

    // const doubleNum = computed(() => {
    //   return state.num*2
    // })
    onMounted(()=>{
      console.log('onMounted');
    })

    onUnmounted(()=>{
      console.log('onUnmounted');
    })

    // data , method
    return {
      msg3,
      ...toRefs(state),
      changeMsg,
      add,
      // doubleNum
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },

}
</script>
