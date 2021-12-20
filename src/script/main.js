$(function () {
  (function () {
    const videos = [
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3a51e5fbffdd906e0085e0671a111480.jpeg?x-expires=1639983600&x-signature=FV2%2BLBEyjGuf9cghbWoJv%2FkmYjI%3D',
        userName: 'leejieun1993i',
        nickname: '💗 IU 💗',
        videoURL: 'https://v16-webapp.tiktok.com/5621567ffffdb507e27d38a30a87c459/61bfa211/video/tos/useast2a/tos-useast2a-pve-0037-aiso/90255123e2c04323ba7d606e10dd2f2f/?a=1988&br=3464&bt=1732&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915200501024501303826DF3D1B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ7OmQ6Zm9lODMzZjgzM0ApOzNoZDQ5NDxlNzk3NjtlNWdgLmAycjQwcDRgLS1kL2Nzc2FiMTVgNS9fYTY1NF8yMC46Yw%3D%3D&vl=&vr=',
        title: 'yêu bé từ cái nhìn đầu tiên, thiên thần nhỏ của tui',
        hastag: ['love', 'xuhuong'],
        musicName: 'Bé Diu rất đáng yêu khi đeo kính - 💗 IU 💗',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/28354868284e3c81a8dcb13a95eb80c8.jpeg?x-expires=1640012400&x-signature=kG9PCLBTNiSYZ9vYUgRZ74gmjYM%3D',
        userName: 'dausyhung6789',
        nickname: 'Đ𝓪̣̂𝓾 𝓢𝔂̃ 𝓗𝓾̀𝓷𝓰',
        videoURL: 'https://v16-webapp.tiktok.com/4d72915c0c255d21b9a47de42289b215/61bf9e16/video/tos/alisg/tos-alisg-pve-0037/c2bf55d674ff4adf9cc4e10fa9d76d37/?a=1988&br=4566&bt=2283&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915030901024407706825DAC4A0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzhoZzM6ZjlrODMzODgzNEApZjw3aDY4aWQ2NzdnOTw7Z2dwNmtycjRfLWFgLS1kLy1zc18wNWMyXmA0MF8yYi9jYzQ6Yw%3D%3D&vl=&vr=',
        title: 'Sự quyến rũ của em cũng không đủ làm tôi gục ngã..!',
        hastag: ['dausyhung', 'namphonghan'],
        musicName: 'nhạc nền - Thành nam 🌚 - Thành nam 💋',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/2dc09cb387d828ff1290fb25b46dc53a~c5_100x100.jpeg?x-expires=1640012400&x-signature=qrGHyWZ8EemRg3aQ6s6F7F5JLVw%3D',
        userName: 'leejieun93',
        nickname: 'IU ♡',
        videoURL: 'https://v16-webapp.tiktok.com/af8fc7c4e6a81e5332c8bd1ab3e45447/61bf9fa5/video/tos/useast2a/tos-useast2a-pve-0037-aiso/395b09e254ce4a6ab15c556f8739a70b/?a=1988&br=3606&bt=1803&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915093901024524314112DE7898&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amZnNTU6ZmluODMzZjgzM0ApZjY3NWY5O2Q3Nzc2NWU6ZGdici42cjRfNG5gLS1kL2Nzc2IuX2IuMV4tY2JeMzZeYy06Yw%3D%3D&vl=&vr=',
        title: 'Chú vệ sĩ của IU, như một người cha chăm sóc đứa con gái 😍',
        hastag: ['iu', 'cute', 'love'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d2202f7e74c8d9950bf96de486000906.jpeg?x-expires=1640012400&x-signature=SMWf759peu9eACXf1G7uytBh%2FUk%3D',
        userName: 'boxgirl.04',
        nickname: '𝐁𝐨𝐱 𝐆𝐢𝐫𝐥 🎬',
        videoURL: 'https://v16-webapp.tiktok.com/4e412081f88d910178bc90fc16c03503/61bf9fa1/video/tos/alisg/tos-alisg-pve-0037/025ddd2ead4a467cb0ecfed85373b91f/?a=1988&br=3576&bt=1788&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915093901024524314112DE7898&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVpd2Y6Zjk8OTMzODgzNEApaGQ4ZDM6OztnNzk8NmZlZWc2L29ecjRfZmhgLS1kLy1zczEvYmIvMWFeLTI2X2NjYGI6Yw%3D%3D&vl=&vr=',
        title: 'Idol nào đây ? ',
        hastag: ['dance', 'podayne', 'xuhuong'],
        musicName: 'Mood - Remix - Zero Two',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d908b739d9e9c6c55baad1df9ed047de~c5_100x100.jpeg?x-expires=1640012400&x-signature=BOiOwgFpIC6vmKAIRzmKyLg8QDs%3D',
        userName: 'iloveiuu2',
        nickname: 'IU❤️',
        videoURL: 'https://v16-webapp.tiktok.com/bc03a2314f30086531456dc5cf7c5aad/61bfa060/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/efe4964bc93b48f4abf53a06f45f765f/?a=1988&br=1362&bt=681&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=202112191512470102452480400CDBED68&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajs6bTw6ZmRqODMzZjgzM0ApaTw5NDk2NmVnNzg0Ojg4N2dgaC1mcjRfa2pgLS1kL2Nzcy0xMDRjNmBhYS5eNWJgNmM6Yw%3D%3D&vl=&vr=',
        title: 'Chú vệ sĩ cực tâm lý của IU 🥰',
        hastag: ['fyp', 'love'],
        musicName: 'GU (Cukak Remix) - Freaky, Seachains',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2bad257e447ffb9be6bdfc42d9e04b61.jpeg?x-expires=1640012400&x-signature=XeR8jGq9kzRtiKEh1Xf4HVBLCH0%3D',
        userName: 'tgflaftraanais',
        nickname: 'SoMKJK',
        videoURL: 'https://v16-webapp.tiktok.com/8935424911f29fdc00a7be6a5248caaf/61bfa20f/video/tos/alisg/tos-alisg-pve-0037/72c33295d6e54253a85efba014e89862/?a=1988&br=2900&bt=1450&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915200501024501303826DF3D1B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V3ajo6ZnBkOTMzODgzNEApZWU3ZzpkaDw4Nzw6OjxpOGdrM3NqcjRnL3BgLS1kLy1zcy5gNGAzMTNjMS1fXzEuMzE6Yw%3D%3D&vl=&vr=',
        title: 'Từ từ thôi chú ơi, anh ấy chỉ giỡn xíu thôi mà😂',
        hastag: ['kimjongkook', 'yooseyoon'],
        musicName: 'nhạc nền - SoMKJK',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/2dc09cb387d828ff1290fb25b46dc53a~c5_100x100.jpeg?x-expires=1640012400&x-signature=qrGHyWZ8EemRg3aQ6s6F7F5JLVw%3D',
        userName: 'leejieun93',
        nickname: 'IU ♡',
        videoURL: 'https://v16-webapp.tiktok.com/b53093e82dbe390b4381fe7f55bc61d4/61bfa219/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e5fe58bd23214898b3cc6e48e0ac519a/?a=1988&br=2754&bt=1377&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915200501024501303826DF3D1B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2x5PDw6ZjhmODMzZjgzM0ApPDRmO2dmNjs2NzY3OTg4M2dfYy9ycjRfY2dgLS1kL2Nzc15jYmMtYDE0Ml4xYGJfMmM6Yw%3D%3D&vl=&vr=',
        title: 'Nhan sắc xinh đẹp, thần thái đỉnh cao, cuốn hút 🥰',
        hastag: ['beauty', 'music', 'kpop', 'love'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/649d408ea751baaf09f2b5a30a087bce~c5_100x100.jpeg?x-expires=1640012400&x-signature=M03BsPBLcGMUVmVaurmDNfwCJck%3D',
        userName: 'ngannt212',
        nickname: 'IU ♡',
        videoURL: 'https://v16-webapp.tiktok.com/514d9d9e94361d3b05fd060068bb8f24/61bfa3b5/video/tos/alisg/tos-alisg-pve-0037/34e4c6210d2945c1a2dedc6585253e57/?a=1988&br=2940&bt=1470&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915270501025100417202E0A5B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am80ZTQ6ZjVkOTMzODgzNEApZDU0aDc2ODxoNzk6OGc4OmdvMF9icjRvNGpgLS1kLy1zc2MtLy02Yy0tLV40NTA0MTM6Yw%3D%3D&vl=&vr=',
        title: 'Anh còn trẻ, anh có nhiều lựa chọn. Nhưng anh đừng quên, em còn trẻ hơn anh🥰',
        hastag: ['beauty', 'music', 'xuhuong', 'nganreviewtop1'],
        musicName: 'nhạc nền - IU 🥰 - IU ♡',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/649d408ea751baaf09f2b5a30a087bce~c5_100x100.jpeg?x-expires=1640012400&x-signature=M03BsPBLcGMUVmVaurmDNfwCJck%3D',
        userName: 'kaiutaehyung',
        nickname: 'Ka_🧚🏻‍♀️',
        videoURL: 'https://v16-webapp.tiktok.com/d0fc9e5853cc65fab5eb15e231db5ccf/61bfa3b9/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/d2f82955177845e6916fe152969efeb2/?a=1988&br=2042&bt=1021&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915270501025100417202E0A5B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZldGk6ZjlmOTMzZjgzM0ApaTppPGU4ZGU3Nzk7aWRoZWdfYmdfcjRnZ2BgLS1kL2Nzc2A0NS9fY2JeLi8uYzI1Ni06Yw%3D%3D&vl=&vr=',
        title: '1 trend cũ từ 2019 mà cậu còn nhớ',
        hastag: ['beauty', 'tuongtac', '💞angelsedit💞', 'fyp'],
        musicName: 'nhạc nền - Ka_🧚🏻‍♀️',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/79c751e48ee621ddd45b59ffd0d95aa0.jpeg?x-expires=1640012400&x-signature=wPq3qZLoO79hgI2GyXd5gnJn%2F%2B0%3D',
        userName: 'ap.bell',
        nickname: 'Bell',
        videoURL: 'https://v16-webapp.tiktok.com/2630cc8757b13c35c519e04754d69ec0/61bfa3ba/video/tos/useast2a/tos-useast2a-ve-0068c004/a6271058891a4c77ace00a0619180d6a/?a=1988&br=1606&bt=803&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915270501025100417202E0A5B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2VnazQ6Zjh0OTMzNzczM0ApNmRmZzw0NGU5N2g3NTU0OGdiX2BmcjRnZjRgLS1kMTZzc2JfNDYvMF8yYV8yX19fNDM6Yw%3D%3D&vl=&vr=',
        title: '😗😗😗👉👈',
        hastag: ['suga', 'tuongtac', 'voiceeffects', 'fyp'],
        musicName: 'Bell x BTS - Bell',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3182da631e052ff644dbc25daa13b333.jpeg?x-expires=1640012400&x-signature=h%2Bw4ZoF0TBD%2BepKIcZ8ExT%2BtUH8%3D',
        userName: 'blackpinrks',
        nickname: 'BLP',
        videoURL: 'https://v16-webapp.tiktok.com/8638989676c49d163c8ebfc61f424f64/61bfa3b7/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f14728ab04b44bf7a297fe3691bf9e40/?a=1988&br=5580&bt=2790&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=2021121915270501025100417202E0A5B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdqN2g6ZnF0ODMzZjgzM0ApNzMzaDplaDxmNzdpZzU3OWduZDFicjRfLl5gLS1kL2NzczE2NTYtNWJjXmEzYjIwY186Yw%3D%3D&vl=&vr=',
        title: 'Cháy quá 🔥 🔥 đã hai năm kể từ khi họ làm nên lịch sử tại coachella 🍒 🤍',
        hastag: ['fyp', 'BLACKPINK', 'foryou', 'viral'],
        musicName: 'nhạc nền - BLACKPINK_TV ☽ - ☽',
        interacts: { heart: 342000, comment: 5344, share: 4232 }
      },
      {
        avatarURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/729d4b6360171f845961b09a9fbf0543.jpeg?x-expires=1640012400&x-signature=peTUqTdlR3ts9pHsD6EK8oRLSnA%3D',
        userName: 't.h.u.y.t.r.a.n.g2109',
        nickname: '𝐓𝐡ù𝐲 𝐓𝐫𝐚𝐧𝐠◔◡◔',
        videoURL: 'https://v16-webapp.tiktok.com/9b7d2514d3cf83ebbc74b0e5eff35510/61bfa6f1/video/tos/alisg/tos-alisg-pve-0037/e8781acaed944079a82997a9601b055c/?a=1988&br=1692&bt=846&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=202112191540510102440492150EE0A7EF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M25qO2U6ZnJoOTMzODgzNEApZDwzPDc0aTs7N2k6O2c7ZGdlaS5scjRnb2lgLS1kLy1zczAyLTU0Xy81MF9eYzEzX186Yw%3D%3D&vl=&vr=',
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
                    src="${data.videoURL}"
                    class="video"
                    controls
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
                // mainItem[0].play();
                const nextItem = $(mainItem).next();
                const prevItem = $(mainItem).prev();
                nextItem[0] && nextItem.find('video')[0].pause();
                prevItem[0] && prevItem.fin('video')[0].pause();

              }
            })
          }, {
            threshold: 1
          });
          [...videos].forEach((video, index) => {
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


