import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data () {
    return {
      text: 'text'
    }
  }
})

app.$mount('#root') //挂载到html


// setInterval(() => {
//   app.text += 1
// }, 1000)

console.log('$data', app.$data)
console.log('$props', app.$props)
console.log('$el', app.$el)
console.log('$options', app.$options)
app.$options.data.text += 1  //无变化，不是同一个对象
app.$data.text += 2 //有变化
app.$options.render = (h) => {
  return h('div', {}, 'new render function')
}
console.log('$root', app.$root === app)
console.log('$children', app.$children)
console.log('$slots', app.$slots)
console.log('$scopedSlots', app.$scopedSlots)
console.log('$refs', app.$refs)

