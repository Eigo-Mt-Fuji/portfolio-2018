import Vue from "vue";
import {Component} from "vue-property-decorator";
import HeaderComponent from "./header";

@Component({
    template: require("../templates/guidepost.vue.html"),
})
export default class GuidepostCompoment extends Vue {

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

            contents: [
                {
                    image: "/images/guidepost-004.png",
                    link: "https://github.com/Eigo-Mt-Fuji/rails-training-image-search/issues/3",
                    title: "VueMaterialでレスポンシブデザインしよう",
                },
                {
                    image: "/images/guidepost-002.png",
                    link: "https://github.com/Eigo-Mt-Fuji/rails-training-image-search/issues/2",
                    title: "クラウドとデータベースを使ったWebシステム開発",
                },
                {
                    // tslint:disable-next-line:max-line-length
                    image: "/images/guidepost-001.png",
                    link: "https://github.com/Eigo-Mt-Fuji/rails-training-image-search/issues/1",
                    title: "VueJs x Typescript x Material Design導入",
                },
                {
                    image: "/images/guidepost-003.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/34",
                    title: "Javascriptでサイト初回アクセス時のwelcomeメッセージ表示",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/52",
                    title: "Google APIを用いた管理画面開発",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/43",
                    title: "Puppeteer(Google謹製)でWeb UIテスト自動化に挑戦",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/45",
                    title: "Javascript基礎・理解度チェック",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/39",
                    title: "HTML/CSS基礎・理解度チェック",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/40",
                    title: "実例に学ぶRubyのエラーハンドリング",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/5",
                    title: "ポートフォリオ設計に使うツールを揃えよう",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/51",
                    title: "プログラミング作業の具体的な進め方を考えよう",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/35",
                    title: "Herokuを使ったWebサービス公開/Herokuへの反映",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/34",
                    title: "Webサイトのテーマカラーを決めよう",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/27",
                    title: "RailsからJavascriptに引き渡す",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/31",
                    title: "Javascript jsファイルの作成とeslinter導入(効率Up)",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/29",
                    title: "Javascriptの基本",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/19",
                    title: "MySQLの排他制御とデッドロックが起こる仕組み",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/17",
                    title: "エラーの読み方のコツについて考える",
                },
                {
                    image: "/images/entrance-640-480.png",
                    link: "https://github.com/Eigo-Mt-Fuji/samurai-subject/issues/15",
                    title: "DB設計・操作 ストーリベースの設計進め方（UserStory,アーキ,DB設計）",
                },
            ],
        };
    }
}
