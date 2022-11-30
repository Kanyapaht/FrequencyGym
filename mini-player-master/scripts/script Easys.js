new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Level: Easys",
          artist: "Quiz1",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/20hz.mp3",
          favorited: false,
          ans:"20Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz2",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/50hz.mp3",
          favorited: false,
          ans:"50Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz3",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/80hz.mp3",
          favorited: false,
          ans:"80Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/110hz.mp3",
          favorited: false,
          ans:"110Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz5",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/140hz.mp3",
          favorited: false,
          ans:"140Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz6",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/170hz.mp3",
          favorited: false,
          ans:"170Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz7",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/200hz.mp3",
          favorited: false,
          ans:"200Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz8",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/230hz.mp3",
          favorited: false,
          ans:"230Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz9",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/250hz.mp3",
          favorited: false,
          ans:"250Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz10",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/300hz.mp3",
          favorited: false,
          ans:"300Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz11",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/350hz.mp3",
          favorited: false,
          ans:"350Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz12",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/400hz.mp3",
          favorited: false,
          ans:"400Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz13",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/450hz.mp3",
          favorited: false,
          ans:"450Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz14",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/500hz.mp3",
          favorited: false,
          ans:"500Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz15",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/550hz.mp3",
          favorited: false,
          ans:"550Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz16",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/600hz.mp3",
          favorited: false,
          ans:"600Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz17",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/650hz.mp3",
          favorited: false,
          ans:"650Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz18",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/700hz.mp3",
          favorited: false,
          ans:"700Hz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz19",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/1000hz.mp3",
          favorited: false,
          ans:"1KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz20",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/1250hz.mp3",
          favorited: false,
          ans:"1.25KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz21",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/1500hz.mp3",
          favorited: false,
          ans:"1.5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz22",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/1750hz.mp3",
          favorited: false,
          ans:"1.75KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz23",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/2000hz.mp3",
          favorited: false,
          ans:"2KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz24",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/2500hz.mp3",
          favorited: false,
          ans:"2.5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz25",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/3000hz.mp3",
          favorited: false,
          ans:"3KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz26",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/3500hz.mp3",
          favorited: false,
          ans:"3.5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz27",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/4000hz.mp3",
          favorited: false,
          ans:"4KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz28",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/4500hz.mp3",
          favorited: false,
          ans:"4.5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz29",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/5000hz.mp3",
          favorited: false,
          ans:"5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz30",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/5500hz.mp3",
          favorited: false,
          ans:"5.5KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz31",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/6000hz.mp3",
          favorited: false,
          ans:"6KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz32",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/7000hz.mp3",
          favorited: false,
          ans:"7KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz33",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/8000hz.mp3",
          favorited: false,
          ans:"8KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz34",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/9000hz.mp3",
          favorited: false,
          ans:"9KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz35",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/10000hz.mp3",
          favorited: false,
          ans:"10KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz36",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/12000hz.mp3",
          favorited: false,
          ans:"12KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz37",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/15000hz.mp3",
          favorited: false,
          ans:"15KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz38",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/16000hz.mp3",
          favorited: false,
          ans:"16KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz39",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/18000hz.mp3",
          favorited: false,
          ans:"18KHz"
        },
        {
          name: "Level: Easys",
          artist: "Quiz40",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "mp3/20000hz.mp3",
          favorited: false,
          ans:"20KHz"
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      /*if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }*/
      this.currentTrackIndex = Math.floor(Math.random() * this.tracks.length)+1;
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
