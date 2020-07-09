import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入tree-tabel
import TreeTable from 'vue-table-with-tree-grid'
// 导入axios包
import axios from 'axios'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// 导入NProgress包对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 在 request 拦截器中，显示进度条 NProgress.start()
// 设置axios请求拦截器
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
// 将axios挂载到Vue原型对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 全局注册组件
Vue.component('tree-table', TreeTable)
// 将富文本编辑器进行全局注册
Vue.use(VueQuillEditor/* { default global options } */)
// 自定义格式化时间的全局过滤器
Vue.filter('dataFormat', function(originVal) {
  const dt = new Date(originVal)
  const year = dt.getFullYear()
  const mon = (dt.getMonth() + 1 + '').padStart(2, '0')
  const day = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${year}-${mon}-${day} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
