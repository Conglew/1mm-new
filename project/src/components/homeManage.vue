<template>
    <div class="homeManage">
        <div class="ManageBlob"></div>
        <div class="tittle"><h1>全方位解決短影音經營</h1></div>
        <div class="Managecontainer">
            <div class="manageContant-1">
                <div class="img-container">
                    <img :src="require('@/assets/Manage/mng01.png')">
                </div>

                <div data-aos="fade-left" class="text-container">
                    <h2 style="white-space: nowrap;">懂你心的製作團隊</h2>
                    <h3>專業短影音拍攝&剪輯公司，為您提供創意和高品質的影音內容，我們擁有豐富的經驗和專業知識，能夠為你提供全方位的短影音內容策劃服務。</h3>
                    <h4>#創意腳本  &nbsp; #專業拍攝  &nbsp; #影音剪輯</h4>
                    <button @click="scrollToHomeForm">了解更多</button>
                </div>
            </div>

            <div class="manageContant-2 manageContant-2-01">
                <div data-aos="fade-right" class="text-container">
                    <h2>為什麼要做短影音</h2>
                    <h4>#傳播快 &nbsp; #互動性強 &nbsp; #形式多樣 &nbsp; #精準溝通 &nbsp; #成本低</h4>
                    <h3>短影音是現今數位世界的主要媒介之一 <br> 🚀 現在就開始！無論你是要推廣產品、分享經驗、還是激發靈感，短影音都是你的最佳選擇。</h3>
                    <button @click="scrollToHomeForm">了解更多</button>
                </div>

                <div class="img-container">
                    <img :src="require('@/assets/Manage/mng02.png')">
                </div>
            </div>

            <div class="manageContant-2 manageContant-2-02">
                <div class="img-container">
                    <img :src="require('@/assets/Manage/mng02.png')">
                </div>

                <div class="text-container">
                    <h2 style="white-space: nowrap;">為什麼要做短影音</h2>
                    <h4>#傳播快 &nbsp; #互動性強 &nbsp; #形式多樣 &nbsp; #精準溝通 &nbsp; #成本低</h4>
                    <h3>短影音是現今數位世界主要媒介之一 <br> 🚀 現在就開始！無論你是要推廣產品、分享經驗、還是激發靈感，短影音都是你的最佳選擇。</h3>
                    <button @click="scrollToHomeForm">了解更多</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default {
  data() {
    return{
    }
  },
  methods: {
    scrollToHomeForm() {
      const currentRoute = this.$route;

      if (currentRoute.path === '/home') {
        this.$router.push({ path: '/home', hash: '#contactForm' });
      } else if (currentRoute.path === '/aboutA' || currentRoute.path === '/aboutB') {
        this.$router.push({ path: currentRoute.path, hash: '#contactForm' });
      } else if (currentRoute.path === '/contact') {
        this.$router.push({ path: '/contact', hash: '#contactForm' });
      } else {
        this.$router.push({ path: '/home', hash: '#contactForm' });
      }
    },
  },
  mounted() {
    AOS.init();
  }
}
</script>


<style scoped>

.homeManage {
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 150vh;
}

.ManageBlob {
    position: absolute;
    top: 155%;
    left: 0;
    width: 100vw;
    height: 195vh;
    pointer-events: none;
    background-image: url(@/assets/Manage/blob.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 555;
}

.tittle {
    position: relative; 
    margin-top: 0;
    margin-bottom: 100px;
    z-index: 888;
    /* font-size: em; */
}

.tittle h1 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}

.Managecontainer {
    width: 100%;
}

.manageContant-1 ,.manageContant-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    width: 63%;
    gap: 100px;
    z-index: 888;
}

.manageContant-2-01 {
    display: flex;
}
.manageContant-2-02 {
    display: none;
}

.img-container img {
    width: 390px;
    height: 390px;
}

.text-container {
    text-align: start;
}
.text-container p {
    font-family: 'NotoSansTC-Light';
}

.text-container h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 2rem;
    font-weight: 450;
    color: #7741BD;
    font-family: 'NotoSansTC-Bold';
}

.text-container h3 {
    font-family: 'NotoSansTC-Light';
    letter-spacing: 5.5%;
}

.text-container button {
    margin-top: 15px;
    background-color: #000;
    color: white;
    border: 2px solid #000000;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 30px;
    margin-right: 0;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

@media screen and (min-width: 1800px) {
    .ManageBlob {
        height: 175vh;
        background-size: 100% 100%;
    }
    .homeManage {
        height: 125vh;
    }

    .tittle h1 {
        font-size: 3rem;
    }
}

@media screen and (max-width: 545px) {
    .ManageBlob {
        background-size: 350% 100%;
        height: 248vh;
        top: 145%
    }
    .homeManage {
        height: 185%;
        margin-top: -200px;
    }
    .tittle {
        margin-bottom: 50px;
    }
    .manageContant-1 ,.manageContant-2 {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-bottom: 70px;
    }
    .manageContant-2-01 {
        display: none;
    }
    .manageContant-2-02 {
        display: flex;
    }
    .img-container img {
        width: 250px;
        height: 250px;
    }
    .text-container {
        width: 135%;
        text-align: center;
    }
    .tittle h1 {
        font-size: 1.85em;
    }

    .text-container h3, .text-container h4 {
        text-align: start;
    }
}

@media screen and (max-width: 375px) {
    .ManageBlob {
        background-size: 350% 100%;
        height: 285vh;
        top: 155vh;
    }
    .homeManage {
        height: 235vh;
    }
    .text-container {
        width: 120%;
    }
}

[data-aos] {
  opacity: 0;
  transition-duration: 1s;
}

[data-aos].aos-animate {
  opacity: 1;
}
</style>