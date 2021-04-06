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
  faCamera,
  faBuilding,
  faEnvelope,
  faMobileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function(Vue, { router, head, isClient }) {
  // Add Swal
  head.script.push({
    src: "https://unpkg.com/sweetalert/dist/sweetalert.min.js",
    body: true,
  });

  library.add(
    faCamera,
    faBuilding,
    faEnvelope,
    faMobileAlt,
    faUser,
    faFacebook,
    faInstagram
  );

  Vue.component("Layout", DefaultLayout);
  Vue.component("vue-fontawesome", FontAwesomeIcon);

  Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
  });
}
