<template>
    <div class="aboutProcess">
        <!-- <div class="ManageBlob"></div> -->
        <div class="tittle">
            <h1>流程運作</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="processContent" style="position: relative;z-index: 1;">
            <div class="processContainer">
                <div data-aos="fade-down" data-aos-delay="100" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon.png')" loading="lazy">
                    <h2>項目確認</h2>
                    <p>專業視角了解客戶需求， 提供後續拍攝建議。</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="900" class="processProject" style="transform: translateY(200px);">
                    <img :src="require('@/assets/abtProcess/icon-2.png')" loading="lazy">
                    <h2>排程確認</h2>
                    <p>確認拍攝日期並收取50%訂金。</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="300" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-4.png')" loading="lazy">
                    <h2>專業拍攝</h2>
                    <p>根據客戶需求，提供技術面上的專業服務。</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="1200" class="processProject" style="transform: translateY(200px);">
                    <img :src="require('@/assets/abtProcess/icon-6.png')" loading="lazy">
                    <h2>細緻剪輯</h2>
                    <p>透過鏡頭敘事，精準編排影像節奏，讓概念精彩呈現。</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="600" class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-7.png')" loading="lazy">
                    <h2>成片交付</h2>
                    <p>透過精緻剪輯，使作品產生獨特風格，並交付完整成片檔案，並收取50%尾款。</p>
                </div>
            </div>

            <div class="processContainer_ph">
                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon.png')" loading="lazy">
                    <div>
                        <h2>項目確認</h2>
                        <p>專業視角了解客戶需求， 提供後續拍攝建議。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-2.png')" loading="lazy">
                    <div>
                        <h2>排程確認</h2>
                        <p>確認拍攝日期並收取50%訂金。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-4.png')" loading="lazy">
                    <div>
                        <h2>專業拍攝</h2>
                        <p>根據客戶需求，提供技術面上的專業服務。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-6.png')" loading="lazy">
                    <div>
                        <h2>細緻剪輯</h2>
                        <p>透過鏡頭敘事，精準編排影像節奏，讓概念精彩呈現。</p>
                    </div>
                </div>

                <div class="processProject">
                    <img :src="require('@/assets/abtProcess/icon-7.png')" loading="lazy">
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

.processContent {
    display: flex;
    justify-content: center;
    width: 100%;
}

.processProject h2 {
    color: #7741BD;
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
        height: 140vh;
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
        height: 185px;
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
        margin: 0 0 30px;
    }
}

@media screen and (max-width: 375px) {
    .aboutProcess {
        height: 165vh;
    }
}
</style>
