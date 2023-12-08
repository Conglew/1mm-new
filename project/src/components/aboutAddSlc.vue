<template>
    <div class="aboutSlc">
        <div class="Tittle">
            <h2>行銷服務加選</h2>
            <p>精準廣告曝光，以短影音向潛在用戶溝通，達到最大效益</p>
        </div>

        <div class="aboutSlcContant">
            <div class="aboutSlcContainer" data-aos="fade-left" data-aos-delay="150">
              <h3 class="subTittle">小試身手</h3>
              <p>以 <span class="highlight">30,000/季</span> 預算達成 <span class="highlight">700,000</span> 次以上曝光引起興趣，導流轉換!</p>
              
              <div class="miniTag">
                  <p> &#10003; 專屬行銷顧問</p>
                  <p> &#10003; 周報表提供</p>
                  <p> &#10003; 月結案會議</p>
              </div>
            </div>

            <div class="aboutSlcContainer" data-aos="fade-left" data-aos-delay="300">
            <h3 class="subTittle">大展拳腳</h3>
            <p>以 <span class="highlight">100,000/季</span> 預算達成 <span class="highlight">2,400,000</span> 次以上曝光，強力曝光，增加轉換!</p>
            
            <div class="miniTag">
                <p> &#10003; 專屬行銷顧問</p>
                <p> &#10003; 周報表提供</p>
                <p> &#10003; 月結案會議</p>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.aboutSlc {
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
}

.Tittle {
    margin-top: 100px;
    margin-bottom: 75px;
}

.Tittle h2 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
    margin-bottom: 0px;
}

.aboutSlcContant {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
}

.aboutSlcContainer {
    text-align: start;
    margin-bottom: 35px;
    padding: 20px;
    cursor: pointer;
}

.aboutSlcContainer:hover {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
}

.aboutSlcContainer:hover .miniTag {
    justify-content: center;
}

.aboutSlcContainer p {
    font-family: 'NotoSansTC-Regular';
}

.highlight {
    font-family: 'NotoSansTC-Medium';
    font-weight: bold;
}

.subTittle {
    margin: 0 0 25px;
    font-size: 2em;
    color: #7741BD;
    font-family: 'NotoSansTC-Medium';
}

.miniTag {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
}

@media screen and (max-width: 545px) {
  .aboutSlc {
    margin-top: 100px;
  }
  .Tittle {
    margin-top: 175px;
    padding: 0 50px;
  }

  .aboutSlcContant {
    width: 80%;
  }

  .miniTag {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .aboutSlcContainer {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
  }
  .aboutSlcContainer p {
    margin: 10px 0;
  }

  .aboutSlcContainer:hover {
    text-align: start;
    background-color: none;
    border-radius: 25px;
  }
  .Tittle {
    margin-bottom: 50px;
  }
  .Tittle h2 {
    font-size: 28px;
  }
  .Tittle p {
    font-size: 15px;
    font-family: 'NotoSansTC-Light';
  }
}
</style>