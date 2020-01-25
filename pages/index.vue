<template>
    <div class="container">
        <h1 class="title">UWF</h1>
        <button @click="mute" class="mute">mute</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { soundPlayer } from '@/modules/SoundPlayer/main';

@Component
export default class YourComponent extends Vue {
    mounted() {
        soundPlayer.play();
    }
    beforeDestroy(): void {
        soundPlayer.destroy();
    }
    mute() {
        soundPlayer.toggleMute();
    }
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
    & > .mute {
        position: absolute;
        top: 5vw;
        right: 5vw;
    }
}
.title {
    font-size: 324px;
    display: inline-block;
}
</style>
