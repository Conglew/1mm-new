<template>
  <div class="about">
    <aboutHeader></aboutHeader>
    <abooutPlan></abooutPlan>
    <aboutCompared></aboutCompared>
    <aboutSlc></aboutSlc>
    <aboutProcess></aboutProcess>
    <ContactForm id="contactForm"></ContactForm>
  </div>
</template>

<script>
import aboutHeader from '@/components/aboutHeader.vue';
import abooutPlan from '@/components/aboutPlan.vue';
import aboutCompared from '@/components/aboutCompared.vue';
import aboutSlc from '@/components/aboutAddSlc.vue'
import aboutProcess from '@/components/aboutProcess.vue';
import ContactForm from '@/components/contactForm.vue';

export default{
  name: "AboutView-A",
  data() {
    return{
    }
  },
  components: {
    aboutHeader,
    abooutPlan,
    aboutCompared,
    aboutSlc,
    aboutProcess,
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
  background-image: url(@/assets/Home/aboutABG.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
