<template>
  <div>
    <div class="smiles">
      <img :class="{ loading: loading }" src="https://res.cloudinary.com/dljgq8ek2/image/upload/w_500,f_auto,dpr_2/kim-julien/smile-edited.jpg" alt="kim and julien" />
    </div>
    <h1 :class="{ loading: initialLoad }">Kim & Julien</h1>
    <h3 class="subtitle" :class="{ loading: initialLoad }">{{ $t('married') }}</h3>
    <h3 class="date" :class="{ loading: initialLoad }">{{ $t('thedate') }}</h3>
    <p class="change-lang" :class="{ loading: initialLoad }">
      <a href="javascript:void(0)" @click="switchLang('fr')" :class="{ active: $i18n.locale === 'fr' }">Français</a>
      <a href="javascript:void(0)" @click="switchLang('en')" :class="{ active: $i18n.locale === 'en' }">English</a>
    </p>
    <p :class="{ loading: initialLoad }">{{ $t('introText') }}</p>
    <p :class="{ loading: initialLoad }">{{ $t('introText2') }}</p>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap';

export default {
  name: 'Intro',
  data() {
    return {
      langs: ['en', 'fr'],
      loading: true,
      initialLoad: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    setTimeout(() => {
      this.doFirstAnimation();
    }, 1000);
  },
  methods: {
    doFirstAnimation() {
      this.initialLoad = false;
    },
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
img,
h1,
h3,
p {
  transition: opacity 1s ease;
}
.loading {
  opacity: 0;
}
.smiles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  width: 300px;
  border-radius: 50%;
  margin: 50px auto 100px auto;
  @include xs {
    width: 200px;
    margin: 50px auto 70px auto;
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
  text-transform: none;
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
p {
  text-align: center;
}
</style>

<i18n>
{
  "en": {
    "married": "are getting married!",
    "thedate": "July 3rd, 2021",
    "introText": "Kimberly and Julien met in 2003 at school. They became friends and shared many great moments. On February 21st 2015 their love story started. Now they are getting married and they will begin the next chapter of their lives! They are looking forward to celebrating their love with you - family and friends.",
    "introText2": "So please come join them on this wonderful day!"
  },
  "fr": {
    "married": "se marient!",
    "thedate": "03.07.2021",
    "introText": "Kimberly et Julien se sont rencontrés au Gymnase de Bulle en 2003. Leurs groupes de copains fusionnent et ils deviennent amis. Le 21 février 2015, ils débutent leur histoire d’amour. Aujourd’hui ils se marient et ils vont ouvrir un nouveau chapitre dans leurs vies! Ils se réjouissent de célébrer leur amour avec vous - famille et amis.",
    "introText2": "Alors venez célébrer cette journée magique avec eux!"
  }
}
</i18n>
