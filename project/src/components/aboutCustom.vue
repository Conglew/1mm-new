<template>
    <div class="aboutCustom">
        <div class="Tittle">
            <h1>您出價 我來拍</h1>
        </div>

        <div class="Content">
            <img :src="require('@/assets/aboutCustom.png')">
            <div class="Container">
                <div class="processContainer">
                    <div class="blog"><h3>您提出的預算</h3></div>
                    <p> </p>
                    <div class="blog"><h3>{{ isMobile ? 'OMM評估後提供方案' : 'OMM評估' }}</h3></div>
                    <p> </p>
                    <div class="blog"><h3>攝影執行</h3></div>
                </div>
                <div class="textContainer">
                    <img :src="isMobile ? require('@/assets/aboutCunstomBorder_ph.png') : require('@/assets/aboutCunstomBorder.png')" alt="Custom Border">
                    <button @click="scrollToHomeForm">立即聯繫</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return{
        isMobile: false,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 545;
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
.aboutCustom {
    width: 100%;
    height: 150vh;
}
.aboutCustom .Tittle {
    margin-bottom: 50px;
}
.aboutCustom .Tittle h1{
    font-size: 48px;
    font-family: 'NotoSansTC-Regular';
}
.Content {
    width: 100%;
    position: relative;
}
.Content img {
    width: 1040px;
    height: 472px;
}
.Content .Container {
    width: 100%;
}
.Content .Container .processContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    & .blog {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        width: 206px;
        height: 63px;
        background-color: #FFE395;
        color: #7741BD;
        box-sizing: border-box;
        border: 2px solid #D8C3E7;

        & h3 {
            font-size: 24px;
            font-family: 'NotoSansTC-Regular';
        }
    }
    & p::before {
        content: "→";
        font-size: 34px;
    }
}
.Content .Container .textContainer {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
        width: 1040px;
        height: 189px;
    }
    & button {
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
}

@media screen and (max-width: 545px) {
    .aboutCustom {
        height: 125vh;
    }
    .aboutCustom .Tittle h1 {
        font-size: 28px;
    }
    .Content img {
        width: 400px;
        height: 181.54px;
    }
    .Content .Container {
        margin-top: 25px;
    }
    .Content .Container .processContainer {
        flex-direction: column;
        gap: 0px;
        /* background-color: #D8C3E7; */

        & .blog {
            width: 200px;
            height: 50px;
            & h3 {
                font-size: 15px;
            }
        }
        & p {
            margin: 5px 0;
        }
        & p::before {
            content: "↓";
            font-size: 24px;
        }
    }
    .Content .Container .textContainer {
        & img {
            width: 345px;
            height: 180px;
        }
        & button {
            width: 120px;
            height: 40px;
        }
    }
}
@media screen and (max-width: 375px) {
    .aboutCustom {
        height: 140vh;
    }
}
</style>
