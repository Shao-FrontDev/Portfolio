import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
const skillData = [
  {
    _id: uuidv4(),
    name: "VueJS",
    logo: "https://download.logo.wine/logo/Vue.js/Vue.js-Logo.wine.png",
  },
  {
    _id: uuidv4(),
    name: "ReactJS",
    logo: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
  },
  {
    _id: uuidv4(),
    name: "JavaScript",
    logo: "https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png",
  },
  {
    _id: uuidv4(),
    name: "CSS",
    logo: "https://z3.ax1x.com/2021/06/25/RlgJPI.png",
  },
];

const state = reactive({
  results: [],
  loading: false,
});

const getData = () => {
  state.results = skillData;

  return { state };
};
export default getData;
