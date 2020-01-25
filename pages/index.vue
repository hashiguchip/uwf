<template>
    <div class="container">
        <h1 class="title">UWF</h1>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';
//
// export default {
//     components: {
//         Logo,
//     },
// };

// interface User {
//     firstName: string;
//     lastName: number;
// }

@Component({
    components: {
        Logo,
    },
})
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

<style lang="scss">
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: $mainColor;
    & > .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.title {
    font-size: 324px;
    display: inline-block;
}
</style>
