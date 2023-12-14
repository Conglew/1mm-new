<template>
    <div class="homeHeader">
        <div class="profolio-sky"></div>
        <div class="profolio">
          <div class="image-container">
              <img :src="require('@/assets/ppl.png')">
          </div>

          <div  data-aos="fade-up" data-aos-duration="750" class="text-container">
              <h2>1 Minute Magic</h2>
              <p class="headerContainer">短影音製作專家 <br>創意滿點、速遞成稿<br>為短影音注入生命</p>
              <p class="headerTag">#reels&emsp;#shorts&emsp;#tiktok&emsp;#直式影音</p>
              <button @click="scrollToHomeForm">了解詳情</button>
              <button @click="scrollToHomeForm">聯絡我們</button>
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
.homeHeader {
  top: 0; left: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
.profolio-sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: url(@/assets/Home/sky.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 555;
}

.profolio {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 60%;
  left: 50%;
  gap: 0;
  transform: translateX(-50%); 
  z-index: 888;
}

.profolio .image-container {
  margin-right: 200px;
}

.profolio .image-container img {
  width: 417px;
  height: 286px;
}

.profolio .text-container h2{
  font-size: 32px;
  font-weight: 500;
  font-family: 'NotoSansTC-Medium';
  color: #7741BD;
  margin: -50px 0 10px 0;
}

.profolio .text-container .headerContainer {
  font-size: 32px;
  font-weight: bold;
  /* font-family: 'NotoSansTC-Medium'; */
  color: #000;
  margin: 5px 0;
}

.profolio .text-container .headerTag {
  font-size: 16px;
  font-family: 'NotoSansTC-Regular';
  color: #000;
  margin: 0 0 30px 0;
}

.profolio .text-container button {
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

.profolio .text-container button:last-child {
  background-color: #000;
  color: white;
  margin-right: 0;
}

@media screen and (min-width: 1800px) {
  .profolio .image-container {
    margin-right: 250px;
  }
}

@media screen and (max-width: 545px) {
  .profolio-sky {
    background-size: 250% 100%;
    background-position: 20%-95px;
  }
  .homeHeader  {
    height: 110vh;
  }
  .profolio {
    flex-direction: column;
    align-items: center;
    top: 85%;
    transform: translate(-50%, -50%);
    gap: 80px;
  }
  .profolio .image-container {
    margin-right: 0px;
  }
  .profolio .image-container img {
    width: 300px;
    height: 214px;
  }
  .profolio .text-container h2{
    font-size: 2.2rem;
    font-weight: 450;
    color: #7741BD;
    font-family: 'NotoSansTC-Medium';
    margin: -55px 0 5px 0;
  }
  .profolio .text-container p {
    font-size: 1.75rem;
    font-weight: bold;
    color: #000;
    /* font-family: 'NotoSansTC-Light'; */
    margin: 0 0 20px 0;
  }
}

@media screen and (max-width: 375px) {
  .homeHeader  {
    height: 120vh;
  }
  .profolio-sky {
    background-size: 250% 100%;
    background-position: 20%-118px;
  }
}

</style>