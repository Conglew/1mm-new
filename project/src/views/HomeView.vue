<template >
  <div class="home">
    <div class="content-container">
      <HomeHeader></HomeHeader>
      <HomeCase></HomeCase>
      <HomeManage></HomeManage>
      <HomeAdv></HomeAdv>
      <HomeSubTittle></HomeSubTittle>
      <HomePlan></HomePlan>
      <ContactForm id="contactForm"></ContactForm>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/homeHeader.vue';
import HomeCase from '@/components/homeCase.vue';
import HomeManage from '@/components/homeManage.vue';
import HomeAdv from '@/components/homeAdv.vue';
import HomeSubTittle from '@/components/homeSubTittle.vue';
import HomePlan from '@/components/homePlan.vue';
import ContactForm from '@/components/contactForm.vue';

export default{
  name: "HomeView",
  data() {
    return{
    }
  },
  components: {
    HomeHeader,
    HomeCase,
    HomeManage,
    HomeAdv,
    HomeSubTittle,
    HomePlan,
    ContactForm,
  },
}
</script>

<style scoped>
.home {
  top: 0; left: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  background-image: url(@/assets/Home/homeBG.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>