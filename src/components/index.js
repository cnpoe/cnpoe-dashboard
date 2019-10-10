import Vue from 'vue'
import ExampleComponent from './ExampleComponent'

const Components = {
  ExampleComponent,
}

Object.keys(Components).forEach(
  name => {
    Vue.component(name, Components[name])
  }
)

export default Components
