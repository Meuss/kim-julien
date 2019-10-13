<template>
  <div id="app">
    <div class="wrapper">
      <Intro />
      <Wedding />
      <Reception />
      <Bottom />
    </div>
    <div class="bg-image"></div>
    <div id="mediaqueries"></div>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Wedding from './components/Wedding.vue';
import Reception from './components/Reception.vue';
import Bottom from './components/Bottom.vue';
import imageSizes from '@/mixins/imageSizes';

export default {
  name: 'app',
  mixins: [imageSizes],
  components: {
    Intro,
    Wedding,
    Reception,
    Bottom,
  },
  mounted() {
    this.getHeaderImage('.bg-image', 'flowers.jpg');
  },
};
</script>

<style lang="scss">
@import '/styles/_resets.scss';
@import '/styles/_typo.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  position: relative;
}
.bg-image {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  @include sm {
    display: none;
  }
}
.wrapper {
  max-width: 1240px;
  padding: 40px 100px;
  margin: 0 auto 50px auto;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  @include lg {
    max-width: 85%;
  }
  @include sm {
    max-width: none;
    padding: 20px;
  }
}
.allsaints-img,
.colombette-img {
  height: 300px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 30px;
}
.infos {
  display: flex;
  justify-content: space-between;
}
#mediaqueries {
  pointer-events: none;
  position: fixed;
  bottom: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  display: flex;
  font-size: 12px;
  line-height: 12px;
  padding: 5px;
  color: black;
  background-color: lightpink;
  opacity: 0.7;
  // display: none;
  &::after {
    @include xxl() {
      content: 'xxl > 1921';
    }
    @include xl() {
      content: 'xl <= 1920';
    }
    @include lg() {
      content: 'lg <= 1440';
    }
    @include md() {
      content: 'md <= 1023';
    }
    @include sm() {
      content: 'sm <= 768';
    }
    @include xs() {
      content: 'xs <= 480';
    }
  }
}
</style>
