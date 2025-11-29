<template>
    <div class="aboutPlan">
        <div class="Tittle">
            <!-- <h1>選擇你的企業方案</h1> -->
            <h1>專屬於你的企業方案</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="planContent" style="position: relative;z-index: 1;">
            <div class="leftContainer" >
                <!-- <div class="containerHeader">
                    <h1 class="containerTittle">活動套餐</h1>
                    <h3>獨奏絕響曲，高規格形象片輕鬆點</h3>
                    <img :src="require('@/assets/abtPln/icon-3.png')">
                </div>

                <div class="containerMain">
                    <h1>立即預約專人聯繫</h1>
                    <div class="conceptContainer">
                    <div class="cancept">
                        <h3>概念呈現</h3>
                        <p> &#10003; 品牌故事</p>
                        <p> &#10003; 產品/服務介紹</p>
                        <p> &#10003; 促銷活動</p>
                        <p> &#10003; 使用者體驗回饋</p>
                    </div>
                    <div class="cancept">
                        <h3>專業評估</h3>
                        <p> &#10003; 拍攝風格建議</p>
                        <p> &#10003; 完整細節溝通</p>
                        <p> &#10003; 專業燈光設計</p>
                        <p> &#10003; 專屬腳本設計</p>
                    </div>
                    <div class="cancept">
                        <h3>細緻剪輯</h3>
                        <p> &#10003; 現場指導</p>
                        <p> &#10003; 精彩剪輯</p>
                        <p> &#10003; 專業運鏡</p>
                    </div>
                    <div class="cancept"></div>
                    </div>
                </div>

                <button @click="scrollToHomeForm">立即聯繫</button> -->
                <div class="containerImg">
                    <img :src="require('@/assets/about_A.png')" loading="lazy">
                </div>
            </div>

            <div class="rightContainer">
                <!-- <div class="containerHeader">
                    <h1 class="containerTittle">經營套餐</h1>
                    <h3>豪華四重奏，全方位概念呈現不間斷</h3>
                    <img :src="require('@/assets/abtPln/icon-2.png')">
                </div> -->

                <div class="containerMain">
                    <!-- <h1>立即預約專人聯繫</h1> -->
                    <div class="conceptContainer">
                        <div class="cancept">
                            <div class="canceptContainer">
                                <div>
                                    <h3>概念呈現</h3>
                                    <p>品牌故事</p>
                                    <p>產品/服務介紹</p>
                                    <p>促銷活動</p>
                                    <p>使用者體驗回饋</p>
                                </div>
                            </div>
                        </div>
                        <div class="cancept">
                            <div class="canceptContainer">
                                <div>
                                    <h3>細緻服務</h3>
                                    <p>現場指導</p>
                                    <p>精彩剪輯</p>
                                    <p>專業運鏡</p>
                                    <p>形象營造</p>
                                    <p>投放需求</p>
                                </div>
                            </div>
                        </div>
                        <div class="cancept">
                            <div class="canceptContainer">
                                <div>
                                    <h3>專業評估</h3>
                                    <p>拍攝風格建議</p>
                                    <p>完整細節溝通</p>
                                    <p>專業燈光設計</p>
                                    <p>專屬腳本設計</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="cancept"></div> -->
                    </div>
                    <button @click="scrollToHomeForm">立即聯繫</button>
                </div>

                <!-- <button @click="scrollToHomeForm">立即聯繫</button> -->
            </div>
        </div>

        <!-- <div class="planCloose_ph" style="position: relative;z-index: 1;">
            <div :class="['planClsBox', { 'active': 0 === activePlan }]" @click="setActivePlan(0)">
                <h2>標準版</h2>
            </div>

            <div :class="['planClsBox', 'isFillCls' , { 'active': 1 === activePlan }]" @click="setActivePlan(1)">
                <div style="flex-direction: column;">
                    <h2 style="margin: 0;">完整版</h2>
                    <p style="margin: 3px 0 0 0; padding: 3px 15px; font-weight: bold; border-radius: 15px ;background-color: #F195BF;color: #fff;">最多人選擇</p>
                </div>
            </div>
        </div> -->

        <div class="planContent_ph" style="position: relative;z-index: 1;">
            <!-- <div class="leftContainer" v-if="activePlan === 0">
                <div class="containerHeader">
                    <h1 class="containerTittle">活動套餐</h1>
                    <h3>獨奏絕響曲，高規格形象片輕鬆點</h3>
                    <img :src="require('@/assets/abtPln/icon-3.png')">
                </div>

                <div class="containerMain">
                    <h1>立即預約專人聯繫</h1>
                    <div class="conceptContainer">
                    <div class="cancept">
                        <h3>概念呈現</h3>
                        <p> &#10003; 品牌故事</p>
                        <p> &#10003; 產品/服務介紹</p>
                        <p> &#10003; 促銷活動</p>
                        <p> &#10003; 使用者體驗回饋</p>
                    </div>
                    <div class="cancept">
                        <h3>專業評估</h3>
                        <p> &#10003; 拍攝風格建議</p>
                        <p> &#10003; 完整細節溝通</p>
                        <p> &#10003; 專業燈光設計</p>
                        <p> &#10003; 專屬腳本設計</p>
                    </div>
                    <div class="cancept">
                        <h3>細緻剪輯</h3>
                        <p> &#10003; 現場指導</p>
                        <p> &#10003; 精彩剪輯</p>
                        <p> &#10003; 專業運鏡</p>
                    </div>
                    <div class="cancept"></div>
                    </div>
                </div>

                <button @click="scrollToHomeForm">立即聯繫</button>
            </div> -->

            <!-- <div class="rightContainer" v-else-if="activePlan === 1">
                <div class="containerHeader">
                    <h1 class="containerTittle">經營套餐</h1>
                    <h3>豪華四重奏，全方位概念呈現不間斷</h3>
                    <img :src="require('@/assets/abtPln/icon-2.png')">
                </div>

                <div class="containerMain">
                    <h1>立即預約專人聯繫</h1>
                    <div class="conceptContainer">
                    <div class="cancept">
                        <h3>概念呈現</h3>
                        <p> &#10003; 品牌故事</p>
                        <p> &#10003; 產品/服務介紹</p>
                        <p> &#10003; 促銷活動</p>
                        <p> &#10003; 使用者體驗回饋</p>
                    </div>
                    <div class="cancept">
                        <h3>專業評估</h3>
                        <p> &#10003; 拍攝風格建議</p>
                        <p> &#10003; 完整細節溝通</p>
                        <p> &#10003; 專業燈光設計</p>
                        <p> &#10003; 專屬腳本設計</p>
                    </div>
                    <div class="cancept">
                        <h3>細緻剪輯</h3>
                        <p> &#10003; 現場指導</p>
                        <p> &#10003; 精彩剪輯</p>
                        <p> &#10003; 專業運鏡</p>
                    </div>
                    <div class="cancept"></div>
                    </div>
                </div>

                <button @click="scrollToHomeForm">立即聯繫</button>
            </div> -->
            <div class="containerImg">
                <img :src="require('@/assets/about_A.png')" loading="lazy">
            </div>
            <div class="containerHeader">
                <h3>您出價 我來拍</h3>
            </div>
            <div class="containerText">
                <div class="canceptContainer">
                    <div class="cancept">
                        <div class="canceptContainer">
                            <div class="canceptHeader"><h3>概念呈現</h3></div>
                            <p> 品牌故事</p>
                            <p> 產品/服務介紹</p>
                            <p> 促銷活動</p>
                            <p> 使用者體驗回饋</p>
                        </div>
                    </div>
                    <div class="cancept">
                        <div class="canceptContainer">
                            <div class="canceptHeader"><h3>專業評估</h3></div>
                            <p> 拍攝風格建議</p>
                            <p> 完整細節溝通</p>
                            <p> 專業燈光設計</p>
                            <p> 專屬腳本設計</p>
                        </div>
                    </div>
                    <div class="cancept">
                        <div class="canceptContainer">
                            <div class="canceptHeader"><h3>細緻服務</h3></div>
                            <p> 現場指導</p>
                            <p> 精彩剪輯</p>
                            <p> 專業運鏡</p>
                            <p> 形象營造</p>
                            <p> 投放需求</p>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="scrollToHomeForm">立即聯繫</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return{
        activePlan: 0,
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
    setActivePlan(index) {
        this.activePlan = index;
    },
  }
}
</script>

<style scoped>

.aboutPlan {
    top: 0; left: 0;
    padding: 0;
    width: 100%;
    height: 85vh;
}
.Tittle {
    margin-bottom: 50px;
}

.Tittle h1 {
    position: relative;
    z-index: 1;
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}
.planContent, .planContent_ph {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0px;
    transform: translateX(-35px);
}
.planContent_ph {
    width: 85%;
    box-sizing: border-box;
    padding: 16px;
    flex-direction: column;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.7);
    transform: translateX(0px);
}

.planContent_ph, .planCloose_ph {
    display: none;
}
.planContent_ph img {
    width: 200px;
    height: 200px;
}

.rightContainer {
    width: 35%;
    height: 100%;
    /* height: 955px; */
    /* background-color: rgba(255,255,255,0.7); */
    border-radius: 25px;
}
.leftContainer {
    width: 400px;
    height: 400px;
}
.leftContainer .containerImg {
    width: 100%;
    height: 100%;
}
.leftContainer .containerImg img {
    width: 100%;
    height: 100%;
}


.containerHeader h1 {
    margin: 50px 0 5px;
    font-size: 2.5rem;
    color: #7741BD;
    font-family: 'NotoSansTC-Medium'
}

.containerHeader h3 {
    margin: 0 0 15px 0;
}

.containerHeader img {
    width: 230px;
    height: 230px;
}
.containerMain {
    height: 100%;
    width: 120%;
    box-sizing: border-box;
    padding: 0px 20px;
}

.containerMain h1 {
    margin: 40px 0 25px;
    font-size: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}

.conceptContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    text-align: start;
    height: 100%;
    width: 100%;
    gap: 20px;
    /* background-color: aliceblue; */
}

.planContent .cancept {
    height: 280px;
    min-width: 182px;
    width: 182px;
    /* flex: 1 0 calc(33% - 10px); */
    /* margin: 5px 5px 30px; */
    /* align-self: flex-start; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    border-radius: 16px;
    padding-top: 40px;
    background-color: rgba(255, 255, 255, 0.7);
}

.planContent .cancept h3{
    font-size: 32px;
    color: #7741BD;
    margin: 0 13px 10px;
}
.planContent .cancept p {
    margin: 0 13px 2.5px;
    letter-spacing: 5.5%;
    font-weight: bold;
    font-size: 16px;
    font-family: 'NotoSansTC-Light';
    /* letter-spacing: 5.5%; */
}
.planContent .cancept p::before {
    content: "\2713";
    font-size: 17px;
    font-weight: bold;
    color: #D8C3E7;
    margin-right: 10px;
}

.leftContainer button, .rightContainer button {
    margin-top: 30px;
    background-color: #000;
    color: white;
    border: 2px solid #000000;
    font-size: 1rem;
    font-weight: bold;
    width: 250px;
    height: 48px;  
    /* padding: 10px 50px; */
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.containerText {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.canceptContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    margin: 10px 0px;

    & .cancept {
        width: calc(50% - 10px);
        /* background-color: #cdcdcd; */

        & .canceptContainer {
            & .canceptHeader {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #7741BD;
                border: 2px solid #D8C3E7;
                border-radius: 8px;
                margin: 10px 0;

                & h3 {
                    font-size: 15px;
                    margin: 2px;
                    /* font-family: 'NotoSansTC-Bold'; */
                }
            }

            & p {
                font-size: 15px;
                font-family: 'NotoSansTC-Light';
                /* color: purple; */
            }
            & p::before {
                content: "\2713";
                font-size: 17px;
                font-weight: bold;
                color: #D8C3E7;
                margin-right: 10px;
            }
        }
    }
}

@media screen and (min-width: 1920px) {
    .aboutPlan {
        height: 75vh;
    }
    .canceptContainer {
        align-items: center;
    }
}

@media screen and (min-width: 1800px) {
    .Tittle h1 {
        font-size: 3rem;
    }
}

@media screen and (max-width: 545px) {
    .aboutPlan {
        height: 130vh;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    .Tittle h1 {
        font-size: 28px;
        margin: 10px;
    }
    .planContent {
        display: none;
    }
    .planContent_ph {
        display: flex;

        & .containerHeader {
            width: 100%;
            border-bottom: 1px solid #000;

            & h3 {
                font-size: 24px;
                font-family: 'NotoSansTC-Medium';
            }
        }
        & button {
            margin-top: 30px;
            background-color: #000;
            color: white;
            border: 2px solid #000000;
            font-size: 15px;
            font-family: 'NotoSansTC-Medium';
            /* font-weight: bold; */
            width: 120px;
            height: 40px;  
            /* padding: 10px 50px; */
            border-radius: 15px;
            cursor: pointer;

            &:hover {
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        }
    }
    .leftContainer, .rightContainer {
        width: 85%;
    }
    .rightContainer {
        background-color: rgba(255,255,255,0.7);
        border: 2px solid transparent;
        border-image: linear-gradient(to bottom right, 
            rgb(218, 174, 53),
            rgb(246, 220, 117),
            rgb(207, 162, 56),
            rgb(246, 220, 117),
            rgb(228, 197, 92)
        ) 30; /* 使用线性渐变作为边框图像 */
        border-radius: 0px; 
    }
    .containerMain {
        padding: 0px 20px;
    }
    .canceptContainer {
        justify-content: space-between;
    }
    .cancept h3{
        margin: 0 0px 10px;
    }
    .cancept p {
        margin: 0 0px 2.5px;
        letter-spacing: 5.5%;
    }
    .Tittle {
        margin-bottom: 10px;
    }
    .Tittle h1 {
        font-size: 28px;
    }
    .planCloose_ph {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 10px;
        background-color: rgba(256,256,256,.3);
        padding: 25px 0;
        margin-bottom: 20px;
    }
    .planClsBox {
        width: 150px;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .planClsBox.active {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .planClsBox.isFillCls.active {
        background-color: white;
        border: 2px solid transparent;
        border-image: linear-gradient(to bottom right, 
            rgb(218, 174, 53),
            rgb(246, 220, 117),
            rgb(207, 162, 56),
            rgb(246, 220, 117),
            rgb(228, 197, 92)
        ) 30; /* 使用线性渐变作为边框图像 */
        border-radius: 0px; 
    }
    .Tittle h1 {
        font-size: 1.8em;
    }
}

@media screen and (max-width: 375px) {

    .aboutPlan {
        height: 145vh;
    }
}
</style>