import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import axios from "axios";
import {
  FaHome,
  FaChartBar,
  FaPlayCircle,
  FaExchangeAlt,
  IoFilter,
  IoSettingsSharp,
  MdVisibilityRound,
  MdVisibilityoffRound,
  OiTriangleDown,
  OiTriangleUp,
  FaBriefcaseMedical,
  MdSchoolRound,
  MdErroroutlineRound,
  MdPaymentsRound,
  MdFoodbankRound,
  FaGifts,
} from "oh-vue-icons/icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
};

addIcons(
  FaHome,
  FaChartBar,
  FaPlayCircle,
  FaExchangeAlt,
  IoFilter,
  IoSettingsSharp,
  MdVisibilityRound,
  MdVisibilityoffRound,
  OiTriangleDown,
  OiTriangleUp,
  FaBriefcaseMedical,
  MdSchoolRound,
  MdErroroutlineRound,
  MdPaymentsRound,
  MdFoodbankRound,
  FaGifts,
);

axios.defaults.withCredentials = true;

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(router)
  .mount("#app");