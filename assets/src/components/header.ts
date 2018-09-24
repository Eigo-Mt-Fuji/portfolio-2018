import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
    template: require("../templates/header.vue.html"),
})
export default class HeaderComponent extends Vue {
    public beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter");
        next();
    }

    public  beforeRouteLeave(to, from, next) {
        console.log("beforeRouteLeave");
        next(); // needs to be called to confirm the navigation
    }

    public data() {

        return {
            // tslint:disable-next-line:max-line-length
            meetingRequestFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSehSzOoQcnWFphsmWHLz4uT0OgrNRDfXH2wPuCr-ymFoVRDiA/viewform?usp=pp_url",
            skillsheetUrl: "https://eigo-mt-fuji.github.io/profile/e-fujikawa-engineer.pdf",
        };
    }
}
