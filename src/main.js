// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

// import Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "~/assets/style/index.scss";

// import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPrint,
  faBook,
  faProjectDiagram,
  faArchive,
  faLaptop,
  faCommentDots,
  faArrowLeft,
  faArrowRight,
  faCoffee,
  faUser,
  faBuilding,
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faOsi,
  faTwitter,
  faLinkedin,
  faGitlab,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// import Vuex
import Vuex from "vuex";

export default function(Vue, { appOptions, router, head, isClient }) {
  // Add Swal
  head.script.push({
    src: "https://unpkg.com/sweetalert/dist/sweetalert.min.js",
    body: true,
  });
  head.script.push({
    src: "https://smtpjs.com/v3/smtp.js",
    body: true,
  });

  library.add(
    faPrint,
    faBook,
    faProjectDiagram,
    faArchive,
    faLaptop,
    faCommentDots,
    faArrowLeft,
    faArrowRight,
    faCoffee,
    faUser,
    faBuilding,
    faEnvelope,
    faMobileAlt,
    faMapMarkerAlt,
    faPhone,
    faOsi,
    faTwitter,
    faLinkedin,
    faGitlab,
    faInstagram,
    faFacebook
  );

  Vue.component("Layout", DefaultLayout);
  Vue.component("vue-fontawesome", FontAwesomeIcon);

  Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
  });
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      serviceId: "0",
    },
  });
}
