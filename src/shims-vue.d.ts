/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: ReturnType<defineComponent>;
  export default component
}
