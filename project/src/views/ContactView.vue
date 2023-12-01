<template>
  <div class="Contact">
      <h1 class="tittle">聯絡我們</h1>
      <div class="contactContant">
          <div class="leftContainer">
              <div class="container">
                  <label for="name">您的名字</label>
                  <input type="text" id="name" name="name" required
                      v-model="from_name"
                      placeholder="請輸入您的中/英文姓名">
              </div>

              <div class="container">
                  <label for="phone">電話</label>
                  <input type="text" id="phone" name="phone" required 
                      v-model="phone_id"
                      placeholder="請輸入您的電話">
              </div>

              <div class="container">
                  <label for="demand">您的需求</label>
                  <input type="text" id="demand" name="demand" required 
                      v-model="message"
                      placeholder="請輸入">
              </div>
          </div>

          <div class="rightContainer">
              <div class="container">
                  <label for="email">電子郵件</label>
                  <input type="email" id="email" name="email" required 
                      v-model="email_id"
                      placeholder="請輸入您的電子郵件">
              </div>

              <div class="container">
                  <label for="address">地址</label>
                  <input type="text" id="address" name="address" required 
                      v-model="address_id"
                      placeholder="請輸入您的地址/所在區域">
              </div>
          </div>
      </div>
      <button @click="sendEmail">發送</button>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
data() {
  return {
      from_name: '',
      email_id: '',
      phone_id: '',
      address_id: '',
      message: '',
  };
},
methods: {
  sendEmail() {
    const templateParams = {
      from_name : this.from_name,
      email_id : this.email_id,
      phone_id : this.phone_id,
      address_id : this.address_id,
      message : this.message,
    };

    emailjs.send('service_py2zj7r', 'template_vl9yoiq', templateParams, 'QdHWY3k7nDNmNb-CS')
      .then((response) => {
        console.log('郵件發送成功：', response);
        alert('發送成功。');

        this.from_name = '';
        this.email_id = '';
        this.phone_id = '';
        this.address_id = '';
        this.message = '';
      })
      .catch((error) => {
        console.error('郵件發送失敗：', error);
        alert('發送失敗', error);
      });
  }
}
};
</script>

<style scoped>
.Contact {
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(@/assets/Home/homeBG.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.tittle {
    margin-top: 0;
    padding-top: 130px;
    padding-left: 20%;
    text-align: start;
    margin-bottom: 50px;
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}
.contactContant {
    display: flex;
    justify-content: space-between;
    padding: 0px 20%;
    gap: 150px;
}

.leftContainer,.rightContainer ,.container {
    display: flex;
    flex-direction: column;
    align-items: self-start;
}

.contactContant label {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.contactContant input {
    font-size: 14px;
    padding: 8px;
    width: 400px; height: 50px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: .5px solid #000000;
    box-sizing: border-box;
}

.contactContant label::after {
  content: " *";
  color: red;
}

.contactContant .container label::after {
  margin-left: 5px;
}

.leftContainer .container input::placeholder,
.rightContainer .container input::placeholder {
    font-size: 14px;
}

#demand {
    height: 100px;
    align-self: flex-start;
    text-align: left;
}

.Contact button {
    display: flex;
    justify-content: flex-start;
    margin-left: 20%; margin-top: 50px;
    background-color: #000;
    color: white;
    border: 2px solid #000000;
    font-size: 1rem;
    font-weight: bold;  
    padding: 10px 50px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

@media screen and (min-width: 1800px) {
    .Contact {
        height: 85vh;
    }
}

@media screen and (max-width: 545px) {
    .Contact {
        height: 100%;
        padding-bottom: 65px;
    }
    .tittle {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        padding-top: 150px;
        padding-left: 20px;
    }
    .contactContant {
        flex-direction: column;
        align-items: center;
        padding: 0px 10%;
        gap: 0;
    }
    .contactContant input {
        width: 350px;
    }
    .Contact button {
        margin-left: 0;
        margin-top: 20px;
        justify-content: center;
        position: relative;
        left: 50%; 
        transform: translateX(-50%);
    }
}

@media screen and (max-width: 375px) {
    .Contact {
        height: 155vh;
    }
}
</style>
