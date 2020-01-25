/**
 * todo refactor to web audio API
 */
class SoundPlayer {
    private audio: HTMLAudioElement;
    constructor() {
        if (process.client) {
            this.audio = new Audio();
            this.audio.src = './sound/uwf_theme.mp3';
        }
    }
    async play() {
        await this.audio.play();
        this.audio.addEventListener(
            'ended',
            () => {
                this.audio.currentTime = 0;
                this.audio.play();
            },
            false,
        );
    }

    toggleMute() {
        this.audio.muted = !this.audio.muted;
    }

    mute() {
        this.audio.muted = true;
    }

    destroy() {
        this.audio = null;
    }
}
export const soundPlayer = new SoundPlayer();
