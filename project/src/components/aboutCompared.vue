<template>
     <div class="aboutCompared">
        <h1>方案比較</h1>
        <div class="container">
            <div class="compareForm">
                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="tittle">
                    </div>

                    <div class="tittle">
                    <h3>OMM活動套餐</h3>
                    <p>值得暫停呼吸一分鐘欣賞的形象片</p>
                    </div>

                    <div class="tittle">
                    <h3>OMM經營套餐</h3>
                    <p>回過神來決定全部交給我們的全方位套餐</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-01 form-header">
                        <img :src="require('@/assets/abtForm/film.png')">
                        <p>影片數量</p>
                    </div>

                    <p class="form-01">1</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>4</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="form-02 form-header ">
                        <img :src="require('@/assets/abtForm/effect.png')">
                        <p>故事性</p>
                    </div>

                    <p class="form-02">簡短</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>完整</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-03 form-header ">
                        <img :src="require('@/assets/abtForm/idea.png')">
                        <p>套餐取向</p>
                    </div>

                    <p class="form-03">短期活動</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>長期經營</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);" >
                    <div class="form-04 form-header form-prc">
                        <div class="form-header">
                            <img :src="require('@/assets/abtForm/price.png')">
                            <p style="margin: 0;">影片報價</p>
                        </div>
                        <p style="margin: 0;">(不含場地及演員)</p>
                    </div>

                    <p class="form-04">15,000元/支(30s-60s)</p>
                    
                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>30,000元/4支(30-60s)</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-05 form-header "></div>
                        <div class="form-05 form-button">
                        <button @click="scrollToHomeForm">了解更多</button>
                    </div>
                    
                    <div class="form-05 form-button">
                        <button @click="scrollToHomeForm">了解更多</button>
                    </div>
                </div>
            </div>

            <div class="compareForm_ph">
                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="tittle">
                    </div>

                    <div class="tittle">
                    <h3>活動套餐</h3>
                    </div>

                    <div class="tittle">
                    <h3>經營套餐</h3>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-01 form-header">
                        <img :src="require('@/assets/abtForm/film.png')">
                        <p>影片數量</p>
                    </div>

                    <p class="form-01">1</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>4</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="form-02 form-header ">
                        <img :src="require('@/assets/abtForm/effect.png')">
                        <p>故事性</p>
                    </div>

                    <p class="form-02">簡短</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>完整</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-03 form-header ">
                        <img :src="require('@/assets/abtForm/idea.png')">
                        <p>套餐取向</p>
                    </div>

                    <p class="form-03">短期活動</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>長期經營</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);" >
                    <div class="form-04 form-header ">
                        <div>
                            <img :src="require('@/assets/abtForm/price.png')">
                            <p>影片報價</p>
                        </div>
                    </div>

                    <p class="form-04">15,000元/<br>支30s-60s</p>
                    
                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>30,000元/<br>4支30-60s</p>
                    </div>
                </div>

            </div>
        </div>

        <p class="highLine">最多人選擇</p>
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

.aboutCompared {
    top: 0; left: 0;
    padding: 50px 0 0 0;
    width: 100%;
    height: 100vh;
}

.aboutCompared h1 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
    margin-bottom: 55px;
}
.container {
    display: flex;
    justify-content: center;
}
.compareForm {
    width: 70%;
}

.compareForm_ph {
    display: none;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.form .tittle,
.form .form-01,
.form .form-02,
.form .form-03,
.form .form-04,
.form .form-05 {
    flex: 1;
}

p {
    font-weight: 500;
    font-family: 'NotoSansTC-Medium';
}

.form .tittle h3, .form .tittle p{
    margin: 0px;
}

.form .tittle h3 {
    color: #7741BD;
    margin-bottom: 8px;
}

.form-header, .form-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-prc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-header img, .form-footer img {
    margin-right: 10px;
    width: 32px;
    height: 32px;
}

.form-footer img {
    margin: 0 28px 0 -50px;
}

.form-button button {
    padding: 10px 50px;
    background-color: #000;
    color: white;
    border: 2px solid #000000;
    font-size: 1rem;
    font-weight: bold;  
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.highLine {
    position: relative;
    margin: -635px 0 0 67%; 
    padding: 3px 15px; 
    font-weight: bold; 
    border-radius: 15px;
    background-color: #F195BF;
    color: #fff;width: 150px;
}

@media screen and (min-width: 1800px) {
    h1{
        font-size: 3rem;
    }
    .highLine  {
        margin: -635px 0 0 72%; 
    }
}

@media screen and (max-width: 545px) {
    .aboutCompared {
        height: 80vh;
    }
    .compareForm {
        display: none;
    }
    .compareForm_ph {
        display: block;
        width: 100%;
    }
    .form-header {
        flex-direction: column;
    }
    .form-header img, .form-footer img {
        width: 25px;
        height: 25px;
    }
    .form-footer img {
        margin:  0 10px 0 -50px;
    }
    .form .form-01 p,
    .form .form-02 p,
    .form .form-03 p,
    .form .form-04 p,
    .form .form-05 p {
        margin: 5px 0 0 0;
    }
    .highLine  {
        display: none;
    }
    .aboutCompared h1 {
        font-size: 28px;
        margin: 0 0 30px;
    }
}

@media screen and (max-width: 375px) {
    .aboutCompared {
        height: 85vh;
    }
    .highLine  {
        display: none;
    }
    
}
</style>