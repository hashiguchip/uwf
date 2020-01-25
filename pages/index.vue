<template>
    <div class="container">
        <div>
            <logo />
            <h1 class="title">uwf</h1>
            <h2 class="subtitle">uwf site</h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">
                    Documentation
                </a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// import Logo from '~/components/Logo.vue';
//
// export default {
//     components: {
//         Logo,
//     },
// };
import { Vue, Component } from 'vue-property-decorator';

// interface User {
//     firstName: string;
//     lastName: number;
// }

@Component
export default class Index extends Vue {
    // @Prop({ type: Object, required: true }) readonly user!: User;
    //
    // message: string = 'This is a message';
    //
    // get fullName(): string {
    //     return `${this.user.firstName} ${this.user.lastName}`;
    // }
}
</script>

<style lang="sass"></style>
