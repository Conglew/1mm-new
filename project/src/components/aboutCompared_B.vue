<template>
    <div class="aboutCompared">
       <h1>方案比較</h1>
       <div class="container" style="position: relative;z-index: 1;">
            <div class="compareForm">
                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="tittle">
                    </div>

                    <div class="tittle">
                        <h3>OMM剪輯套餐</h3>
                        <p>讓你隨手紀錄的生活碎片化身為精彩片段</p>
                    </div>

                    <div class="tittle">
                        <h3>OMM拍攝套餐</h3>
                        <p>保留人生中各個動人的回憶瞬間</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-01 form-header">
                    <img :src="require('@/assets/abtForm/film.png')">
                    <p>服務內容</p>
                    </div>

                    <p class="form-01">剪輯</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>拍攝+剪輯</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="form-02 form-header ">
                        <img :src="require('@/assets/abtForm/effect.png')">
                        <p>影音風格</p>
                    </div>

                    <p class="form-02">依素材調整</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>項目確認時溝通</p>
                    </div>
                </div>

                <!-- <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-03 form-header ">
                    <img :src="require('@/assets/abtForm/idea.png')">
                    <p>概念完整度</p>
                    </div>

                    <p class="form-03">短期活動</p>

                    <div class="form-01 form-footer">
                    <img :src="require('@/assets/abtForm/like.png')">
                    <p>長期經營</p>
                    </div>
                </div> -->

                <div class="form" style="background-color: rgba(256,256,256,.5);" >
                    <div class="form-04 form-header form-prc">
                        <div class="form-header">
                            <img :src="require('@/assets/abtForm/price.png')">
                            <p style="margin: 0;">影片報價</p>
                        </div>
                        <p style="margin: 0;font-size: 12px;font-family: 'NotoSansTC-Regular';">註:含稅、不含場地及演員</p>
                    </div>

                    <p class="form-04">2000元/支30s<br>3000元/支60s</p>
                    
                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>4000元/支30s(拍攝1hr)<br>5000元/支60s(拍攝1hr)</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);">
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
                        <h3>剪輯套餐</h3>
                    </div>

                    <div class="tittle">
                        <h3>拍攝套餐</h3>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.5);">
                    <div class="form-01 form-header">
                        <img :src="require('@/assets/abtForm/film.png')">
                        <p>服務內容</p>
                    </div>

                    <p class="form-01">剪輯</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>拍攝+剪輯</p>
                    </div>
                </div>

                <div class="form" style="background-color: rgba(256,256,256,.2);">
                    <div class="form-02 form-header ">
                        <img :src="require('@/assets/abtForm/effect.png')">
                        <p>影音風格</p>
                    </div>

                    <p class="form-02">依素材調整</p>

                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>確認時溝通</p>
                    </div>
                </div>

            <!-- <div class="form" style="background-color: rgba(256,256,256,.5);">
                <div class="form-03 form-header ">
                <img :src="require('@/assets/abtForm/idea.png')">
                <p>概念完整度</p>
                </div>

                <p class="form-03">短期活動</p>

                <div class="form-01 form-footer">
                <img :src="require('@/assets/abtForm/like.png')">
                <p>長期經營</p>
                </div>
            </div> -->

                <div class="form" style="background-color: rgba(256,256,256,.5);" >
                    <div class="form-04 form-header ">
                        <img :src="require('@/assets/abtForm/price.png')">
                        <p>影片報價</p>
                    </div>

                    <p class="form-04">2000元/30s<br>3000元/60s</p>
                    
                    <div class="form-01 form-footer">
                        <img :src="require('@/assets/abtForm/like.png')">
                        <p>4000元/30s<br>5000元/60s</p>
                    </div>
                </div>

                <p style="font-size: 12px; font-family: 'NotoSansTC-Regular';">註:以上價格含稅、不含場地及演員</p>
                <button class="frmButton" @click="scrollToHomeForm">了解詳情</button>

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
    position: relative;
    z-index: 1;
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
   margin: 0 20px 0 -50px;
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
    margin: -535px 0 0 67%; 
    padding: 3px 15px; 
    font-weight: bold; 
    border-radius: 15px;
    background-color: #F195BF;
    color: #fff;width: 150px;
}

.frmButton {
    background-color: rgba(255, 255, 255, 0.35);
    border: 2px solid #000000;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 15px;
    padding: 10px 30px;
    border-radius: 15px;
    cursor: pointer;
}

@media screen and (min-width: 1800px) {
    h1{
        font-size: 3rem;
    }
    .aboutCompared {
        height: 80vh;
    }
    .highLine  {
        margin: -535px 0 0 72%; 
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
        margin:  0 10px 0 -30px;
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
        height: 80vh;
    }
    .highLine  {
        display: none;
    }
    
}
</style>