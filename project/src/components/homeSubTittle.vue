<template>
    <div class="homeSubTittle">
        <div class="subTittleBlob"></div>
        <h1><strong style="color: #7741BD;">短影音打造全方位行銷體驗<br>建立深度客戶關係</strong></h1>
    </div>
</template>

<style scoped>

.homeSubTittle {
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 50vh;
    font-size: 1.5rem;
}

.homeSubTittle h1 {
    position: relative;
    z-index: 888;
}
.subTittleBlob {
    position: absolute;
    top: 442%;
    left: 0;
    width: 100vw;
    height: 70vh;
    pointer-events: none;
    background-image: url(@/assets/subTittleBlob.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 555;
}

@media screen and (min-width: 1800px) {
    .subTittleBlob {
        top: 415%;
    }
}

@media screen and (max-width: 545px) {
    .homeSubTittle {
        height: 50vh;
        font-size: 0.8rem;
    }
    .subTittleBlob {
        top: 585%;
        background-size: 150% 50%;
        display: none;
    }
}

@media screen and (max-width: 375px) {
    .homeSubTittle {
        height: 60vh;
    }
    .subTittleBlob {
        top: 690vh;
    }
}
</style>