<template>
    <div class="container">
        <h1 class="title">UWF</h1>
        <button class="mute" @click="mute">mute</button>
        <div class="loading" v-if="loading">読込中です....</div>
        <div class="background">
            <img :src="image" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { loadImage } from './imageLoader';
import { soundPlayer } from '@/modules/SoundPlayer/main';

@Component
export default class YourComponent extends Vue {
    loading = true;
    image = '';
    setImage() {
        this.image =
            this.image !== require('~/assets/image/maeda_akira.png')
                ? require('~/assets/image/maeda_akira.png')
                : require('~/assets/image/takada_nobuhiko.jpg');
    }
    async mounted() {
        try {
            await Promise.all([
                loadImage(require('~/assets/image/maeda_akira.png')),
                loadImage(require('~/assets/image/takada_nobuhiko.jpg')),
            ]);
            this.loading = false;
            this.setImage();
            setInterval(() => {
                this.setImage();
            }, 2000);
            await soundPlayer.play();
        } catch (e) {
            console.log(e);
        }
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
.loading {
    color: white;
    font-size: 33px;
}
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
