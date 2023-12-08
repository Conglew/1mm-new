<template>
    <div class="homePlan">
        <h1>Who you are</h1>
        <div class="planContant">
            <router-link to="/aboutA" class="planContainer">
                <div class="imgContainer">
                  <img :src="require('@/assets/Gif/A.gif')" alt="GIF">
                </div>
                
                <h3>公司短影音需求</h3>
            </router-link>

            <router-link to="/aboutB" class="planContainer">
                <div class="imgContainer">
                  <img :src="require('@/assets/Gif/B.gif')" alt="GIF">
                </div>
              
                <h3>個人短影音服務方案</h3>
            </router-link >
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active h3 {
  text-decoration: none;
}
.homePlan {
    top: 0%; left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

.homePlan h1 {
    margin: 0 0 70px;
    font-size: 3rem;
    font-family: 'NotoSansTC-Medium';
}

.planContant {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px; margin-bottom: 50px;
    width: 100%;
    gap: 150px;
}

.imgContainer{
    padding: 40px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);
    }
}

.imgContainer img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    border: 3px solid rgb(255, 255, 255);
}

.planContainer h3 {
    margin-top: 50px;
    font-size: 1.5rem;
    text-decoration: none;
    color: #000;
}

@media screen and (min-width: 1800px) {
    .homePlan {
        height: 75vh;
    }
}

@media screen and (max-width: 545px) {
    .homePlan {
        margin-top: -200px;
        height: 140%;
    }
    .homePlan h1 {
        font-size: 28px;
        font-weight: 'NotoSansTC-Medium';
        margin: 0;
    }
    .planContant {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
    .planContainer h3 {
        margin-top: 35px;
    }
    .imgContainer img {
        width: 250px;
        height: 250px;
    }
    .imgContainer{
        padding: 30px;
    }
}

@media screen and (max-width: 375px) {
    .homePlan {
        height: 165vh;
    }
    .imgContainer{
        padding: 30px;
    }
}
</style>