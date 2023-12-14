<template>
    <div class="aboutServe">
        <div class="Tittle">
            <h1 >還需要更多? <br>任意加購你的拍攝服務</h1>
        </div>

        <div class="aboutServeContnat">
            <div class="aboutServeContainer" data-aos="fade-left" data-aos-delay="150">
            <img :src="require('@/assets/abtServe/abtServe01.png')">
            <p>+拍攝時長</p>
            <p>1500元/小時</p>
            </div>

            <div class="aboutServeContainer" data-aos="fade-left" data-aos-delay="300">
            <img :src="require('@/assets/abtServe/abtServe02.png')">
            <p>+剪輯時長</p>
            <p>1000元/30s</p>
            </div>

            <div class="aboutServeContainer" data-aos="fade-left" data-aos-delay="450">
            <img :src="require('@/assets/abtServe/abtServe03.png')">
            <p>毛片提供</p>
            <p>3900元</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.aboutServe {
  top: 0; left: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
}

.Tittle h1{
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 1.85em;
  font-family: 'NotoSansTC-Regular';
}

.aboutServeContnat {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  margin: 30px auto;
}

.aboutServeContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  text-align: start;
  background-color: rgba(256,256,256,.4);
  width: 55%;
  border-radius: 15px;
  padding: 10px 100px 10px 0px;
  margin:0 auto 25px;
}
.aboutServeContainer img {
  transform: translateX(-20px);
  width: 50px;
  height: 50px;
}
.aboutServeContainer p {
  width: 97px;
  font-family: 'NotoSansTC-Bold';
}

@media screen and (min-width: 1800px) {
  .aboutServeContainer {
    width: 38%;
  }
}

@media screen and (max-width: 545px) {
    .aboutServe {
        margin-top: 100px;
    }

    .Tittle {
        width: 88%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    .Tittle h1{
      font-size: 1.5em;
    }

    .aboutServeContnat {
        width: 88%;
    }
    .aboutServeContainer {
        gap: 20px;
        width: 88%;
        padding: 10px 0px 10px 0px;
    }

    .aboutServeContainer img {
        transform: translateX(-25px);
    }
}
</style>