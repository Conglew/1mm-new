<template>
    <div class="aboutHeader">
        <div class="aboutContent">
            <div class="left-container">
                <h1 style="color: #7741BD;">無痛生成腦中大片 !</h1>
                <h1>輕鬆玩轉手中素材</h1>
                <!-- <p>最細緻的拍攝內容——隨手擁有最吸睛的熱門短影片<br>最專業的剪輯團隊——幫你輕鬆成就每個精彩瞬間</p> -->
                <button @click="scrollToHomeForm">了解詳情</button>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" class="right-container">
                <img :src="require('@/assets/aboutBHeader.png')">
            </div>
        </div>

        <div class="aboutContent_ph">
            <div data-aos="fade-left" data-aos-duration="1000" class="right-container">
                <img :src="require('@/assets/aboutBHeader.png')">
            </div>
            <div class="left-container">
                <h1 style="color: #7741BD;">無痛生成腦中大片 !</h1>
                <h1>輕鬆玩轉手中素材</h1>
                <!-- <p>最細緻的拍攝內容——<br>隨手擁有最吸睛的熱門短影片<br>最專業的剪輯團隊——<br>幫你輕鬆成就每個精彩瞬間</p> -->
                <button @click="scrollToHomeForm">了解詳情</button>
            </div>
        </div>
    </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

.aboutHeader {
  top: 0; left: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
}

.aboutContent, .aboutContent_ph {
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutContent_ph {
  display: none;
}

.left-container, .right-container{
  width: 50%;
}

.left-container {
  padding-left: 10%;
  text-align: start;
}

.left-container button {
  background-color: rgba(255, 255, 255, 0.35);
  border: 2px solid #000000;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 15px;
  cursor: pointer;
  /* transition: box-shadow 0.3s ease;  */
  margin-right: 30px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

.right-container img {
  width: 781px;
  height: 635px;
}

@media screen and (min-width: 1800px) {
  .left-container h1 {
    font-size: 3rem;
  }
  .right-container img {
    width: 859px;
    height: 698px;
  }
}

@media screen and (max-width: 545px) {
  .left-container h1 {
    font-size: 26px;
  }
  .aboutHeader {
    height: 75vh;
  }
  .aboutContent {
    display: none;
  }
  .aboutContent_ph {
    display: flex;
    flex-direction: column;
  }
  .left-container {
    width: 75%;
    padding-left: 0;
  }
  .aboutContent_ph .right-container img{
    width: 320px;
    height: 275px;
  }
}

@media screen and (max-width: 375px) {

  .aboutHeader {
    height: 95vh;
  }
}
</style>