$(function () {
  (function () {
    const videos = [
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3a51e5fbffdd906e0085e0671a111480.jpeg?x-expires=1639983600&x-signature=FV2%2BLBEyjGuf9cghbWoJv%2FkmYjI%3D',
        userName: 'leejieun1993i',
        nickname: '💗 IU 💗',
        videoURL: './assets/videos/Video3.mp4',
        title: 'yêu bé từ cái nhìn đầu tiên, thiên thần nhỏ của tui',
        hastag: ['love', 'xuhuong'],
        musicName: 'Bé Diu rất đáng yêu khi đeo kính - 💗 IU 💗',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/28354868284e3c81a8dcb13a95eb80c8.jpeg?x-expires=1640012400&x-signature=kG9PCLBTNiSYZ9vYUgRZ74gmjYM%3D',
        userName: 'dausyhung6789',
        nickname: 'Đ𝓪̣̂𝓾 𝓢𝔂̃ 𝓗𝓾̀𝓷𝓰',
        videoURL: './assets/videos/Video9.mp4',
        title: 'Sự quyến rũ của em cũng không đủ làm tôi gục ngã..!',
        hastag: ['dausyhung', 'namphonghan'],
        musicName: 'nhạc nền - Thành nam 🌚 - Thành nam 💋',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/2dc09cb387d828ff1290fb25b46dc53a~c5_100x100.jpeg?x-expires=1640012400&x-signature=qrGHyWZ8EemRg3aQ6s6F7F5JLVw%3D',
        userName: 'leejieun93',
        nickname: 'IU ♡',
        videoURL: './assets/videos/Video2.mp4',
        title: 'Chú vệ sĩ của IU, như một người cha chăm sóc đứa con gái 😍',
        hastag: ['iu', 'cute', 'love'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d2202f7e74c8d9950bf96de486000906.jpeg?x-expires=1640012400&x-signature=SMWf759peu9eACXf1G7uytBh%2FUk%3D',
        userName: 'boxgirl.04',
        nickname: '𝐁𝐨𝐱 𝐆𝐢𝐫𝐥 🎬',
        videoURL: './assets/videos/Video6.mp4',
        title: 'Idol nào đây ? ',
        hastag: ['dance', 'podayne', 'xuhuong'],
        musicName: 'Mood - Remix - Zero Two',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d908b739d9e9c6c55baad1df9ed047de~c5_100x100.jpeg?x-expires=1640012400&x-signature=BOiOwgFpIC6vmKAIRzmKyLg8QDs%3D',
        userName: 'iloveiuu2',
        nickname: 'IU❤️',
        videoURL: './assets/videos/Video5.mp4',
        title: 'Chú vệ sĩ cực tâm lý của IU 🥰',
        hastag: ['fyp', 'love'],
        musicName: 'GU (Cukak Remix) - Freaky, Seachains',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2bad257e447ffb9be6bdfc42d9e04b61.jpeg?x-expires=1640012400&x-signature=XeR8jGq9kzRtiKEh1Xf4HVBLCH0%3D',
        userName: 'tgflaftraanais',
        nickname: 'SoMKJK',
        videoURL: './assets/videos/Video11.mp4',
        title: 'Từ từ thôi chú ơi, anh ấy chỉ giỡn xíu thôi mà😂',
        hastag: ['kimjongkook', 'yooseyoon'],
        musicName: 'nhạc nền - SoMKJK',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/2dc09cb387d828ff1290fb25b46dc53a~c5_100x100.jpeg?x-expires=1640012400&x-signature=qrGHyWZ8EemRg3aQ6s6F7F5JLVw%3D',
        userName: 'leejieun93',
        nickname: 'IU ♡',
        videoURL: './assets/videos/Video1.mp4',
        title: 'Nhan sắc xinh đẹp, thần thái đỉnh cao, cuốn hút 🥰',
        hastag: ['beauty', 'music', 'kpop', 'love'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/649d408ea751baaf09f2b5a30a087bce~c5_100x100.jpeg?x-expires=1640012400&x-signature=M03BsPBLcGMUVmVaurmDNfwCJck%3D',
        userName: 'ngannt212',
        nickname: 'IU ♡',
        videoURL: './assets/videos/Video4.mp4',
        title: 'Anh còn trẻ, anh có nhiều lựa chọn. Nhưng anh đừng quên, em còn trẻ hơn anh🥰',
        hastag: ['beauty', 'music', 'xuhuong', 'nganreviewtop1'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/649d408ea751baaf09f2b5a30a087bce~c5_100x100.jpeg?x-expires=1640012400&x-signature=M03BsPBLcGMUVmVaurmDNfwCJck%3D',
        userName: 'kaiutaehyung',
        nickname: 'Ka_🧚🏻‍♀️',
        videoURL: './assets/videos/Video7.mp4',
        title: '1 trend cũ từ 2019 mà cậu còn nhớ',
        hastag: ['beauty', 'tuongtac', '💞angelsedit💞', 'fyp'],
        musicName: 'nhạc nền - Ka_🧚🏻‍♀️',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/79c751e48ee621ddd45b59ffd0d95aa0.jpeg?x-expires=1640012400&x-signature=wPq3qZLoO79hgI2GyXd5gnJn%2F%2B0%3D',
        userName: 'ap.bell',
        nickname: 'Bell',
        videoURL: './assets/videos/Video10.mp4',
        title: '😗😗😗👉👈',
        hastag: ['suga', 'tuongtac', 'voiceeffects', 'fyp'],
        musicName: 'Bell x BTS - Bell',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3182da631e052ff644dbc25daa13b333.jpeg?x-expires=1640012400&x-signature=h%2Bw4ZoF0TBD%2BepKIcZ8ExT%2BtUH8%3D',
        userName: 'blackpinrks',
        nickname: 'BLP',
        videoURL: './assets/videos/Video12.mp4',
        title: 'Cháy quá 🔥 🔥 đã hai năm kể từ khi họ làm nên lịch sử tại coachella 🍒 🤍',
        hastag: ['fyp', 'BLACKPINK', 'foryou', 'viral'],
        musicName: 'nhạc nền - BLACKPINK_TV ☽ - ☽',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/729d4b6360171f845961b09a9fbf0543.jpeg?x-expires=1640012400&x-signature=peTUqTdlR3ts9pHsD6EK8oRLSnA%3D',
        userName: 't.h.u.y.t.r.a.n.g2109',
        nickname: '𝐓𝐡ù𝐲 𝐓𝐫𝐚𝐧𝐠◔◡◔',
        videoURL: './assets/videos/Video8.mp4',
        title: 'Ủa Anh😃',
        hastag: ['sontungMTP', 'xuhuong', 'sky'],
        musicName: 'Authentic_TH - 𝘿𝙟 𝓝𝓪𝓽𝓻𝓪 🎧😍',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },

    ]
    return {
      suffleVideo() {
        function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
        shuffleArray(videos);
      },
      renderUI() {
        const htmls = videos.reduce((acc, data, index) => {
          return acc + `
                       <div class="video-item">
              <div class="fllow-btn">Follow</div>
              <div class="video-avatar">
                <a href="#">
                  <img src="${data.avatarURL}" alt="" />
                </a>
              </div>
              <div class="video-main">
                <div class="description">
                  <div class="acc-name-wrapper">
                    <span class="name">${data.userName}</span>
                    <span class="sub-text">${data.nickname}</span>
                  </div>
                  <div class="title-wrapper">
                    <span class="main-title">${data.title}</span>
                    <div class="hastag">
                    ${data.hastag.reduce((acc, tag) => {
            return acc + `
                            <a href="#">#${tag}</a>
                            `;
          }, '')
            }
                    </div>
                  </div>
                  <div class="music-wrapper">
                    <i class="fas fa-music"></i>
                    <div class="song-name">${data.musicName}</div>
                  </div>
                </div>
                <div class="video-frame">
                  <video
                   muted="muted"
                    src="${data.videoURL}"
                    class="video"
                    controls
                    playing="false"
                  ></video>
                  <div class="overlay">
                    <div class="play-btn playing">
                      <i class="fas fa-play"></i>
                      <i class="fas fa-pause"></i>
                    </div>
                    <div class="volumn">
                      <i class="fas fa-volume-up"></i>
                      <i class="fas fa-volume-mute"></i>
                      <div class="volumn-wrapper">
                        <input type="range" />
                      </div>
                    </div>
                  </div>
                  <div class="interact">
                    <div class="interact-item heart">
                      <div class="wrapper">
                        <i class="fas fa-heart"></i>
                      </div>
                      <span class="quantity">999k</span>
                    </div>
                    <div class="interact-item comments">
                      <div class="wrapper">
                        <i class="fas fa-comment-dots"></i>
                      </div>
                      <span class="quantity">100k</span>
                    </div>
                    <div class="interact-item share">
                      <div class="wrapper">
                        <i class="fas fa-share-alt"></i>
                      </div>
                      <span class="quantity">5000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    `;
        }, "")
        $('.video-list').html(htmls);
      },
      autoPlay() {
        $(window).on('load', function () {
          const videoItems = $('.video-item');
          const videos = videoItems.find('video');
          const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const mainItem = $(entry.target).parents('.video-item');
                entry.target.play();
                entry.target.setAttribute('playing', true);
                [...$('video[playing="false"]')].forEach(video => {
                  video.paused || video.pause();
                })
                // mainItem[0].play();
                const nextItem = $(mainItem).next();
                const prevItem = $(mainItem).prev();
                nextItem[0] && nextItem.find('video')[0].pause();
                prevItem[0] && prevItem.find('video')[0].pause();

              }
            })
          }, {
            threshold: 1
          });
          [...videos].forEach((video, index) => {
            setTimeout(() => {
              video.muted = false;
            }, 10);
            observer.observe(video);
          })
        })
      },
      run() {
        this.suffleVideo();
        this.renderUI();
        this.autoPlay();
      }
    }
  })().run();
})


