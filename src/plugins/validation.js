import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
export default {
  /**
   * [app] is a reference to vue application
   * [options] is additional data passed from the vue  instance to the plugin
   */
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    // allows us to  register a rule globally, the rule will be available to every validation form we create
    defineRule('required', required)
  }
}
