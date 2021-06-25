import { reactive } from "vue";

const state = reactive({
    mobileView: false,
})

export default function toggleNavBar() {
    const methods = {
        handleView() {
            state.mobileView = window.innerWidth <= 500;
        },
    }
    return {
        state,
        methods,
    };
}