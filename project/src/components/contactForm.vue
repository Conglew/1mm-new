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

        <div v-if="showSuccessMessage" class="successMsg">
            <img :src="require('@/assets/uiw_smile-o.png')">
            <p>收到您的表單囉！<br>將會有專人在1-3個工作天內聯絡您</p>
            <button @click="confirmButton">確認</button>
        </div>

        <button @click="sendEmail" class="sendButton">發送</button>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
        showSuccessMessage: false,
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

      if( this.from_name == '' || this.email_id == '' || this.phone_id == '' || this.address_id == '' || this.message == '') {
        alert('發送失敗: 請填寫完整資料～');
        return;
      }

      emailjs.send('service_py2zj7r', 'template_vl9yoiq', templateParams, 'QdHWY3k7nDNmNb-CS')
        .then((response) => {
            console.log('郵件發送成功：', response);
            // alert('發送成功。');
            this.showSuccessMessage = true;

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
    },
    confirmButton() {
        this.showSuccessMessage = !this.showSuccessMessage
    }
  }
};
</script>

<style scoped>
.Contact {
    top: 0%; left: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    padding-bottom: 50px;
    background-color: rgba(255, 255, 255, 0.4);
}

.tittle {
    padding-top: 110px;
    padding-left: 20%;
    text-align: start;
    margin-bottom: 60px;
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

.sendButton {
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

.successMsg {
    display: block;
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 0 0 0;
    width: 450px;
    height: 340px;
    background-color: #ffffff;
    border-radius: 15px;
    z-index: 995;
}

.successMsg img {
    width: 150px;
    height: 150px;
}

.successMsg button {
    margin-left: 0%; margin-top: 0;
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

@media screen and (max-width: 545px) {
    .Contact {
        height: 110%;
        padding-bottom: 50px;
    }
    .tittle {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        padding-left: 0;
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
    .sendButton{
        margin-left: 0;
        margin-top: 20px;
        justify-content: center;
        position: relative;
        left: 50%; 
        transform: translateX(-50%);
    }

    .successMsg {
        width: 290px;
    }
}

@media screen and (max-width: 375px) {
    .Contact {
        height: 145vh;
    }
}
</style>