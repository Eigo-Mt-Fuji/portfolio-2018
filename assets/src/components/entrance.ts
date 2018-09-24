import Vue from "vue";
import {Component} from "vue-property-decorator";
import HeaderComponent from "./header";

@Component({
    template: require("../templates/entrance.vue.html"),
})
export default class EntranceComponent extends Vue {
   public beforeRouteEnter(to, from, next) {
       console.log("beforeRouteEnter");
       next();
   }

   public  beforeRouteLeave(to, from, next) {
       console.log("beforeRouteLeave");
       next(); // needs to be called to confirm the navigation
   }
}
