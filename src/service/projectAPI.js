import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const projectData = [
  {
    projectImage: ["https://z3.ax1x.com/2021/06/25/Rlr3Lj.png"],
    projectTags: ["Vue", "Vuex", "Vue Router", "Echart"],
    _id: uuidv4(),
    index: "1",
    projectName: "小记账",
    projectDescription: "一款用Vue 技术栈编写的记账APP",
    projectSlug: "记账APP",
    projectLink: "https://vue-money.vercel.app/#/home",
    projectGithub: "https://github.com/Shao-FrontDev/Vue-money",
  },
  {
    projectImage: ["https://z3.ax1x.com/2021/06/25/RlyJP0.png"],
    projectTags: ["JavaScript", "MVC"],
    _id: uuidv4(),
    index: "2",
    projectName: "MVC-Task",
    projectDescription: "用Javascript 的MVC 模式写的简单应用",
    projectSlug: "Task Manager",
    projectLink: "https://mvc-tasks.vercel.app/",
    projectGithub: "https://github.com/Shao-FrontDev/MVC_Tasks",
  },
  {
    projectImage: ["https://fujix.oss-cn-shenzhen.aliyuncs.com/fujix.png"],
    projectTags: ["React", "React Router", "Express"],
    _id: uuidv4(),
    index: "3",
    projectName: "FUJIX",
    projectDescription: "用React和Express写的个人照片应用。",
    projectSlug: "Fujix",
    projectLink: "http://8.210.3.97:8800/",
    projectGithub: "https://github.com/Shao-FrontDev/react-fujix",
  },
];

const state = reactive({
  results: [],
  loading: false,
});
const getData = () => {
  state.results = projectData;

  return { state };
};
export default getData;
