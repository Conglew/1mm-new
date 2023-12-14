<template>
    <div class="aboutProcess">
        <!-- <div class="ManageBlob"></div> -->
        <div class="tittle">
            <h1>合作流程</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="processContent" style="position: relative;z-index: 1;">
            <div class="processContainer">
                <div data-aos="fade-down" data-aos-delay="100" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon.png')">
                    <h2>前期溝通</h2>
                    <p>專業視角深入了解品牌方需求，確認拍攝方向，量身打造專屬影片風格。收取50%訂金進行後續流程。</p>
                </div>

                <div data-aos="fade-down"  data-aos-delay="900" class="processProject" style="transform: translateY(200px);">
                    <img :src="require('@/assets/abtProcess/icon-2.png')">
                    <h2>場地勘驗</h2>
                    <p>將現場狀況作實際評估，使整體拍攝過程更流暢有效。</p>
                </div>

                <div data-aos="fade-down"  data-aos-delay="300" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-3.png')">
                    <h2>腳本撰寫</h2>
                    <p>撰寫初稿後，與品牌方進行深入溝通，並確認正式拍攝時間，使細節也能被完整視現。</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="1200" class="processProject" style="transform: translateY(200px);">
                    <img :src="require('@/assets/abtProcess/icon-4.png')">
                    <h2>正式拍攝</h2>
                    <p>專業團隊拍攝，透過鏡頭敘述故事，勾勒品牌形象，呈現豐富畫面。</p>
                </div>

                <div data-aos="fade-down"  data-aos-delay="600" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-5.png')">
                    <h2>成片交付</h2>
                    <p>透過精緻剪輯，使作品產生獨特風格，並交付完整成片檔案，並收取50%尾款。</p>
                </div>
            </div>

            <div class="processContainer_ph">
                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon.png')">
                    <div>
                        <h2>前期溝通</h2>
                        <p>專業視角深入了解品牌方需求，確認拍攝方向，量身打造專屬影片風格。收取50%訂金進行後續流程。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-2.png')">
                    <div>
                        <h2>場地勘驗</h2>
                        <p>將現場狀況作實際評估，使整體拍攝過程更流暢有效。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-3.png')">
                    <div>
                        <h2>腳本撰寫</h2>
                        <p>撰寫初稿後，與品牌方進行深入溝通，並確認正式拍攝時間，使細節也能被完整視現。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-4.png')">
                    <div>
                        <h2>正式拍攝</h2>
                        <p>專業團隊拍攝，透過鏡頭敘述故事，勾勒品牌形象，呈現豐富畫面。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-5.png')">
                    <div>
                        <h2>成片交付</h2>
                        <p>透過精緻剪輯，使作品產生獨特風格，並交付完整成片檔案，並收取50%尾款。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default {
    mounted() {
        AOS.init();
    }
}
</script>

<style scoped>

.ManageBlob {
    position: absolute;
    top: 333%;
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

.aboutProcess {
    top: 0; left: 0;
    padding: 50px 0 0 0;
    width: 100%;
    height: 100vh;
}

.tittle {
    position: relative; 
    margin-top: 0;
    margin-bottom: 55px;
    z-index: 888;
}

.tittle h1 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}

.processContent{
    display: flex;
    justify-content: center;
    width: 100%;
}

.processContainer, .processContainer_ph {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    width: 70%;
}

.processContainer_ph {
    display: none;
}

.processProject {
    width: 180px;
    height: 283px;
}

.processProject h2 {
    color: #7741BD;
}

.processProject img {
    width: 90px;
    height: 90px;
}

@media screen and (min-width: 1800px) {
    .aboutProcess {
        height: 80vh;
    }
    .tittle {
        margin-bottom: 75px;
    }
    .tittle h1 {
        font-size: 3rem;
    }
}

@media screen and (max-width: 545px) {
    .aboutProcess {
        height: 150vh;
    }
    .processContainer_ph {
        flex-direction: column;
        display: flex;
        gap: 0px;
    }
    .processContainer {
        display: none;
    }
    .processProject {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: start;
        width: 100%;
        height: 200px;
        gap: 30px;
    }
    .processProject h2 {
        color: #7741BD;
    }
    .tittle {
        margin-bottom: -25px;
    }
    .tittle h1 {
        font-size: 28px;
        margin: 0 0 50px;
    }
}

@media screen and (max-width: 375px) {
    .aboutProcess {
        height: 185vh;
    }
}
</style>
