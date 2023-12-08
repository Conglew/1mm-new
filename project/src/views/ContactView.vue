<template>
  <div class="Contact">
      <h1 class="tittle">▎聯絡我們</h1>
      <div class="contactContant contactContant_pc">
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
                  <div class="inputConatainer">
                        <label>
                            <input type='radio' name='editingType' value="1" v-model="needNum" checked> 純拍攝
                        </label>
                        <label>
                            <input type='radio' name='editingType' value="2" v-model="needNum"> 純剪輯
                        </label>
                        <label>
                            <input type='radio' name='editingType' value="3" v-model="needNum"> 拍攝+剪輯
                        </label>
                </div>
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
                  <div class="customSelect slcFull">
                        <select id="address" name="address" v-model="address_id" required>
                            <option value="" disabled selected>請選擇地址/所在區域</option>
                            <option value="台北">台北</option>
                            <option value="新北">新北</option>
                            <option value="基隆">基隆</option>
                            <option value="基隆">桃園</option>
                            <option value="基隆">新竹</option>
                            <option value="基隆">苗栗</option>
                        </select>
                        <svg>
                            <polygon points="8,12 2,4 14,4 "></polygon>
                        </svg>
                    </div>
              </div>
          </div>
      </div>

      <div class="contactContant_ph">
        <div class="contactContant" style="flex-direction: column; gap: 0px;display: flex;row-gap: 8px;">
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
                <label for="email">電子郵件</label>
                <input type="email" id="email" name="email" required 
                    v-model="email_id"
                    placeholder="請輸入您的電子郵件">
            </div>

            <div class="container" style="margin-bottom: 30px;">
                <label for="address">地址</label>
                <div class="customSelect slcFull">
                    <select id="address" name="address" v-model="address_id" required style="background-color: #fff;font-size: 16px;">
                        <option value="" disabled selected>請選擇地址/所在區域</option>
                        <option value="台北">台北</option>
                        <option value="新北">新北</option>
                        <option value="基隆">基隆</option>
                        <option value="基隆">桃園</option>
                        <option value="基隆">新竹</option>
                        <option value="基隆">苗栗</option>
                    </select>
                    <svg>
                        <polygon points="8,12 2,4 14,4 "></polygon>
                    </svg>
                </div>
            </div>

            <div class="container">
                <label for="demand">您的需求</label>
                <div class="inputConatainer">
                    <label>
                        <input type='radio' name='editingType' value="1" v-model="needNum" checked> 純拍攝
                    </label>
                    <label>
                        <input type='radio' name='editingType' value="2" v-model="needNum"> 純剪輯
                    </label>
                    <label>
                        <input type='radio' name='editingType' value="3" v-model="needNum"> 拍攝+剪輯
                    </label>
                </div>
                <input type="text" id="demand" name="demand" required 
                    v-model="message"
                    placeholder="請輸入">
            </div>
        </div>
      </div>

        <div v-if="showSuccessMessage" class="successMsg">
            <img :src="require('@/assets/uiw_smile-o.png')">
            <p>收到您的表單囉！<br>將會有專人在1-3個工作天內聯絡您</p>
            <button @click="confirmButton">確認</button>
        </div>

      <button @click="sendEmail">發送</button>
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
            needNum: 1,
            needText: '純拍攝',
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
                need_Text: this.needText,
                message : this.message,
            };

            emailjs.send('service_py2zj7r', 'template_vl9yoiq', templateParams, 'QdHWY3k7nDNmNb-CS')
            .then((response) => {
                console.log('郵件發送成功：', response);
                alert('發送成功。');
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
    },
    computed: {
        getNeedText() {
            switch (parseInt(this.needNum)) {
                case 1:
                return '純拍攝';
                case 2:
                return '純剪輯';
                case 3:
                return '拍攝+剪輯';
                case 4:
                return '純拍攝';
                case 5:
                return '純剪輯';
                case 6:
                return '拍攝+剪輯';
                default:
                return '';
            }
        },
    },
    watch: {
        getNeedText(newVal) {
        this.needText = newVal; // 监听 getNeedText 的变化并更新 needText
        },
    },
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
.contactContant_ph {
    display: none;
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
.customSelect {
  position: relative;
}
select {
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /*  other styles for aesthetics */
    font-size: 14px;
    padding: 8px;
    width: 400px; height: 50px;
    border: .5px solid #000000;
    color: #000;
    border-radius: 8px;
    box-sizing: border-box;
}
svg {
    position: absolute;
    top: 185%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    fill: #000000;
    pointer-events: none;
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

.inputConatainer {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
}
.inputConatainer label {
    font-size: 16px;
    color: #989898;
}
.inputConatainer label::after {
  content: " ";
}
.inputConatainer input{
    width: 10px;
    height: 15px;
    transform: scale(2);
    margin-right: 5px;
    margin-bottom: 0;
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
    .contactContant_ph {
        display: flex;
    }
    .contactContant_pc {
        display: none;
    }

    .tittle {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        padding-left: 10%;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .contactContant {
        flex-direction: column;
        align-items: center;
        padding: 0px 10%;
        gap: 0;
    }
    .contactContant label {
        font-size: 18px;
    }
    .contactContant input {
        width: 350px;
    }
    .inputConatainer {
        width: 100%;
    }
    .inputConatainer label {
        font-size: 18px;
    }
    .inputConatainer input{
        width: 10px;
        height: 10px;
        transform: scale(1.2);
    }
    .Contact button {
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
    .container {
        width: 100%;
    }
    .customSelect {
        width: 100%;
    }
    select {
        width: 100%;
    }
}

@media screen and (max-width: 375px) {
    .Contact {
        height: 155vh;
    }
}
</style>
