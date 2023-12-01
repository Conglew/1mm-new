<template>
    <div class="homeAdvantage">
        <div class="Tittle">
            <h1>三大優勢</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="advContant">
            <div data-aos="flip-left" data-aos-delay="100" class="advContainer">
                <img :src="require('@/assets/Adv/icon.png')">
                <h2>社群影響力</h2>
                <p>短影音是現今數位世界的主要媒介之一無論你是一位企業家、創作者、或品牌，<strong>這是你連接觀眾、傳達信息和故事的絕佳方式。</strong></p>
            </div>

            <div data-aos="flip-left" data-aos-delay="200" class="advContainer">
                <img :src="require('@/assets/Adv/icon-2.png')">
                <h2>互動性</h2>
                <p>短影音讓你與觀眾建立更深入的互動關係。<strong>點贊、評論、分享，這是真實互動的起點。</strong></p>
            </div>

            <div data-aos="flip-left" data-aos-delay="300" class="advContainer">
                <img :src="require('@/assets/Adv/icon-3.png')">
                <h2>廣告效果</h2>
                <p>短影音廣告具有高度的吸引力，能夠快速吸引觀眾的注意力，<strong>提升品牌知名度，促使行動。</strong></p>
            </div>
        </div>

        <button @click="scrollToHomeForm">了解詳情</button>
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

.homeAdvantage {
    position: relative;
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    z-index: 888;
}

.advContant {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px; margin-bottom: 50px;
    width: 70%;
    gap: 50px;
}

.advContainer {
    background-color: #ffffff9a;
    border-radius: 25px;
    padding: 20px 18px;
    width: 350px;
    height: 350px;
}

.advContainer img {
    height: 150px;
    width: 150px;
}

.advContainer h2 {
    color: #7741BD;
    /* font-family: 'NotoSansTC-Bold'; */
}

.advContainer p {
    /* font-family: 'NotoSansTC-Medium'; */
    letter-spacing: 5.5%;
}

.homeAdvantage button {
    background-color: rgba(255, 255, 255, 0.35);
    border: 2px solid #000000;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 30px;
    border-radius: 15px;
    cursor: pointer;
    /* transition: box-shadow 0.3s ease;  */

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.Tittle h1 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}

@media screen and (min-width: 1800px) {
    .Tittle h1 {
      font-size: 3rem;
    }
    .advContainer {
      height: 355px;
      padding: 50px 20px 20px;
    }
    .advContainer p {
      font-family: 'NotoSansTC-Medium';
    }

}

@media screen and (max-width: 545px) {
  .homeAdvantage {
      height: 200%;
      margin-bottom: 100px;
  }
  .advContant {
      margin-top: 25px;
      flex-direction: column;
      align-items: center;
  }
  .advContainer {
      padding: 35px 18px 20px;
      width: 250px;
      height: 350px;
  }
  .Tittle {
      margin-top: 100px;
  }
  .Tittle h1 {
      font-size: 1.85em;
  }
}

@media screen and (max-width: 375px) {
  .homeAdvantage {
      height: 270vh;
  }
}
</style>