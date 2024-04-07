<template>
  <div class="about">
    <aboutHeader_B></aboutHeader_B>
    <aboutPlan_B></aboutPlan_B>
    <aboutCustom></aboutCustom>
    <!-- <aboutCompared_B></aboutCompared_B> -->
    <!-- <aboutServe></aboutServe> -->
    <aboutProcess_B></aboutProcess_B>
    <ContactForm id="contactForm"></ContactForm>
  </div>
</template>

<script>
import aboutHeader_B from '@/components/aboutHeader_B.vue';
import aboutPlan_B from '@/components/aboutPlan_B.vue';
import aboutCustom from '@/components/aboutCustom.vue'
import aboutProcess_B from '@/components/aboutProcess_B.vue';
// import aboutServe from '@/components/aboutServe.vue';
// import aboutCompared_B from '@/components/aboutCompared_B.vue';
import ContactForm from '@/components/contactForm.vue';

export default{
  name: "AboutView-B",
  data() {
    return{
    }
  },
  components: {
    aboutHeader_B,
    aboutPlan_B,
    aboutProcess_B,
    aboutCustom,
    // aboutServe,
    // aboutCompared_B,
    ContactForm,
  },
}
</script>

<style scoped>
.about {
  top: 0; left: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  background-image: url(@/assets/Home/aboutBBG.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
