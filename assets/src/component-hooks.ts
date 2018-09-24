// class-component-hooks.js
import {Component} from "vue-property-decorator";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);
