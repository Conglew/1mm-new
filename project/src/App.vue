<template>
  <div id="#app">
    <header class="header">
      <router-link to="/home" class="logo" :style="{ backgroundImage: `url(${require('@/assets/Logo.png')})` }"></router-link>

      <div class="nav-link">
        <router-link to="/home">首頁</router-link>
        <router-link to="/aboutA">企業方案</router-link>
        <router-link to="/aboutB">個人方案</router-link>
        <router-link to="/contact" class="contact-link">聯絡我們</router-link>
      </div>

      <div class="nav-HamBG" @click="toggleNavHamBar">
        <img :src="require('@/assets/hamburger.png')" loading="lazy">
      </div>
    </header>

    <div class="navBar">
      <div class="phone" @click="callPhoneNumber">
        <img :src="require('@/assets/navBar/sideCTA.png')" loading="lazy">
      </div>
      <div class="form" @click="scrollToHomeForm">
        <img :src="require('@/assets/navBar/sideCTA-2.png')" loading="lazy">
      </div>
      <div class="Line" @click="openLine">
        <img :src="require('@/assets/navBar/sideCTA-3.png')" loading="lazy">
      </div>
    </div>

    <!-- 遮罩層 -->
    <div class="overlay" v-if="navBarVisible" @click="toggleNavHamBar"></div>

    <div class="navHamBar">
      <div class="hamBarContainer">
        <router-link to="/home" @click="closeNavHamBar" class="hamBarTittle">首頁</router-link>
        <router-link to="/aboutA" @click="closeNavHamBar" class="hamBarTittle">企業方案</router-link>
        <router-link to="/aboutB" @click="closeNavHamBar" class="hamBarTittle">個人方案</router-link>
        <router-link to="/contact" @click="closeNavHamBar" class="hamBarTittle">聯絡我們</router-link>
      </div>

      <img class="hamBar-logo" :src="require('@/assets/Logo.png')" loading="lazy">
      <img @click="toggleNavHamBar" class="hamBar-close" :src="require('@/assets/closeIcon.png')" loading="lazy">
    </div>
    
    <div class="watermark">
      <img :src="require('@/assets/watermark.png')" loading="lazy">
    </div>

    <keep-alive>
      <router-view/>
    </keep-alive>
    <footer class="footer">
      <div class="footerContant">
        <h3 class="tittle">關於我們</h3>
        <div class="footerContainer">
          <p class="sub">致力於影像創作已有多年經驗，擁有大量優質作品！</p>
          <p class="sub">專業團隊提供優質服務，使流程簡單，而作品不簡單</p>
          <p class="sub">不論您是品牌方或者個人，交給我們OMM攝影工作室</p>
          <p class="sub">讓我們協助編織每個精采動人的片段 !</p>
        </div>
      </div>

      <div class="footerContant">
        <h3 class="tittle">OMM攝影</h3>
        <div class="footerContainer">
          <p class="sub">聯絡人：榮恩 (Ron)</p>
          <p class="sub">電話：<a href="tel:0921-910-131" style="color: #fff;">0921-910-131</a> / <a href="tel:02-2873-2050" style="color: #fff;">02-2873-2050</a></p>
          <p class="sub">MAIL: 1mmfilmtw@gmail.com</p>
        </div>
      </div>

      <!-- <div class="footerContant">
        <h3 class="tittle">Headline</h3>
        <p class="sub">Sample text. Click to select the Text Element.</p>
      </div> -->
    </footer>
  </div>

</template>

<script>
export default {
  data() {
    return{
      navBarVisible: false,
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
    callPhoneNumber() {
      const phoneNumber = '0921910131';
      window.location.href = `tel:${phoneNumber}`;
    },
    openLine() {
      const lineLink = 'https://lin.ee/vuSyq11';
      window.open(lineLink, '_blank');
    },
    toggleNavHamBar() {
      const navHamBar = document.querySelector('.navHamBar');
      
      if(this.navBarVisible === false) {
        if (navHamBar) {
          navHamBar.style.transform = 'translateX(-50%)';
        }
        this.navBarVisible = !this.navBarVisible;
      }
      else {
        if (navHamBar) {
          navHamBar.style.transform = 'translateX(-200%)';
        }
        this.navBarVisible = !this.navBarVisible;
      }
    },
    closeNavHamBar() {
      const navHamBar = document.querySelector('.navHamBar');
      navHamBar.style.transform = 'translateX(-200%)';
      this.navBarVisible = !this.navBarVisible;
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'NotoSansTC';
  src: url('~@/fonts/Noto_Sans_TC/NotoSansTC-VariableFont_wght.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Black';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Black.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Bold';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-ExtraBold';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-ExtraBold.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-ExtraLight';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-ExtraLight.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Light';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Medium';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Regular';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-SemiBold';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'NotoSansTC-Thin';
  src: url('~@/fonts/Noto_Sans_TC/static/NotoSansTC-Thin.ttf') format('truetype');
}

body {
  margin: 0px;
  overflow-x: hidden;
}

#app {
    overflow-x: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // font-size: 'NotoSansTC';
    color: #000000;
}

.header {
    position: fixed;
    top: 2%; left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-items: center;
    border-radius: 20px;
    background-color: #ffffffad;
    padding: 20px 30px;
    z-index: 995;
}

.logo {
    width: 113px;
    height: 30px;
    background-size: cover;
}

.nav-link {
    display: block;
  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    padding: 21px 30px 20px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    &.router-link-exact-active {
      border-top: 4px solid #D8C3E7;
      &.contact-link {
        color: #000000;
        background-color: #D8C3E7;
        border: 2px solid #000000; 
      }
    }

    &.contact-link {
      border: 2px solid #000000; 
      border-radius: 18px;
      padding: 10px 25px;
    }
  }
}

.nav-HamBG {
    transform: translateY(2px);
    display: none;
}

.nav-HamBG img{
    width: 45px;
    height: 45px;
    cursor: pointer;
}

.navBar {
    display: block;
    position: fixed;
    top: 50%; left: 91%;
    padding: 13px;
    background-color: #ffffff;
    border-radius: 15px;
    z-index: 995;
}

.navBar > div:not(:last-child) {
    margin-bottom: 10px;
}

.navBar > div:last-child {
    margin-bottom: 0;
}

.navBar img {
    width: 85px;
    height: 85px;
    cursor: pointer;
}

.navHamBar {
    display: block;
    position: fixed;
    background-color: #ffffff;
    top: 5%; 
    left: 50%;
    transform: translateX(-200%);
    width: 80%;
    height: 90%;
    border-radius: 15px;
    transition: transform 0.75s ease;
    z-index: 999;
}

.navHamBar img {
    position: absolute;
}

.hamBar-logo {
    top: 4%; left: 7%;
    width: 100px;
    height: 27px;
}

.hamBar-close {
    top: 4%; right: 7%;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.hamBarContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 75px 30px;
}

.hamBarContainer .hamBarTittle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    height: 50px;
    width: 100%;
    padding-left: 15px;
    // border-radius: 5px;
    color: #000;
    // color: #7741BD;
    border-bottom: 2px solid #D8C3E7;
    // background-color: #D8C3E7;

    &.router-link-exact-active {
      border-radius: 5px;
      color: #7741BD;
      background-color: #D8C3E7;
      border-bottom: none;
    }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.watermark {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.watermark img {
  width: 593.55px;
  height: 156.49px;
  pointer-events: none;
}

.footer {
    position: relative;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: #4E4E4E;
    color: #ffffff;
    padding: 40px 50px;
    width: 95%;
    z-index: 1;
}

.footerContant {
    width: 50%;
    text-align: center;
}

.footerContant .tittle {
    width: 60%;
    font-size: 24px;
    margin-left:auto;
    margin-right:auto;
    text-align: start;
}

.footerContainer {
    width: 60%;
    margin: 0 auto;
    text-align: start;
}

.footerContant p {
    font-size: 16px;
    margin: 5px 0;
}

@media screen and (min-width: 1800px) {
  .footerContant p {
    font-size: 0.85rem;
  }
  .navBar {
    left: 93%;
  }
  // .footer {
  //   height: 250px;
  // }
}

@media screen and (max-width: 545px) {
  .nav-link {
    display: none;
  }
  .navBar {
    display: flex;
    position: fixed;
    justify-content: center;
    gap: 30px;
    width: 95%;
    top: 84%; left: 0%;
    padding: 13px ;
    background-color: #ffffff;
    border-radius: 15px;
    z-index: 995;
  }
  .navBar img {
    width: 100px;
    border-radius: 18px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .nav-HamBG {
    display: block;
  }
  .footer {
    height: 60vh;
    flex-direction: column;
    padding: 10px 50px 130px 35px;
  }
  .footerContant {
    width: 80%;
    text-align: start;
  }
  .footerContant .tittle {
      margin-left:0;
      margin-right:0;
  }
  .footerContainer {
    width: 100%;
    margin-left:0;
    margin-right:0;
  }
  .watermark {
    top: 20%;
  }
  .watermark img {
    transform: scale(0.5);
  }
}

@media screen and (max-width: 375px) {
  .navBar {
    top: 80%; left: 0%;
    padding: 10px ;
  }
  .footer {
    height: 75vh;
  }
}
</style>
