<template>
  <div>
    <h4 v-scroll-reveal>{{ $t('gifts') }}</h4>
    <p v-scroll-reveal>{{ $t('description') }}</p>
    <p v-scroll-reveal>{{ $t('cardbox') }}</p>
    <p v-scroll-reveal>{{ $t('iban') }}</p>
    <h4 v-scroll-reveal>Questions?</h4>
    <ul v-scroll-reveal>
      <li>Kim: 078 717 54 55</li>
      <li>Julien: 079 431 99 31</li>
      <li>Japouz ({{ $t('bestman') }}): 079 462 13 71</li>
      <li>Arnaud ({{ $t('bestman') }}): 079 955 82 20</li>
      <li>Andrèa ({{ $t('maidofhonor') }}): 079 861 78 84</li>
      <li>Becky ({{ $t('mother') }}): 077 480 35 12</li>
      <li>Ruth ({{ $t('mother2') }}): 079 388 09 31</li>
    </ul>
    <p class="center" v-scroll-reveal>{{ $t('looking') }}<br />{{ $t('kimjulien') }}</p>
    <div v-scroll-reveal>
      <div class="footer-bg"></div>
    </div>
  </div>
</template>

<script>
import imageSizes from '@/mixins/imageSizes';

export default {
  name: 'Bottom',
  mixins: [imageSizes],
  mounted() {
    this.getBGImage('.footer-bg', 'header-edited.jpg');
  },
};
</script>

<style scoped lang="scss">
.center {
  text-align: center;
  margin-top: 50px;
}
.footer-bg {
  height: 650px;
  margin-top: 50px;
  background-size: cover;
  background-position: center center;
  transition: height 0.5s ease;
  @include lg {
    height: 500px;
  }
  @include md {
    height: 400px;
  }
  @include sm {
    height: 400px;
  }
  @include xs {
    height: 250px;
    margin-top: 60px;
  }
}
</style>

<i18n>
{
  "en": {
    "gifts": "Gifts",
    "description": "There is no gift registry. We would appreciate any contribution to the wedding/honeymoon costs.",
    "cardbox": "If you would like to offer a gift, a cardbox will be available at the wedding for you to put your kind wishes.",
    "iban": "You may also send to Kimberly Wälti, IBAN CH79 0483 5068 1373 0000 0",
    "bestman": "Best Man",
    "maidofhonor": "Maid of Honor",
    "mother": "Mother of the Bride",
    "mother2": "Mother of the Groom",
    "looking": "Looking forward to celebrating together!",
    "kimjulien": "Kim and Julien"
  },
  "fr": {
    "gifts": "Cadeaux",
    "description": "Il n’y a pas de liste de cadeaux. Nous serions reconnaissants pour toute participation financière au mariage/voyage de noce.",
    "cardbox": "Si vous souhaitez, il y aura une boîte pour y déposer vos voeux.",
    "iban": "Vous pouvez également envoyer à Kimberly Wälti, IBAN CH79 0483 5068 1373 0000 0",
    "bestman": "Témoin",
    "maidofhonor": "Témoin",
    "mother": "mère à Kim",
    "mother2": "mère à Julien",
    "looking": "Nous nous réjouissons de célébrer avec vous!",
    "kimjulien": "Kim et Julien"
  }
}
</i18n>
