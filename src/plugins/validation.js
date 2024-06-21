import { Form as VeeForm, Field as VeeField } from 'vee-validate'
export default {
  /**
   * [app] is a reference to vue application
   * [options] is additional data passed from the vue instance to the plugin
   */
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
}
