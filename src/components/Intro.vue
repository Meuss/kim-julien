<template>
  <div>
    <div v-scroll-reveal>
      <div class="header-bg"></div>
    </div>
    <h1 v-scroll-reveal>Kim & Julien</h1>
    <h3 v-scroll-reveal class="subtitle">{{ $t('married') }}</h3>
    <h3 v-scroll-reveal class="date">06.06.2020</h3>
    <p class="change-lang" v-scroll-reveal>
      <a href="javascript:void(0)" @click="switchLang('fr')" :class="{ active: $i18n.locale === 'fr' }">Français</a>
      <a href="javascript:void(0)" @click="switchLang('en')" :class="{ active: $i18n.locale === 'en' }">English</a>
    </p>
    <p v-scroll-reveal>{{ $t('introText') }}</p>
    <p v-scroll-reveal>{{ $t('introText2') }}</p>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap';
import imageSizes from '@/mixins/imageSizes';

export default {
  name: 'Intro',
  mixins: [imageSizes],
  data() {
    return {
      langs: ['en', 'fr'],
    };
  },
  mounted() {
    this.getHeaderImage('.header-bg', 'header-edited.jpg');
  },
  methods: {
    switchLang(lang) {
      const tl = new TimelineLite();
      const that = this;
      const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul');
      tl.to(texts, 0.5, { color: 'white' }, 0);
      tl.add(function() {
        that.doSwap(lang);
      }, 0.5);
      tl.to(texts, 0.5, { color: '#1e4d29' }, 0.7);
    },
    doSwap(lang) {
      this.$root.$i18n.locale = lang;
    },
  },
  computed: {
    currentlang() {
      return this.$root.$i18n.locale;
    },
  },
};
</script>

<style scoped lang="scss">
.header-bg {
  height: 75vh;
  margin-bottom: 100px;
  background-size: cover;
  background-position: center center;
  @include md {
    height: 500px;
  }
  @include sm {
    height: 400px;
  }
  @include xs {
    height: 300px;
  }
}
h1,
h3 {
  color: $darkgreen;
}
h3 {
  text-align: center;
  text-transform: uppercase;
}
.subtitle {
  font-size: 33px;
  margin-bottom: 0px;
  @include sm {
    font-size: 30px;
  }
  @include xs {
    font-size: 21px;
  }
}
.date {
  font-size: 55px;
  @include sm {
    font-size: 45px;
  }
  @include xs {
    font-size: 40px;
  }
}
.change-lang {
  text-align: center;
  .active {
    display: none;
  }
}
</style>

<i18n>
{
  "en": {
    "married": "are getting married!",
    "introText": "Kimberly and Julien met in 2003 at school. They randomly started saying “hi” to each other for no reason. Later, they became friends and shared many great moments. On February 21st 2015 their love story started. Now they are getting married and they will begin the next chapter of their lives! They are looking forward to celebrating their love with you - family and friends.",
    "introText2": "So please come join them on this wonderful day!"
  },
  "fr": {
    "married": "se marient!",
    "introText": "Kimberly et Julien se sont rencontrés au Gymnase de Bulle en 2003. Un jour, ils ont commencé à se dire “salut” dans les couloirs, sans aucune raison valable, juste parce que. Plus tard, leurs groupes d’amis fusionnent et ils deviennent amis. Le 21 février 2015, ils débutent leur histoire d’amour. Aujourd’hui ils se marient et ils vont ouvrir un nouveau chapitre dans leurs vies! Ils se réjouissent de célébrer leur amour avec vous - famille et amis.",
    "introText2": "Alors venez célébrer cette journée magique avec eux!"
  }
}
</i18n>
