<template>
  <div id="app">
    <div class="wrapper">
      <a href="https://photos.app.goo.gl/MHjXnHdrkJzq3qqJ9">
        <div class="google-photos">
          <img src="https://res.cloudinary.com/dljgq8ek2/image/upload/w_500,f_auto,dpr_2/kim-julien/wedding-pic.jpg" alt="wedding pictures" />
          <div class="label">
            <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg">
              <g id="f4748239-bdea-4aa0-9d39-98488d7cccce" data-name="Link-External">
                <path
                  d="m27 30h-24a1 1 0 0 1 -1-1v-24a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v22h22v-15a1 1 0 0 1 2 0v16a1 1 0 0 1 -1 1zm2-28h-6a1 1 0 0 0 0 2h3.58l-11.29 11.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l11.29-11.3v3.64a1 1 0 0 0 2 0v-6.05a1 1 0 0 0 -1-1z"
                />
              </g>
            </svg>
          </div>
          <Intro />
        </div>
      </a>
    </div>
    <div class="bg-image"></div>
    <div id="mediaqueries"></div>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import imageSizes from '@/mixins/imageSizes';

export default {
  name: 'app',
  mixins: [imageSizes],
  components: {
    Intro,
  },
  mounted() {
    this.getBGImage('.bg-image', 'flowers.jpg');
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
.bg-image {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
}
.wrapper {
  @include lg {
    max-width: 85%;
  }
  @include md {
    max-width: 90%;
    padding: 40px 60px;
  }
  @include sm {
    padding: 20px 0px;
  }
}
.google-photos {
  padding: 30px;
  background-color: white;
  img {
    height: 500px;
    width: 500px;
    transition: all 0.3s ease;
    @include sm {
      width: 100%;
      height: auto;
    }
  }
}
a {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: block;
  transform: rotate(-2deg);
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    transform: rotate(2deg) scale(1.1);
    img {
      filter: sepia(0.3);
    }
    &::before {
      animation: shine 0.75s;
    }
    .label {
      transform: scale(1.1);
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
    transform: skewX(-25deg);
  }
  @include sm {
    transform: rotate(0);
  }
  @include xs {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  }
}
.label {
  position: absolute;
  bottom: 120px;
  right: 45px;
  transition: all 0.3s ease;
  svg {
    width: 40px;
    height: 40px;
    path {
      fill: white;
    }
  }
  @include sm {
    bottom: 170px;
  }
  @include xs {
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
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
  display: none;
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
