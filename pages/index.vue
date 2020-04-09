<template>
  <div class="body">

    <div v-for="(item, index) in img"
        :key="index"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        >
      <img :src="getImg(item)" class="img-fluid mr-3" />
    </div>

    <ul class="list-unstyled row">
      <li
        v-for="(item, index) in img"
        :key="index"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        class="align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5"
      >
        <img :src="getImg(item)" class="img-fluid mr-3" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: []
    };
  },
  methods: {
    getImg(source) {
      return "~/assets/aboutDesign/1.png";
    }
  }
};
</script>

<style lang="css" scoped>
 .body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 100px;
 }
</style>