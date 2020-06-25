import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 将弹框提示组件进行全局挂载，$message为自定义属性，可任意修改
Vue.prototype.$message = Message
