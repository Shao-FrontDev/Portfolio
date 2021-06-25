<template>
    <router-view />
</template>

<script >
import toggleNavBar from './store/NavStore'

const { methods } = toggleNavBar()

export default {
    setup() {
        return {
            methods,
        }
    },
    created() {
        this.methods.handleView()
        window.addEventListener('resize', this.methods.handleView)
    },
    watch: {
        $route(to) {
            document.title = `${to.meta.title}`
        },
    },
}
</script>
