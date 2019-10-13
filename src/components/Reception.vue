<template>
  <div>
    <h2 v-scroll-reveal>{{ $t('reception') }}</h2>
    <h5 v-scroll-reveal>{{ $t('upon') }}</h5>
    <Flowers v-scroll-reveal />
    <div v-scroll-reveal>
      <div class="colombette-img"></div>
    </div>
    <div v-scroll-reveal>
      <p>{{ $t('car') }}<br />{{ $t('ride') }}</p>
      <div class="infos">
        <p>
          @Ô Colombettes<br />
          Rte des Colombettes 480<br />
          1628 Vuadens
        </p>
        <p class="parking">{{ $t('available') }}</p>
      </div>
      <p>
        <a
          href="https://www.google.com/maps/place/%C3%94+Colombettes/@46.6096824,6.9912919,17z/data=!4m13!1m7!3m6!1s0x478e87f7a2420deb:0x7fd807b279fe4d7f!2sLes+Colombettes,+1628+Vuadens!3b1!8m2!3d46.6096824!4d6.9934806!3m4!1s0x0:0x30b1353ca4fd8316!8m2!3d46.6106358!4d6.9933819"
          target="_blank"
          >Google maps</a
        >
      </p>
    </div>

    <p v-scroll-reveal>{{ $t('description') }}</p>

    <p v-scroll-reveal>{{ $t('hotels') }}</p>

    <ul v-scroll-reveal>
      <li>
        <a
          href="https://www.google.com/maps/place/Wego+Hotel/@46.6187461,7.0221613,15z/data=!4m18!1m9!3m8!1s0x0:0x273edf4c2fca68f5!2sWego+Hotel!5m2!4m1!1i2!8m2!3d46.6187461!4d7.0221613!3m7!1s0x0:0x273edf4c2fca68f5!5m2!4m1!1i2!8m2!3d46.6187461!4d7.0221613"
          target="_blank"
          >Hotel Wego</a
        >
        (30 min {{ $t('onfoot') }})
      </li>
      <li>
        <a
          href="https://www.google.com/maps/place/Croix+Blanche/@46.6169142,7.0166018,17z/data=!3m1!4b1!4m8!3m7!1s0x478e880042e26e7f:0x95c2fea3adf76481!5m2!4m1!1i2!8m2!3d46.6169142!4d7.0187905"
          target="_blank"
          >Croix Blanche</a
        >
        (25 min {{ $t('onfoot') }})
      </li>
      <li>
        <a
          href="https://www.google.com/maps/place/Hotel+ibis+Bulle+la+Gruyere/@46.62275,7.0436814,15z/data=!4m15!1m6!2m5!1shotel+ibis!5m3!5m2!4m1!1i2!3m7!1s0x478e628cde4f0ba9:0xa2c00e3c6ea33669!5m2!4m1!1i2!8m2!3d46.623982!4d7.046126"
          target="_blank"
          >Hotel Ibis</a
        >
        (10 min taxi)
      </li>
      <li>
        <a
          href="https://www.google.com/maps/place/De+La+Tour/@46.6079845,7.0649375,17z/data=!4m18!1m9!3m8!1s0x478e6277cefb0805:0x16b8462f210c142f!2sDe+La+Tour!5m2!4m1!1i2!8m2!3d46.6079477!4d7.0667078!3m7!1s0x478e6277cefb0805:0x16b8462f210c142f!5m2!4m1!1i2!8m2!3d46.6079477!4d7.0667078"
          target="_blank"
          >Hotel de la Tour</a
        >
        (10 min taxi)
      </li>
    </ul>
    <p v-scroll-reveal>
      {{ $t('drinkanddrive') }}
      <a
        href="https://www.google.com/search?sxsrf=ACYBGNSrS3Z1iKVUyXopQP07FjZJ38s3zg:1570975583247&q=taxis+bulle&npsic=0&rflfq=1&rlha=0&rllag=46614112,7049564,914&tbm=lcl&ved=2ahUKEwiFidyMtJnlAhWHb1AKHaZOCHcQjGp6BAgKEDg&tbs=lrf:!2m4!1e17!4m2!17m1!1e2!2m1!1e2!2m1!1e16!3sIAE,lf:1,lf_ui:1&rldoc=1#rlfi=hd:;si:;mv:[[46.66564928661431,7.166394124267526],[46.57120636521009,6.908902058837839]]"
        target="_blank"
        >{{ $t('taxi') }}</a
      >.
    </p>
    <p v-scroll-reveal>
      {{ $t('pictures') }} <a href="https://www.dropbox.com/request/ozAMX4C6cXd6eg6CUhUA">{{ $t('here') }}</a
      >.
    </p>
  </div>
</template>

<script>
import imageSizes from '@/mixins/imageSizes';
import Flowers from '@/components/Flowers';

export default {
  name: 'Reception',
  mixins: [imageSizes],
  components: {
    Flowers,
  },
  data() {
    return {};
  },
  mounted() {
    this.getHeaderImage('.colombette-img', 'colombettes.jpg');
  },
};
</script>

<style scoped lang="scss">
h5 {
  margin-bottom: 0;
  color: $green;
}
</style>

<i18n>
{
  "en": {
    "reception": "Reception",
    "upon": "Upon invitation",
    "car": "~30 min by car from Vevey",
    "ride": "If you need a ride, please contact us!",
    "available": "available",
    "description": "We will enjoy a meal and a fun evening together. Feel free to wear comfortable clothes, so you can party! The restaurant closes at 3 AM and there are unfortunately no rooms on site. You will need to organize your sleeping arrangements/transportation home prior to the wedding.",
    "hotels": "Here are the available hotels closeby:",
    "onfoot": "on foot",
    "drinkanddrive": "Do not drink and drive! Eat, drink and be merry and then",
    "taxi": "call a taxi",
    "pictures": "We want to remember this day, so please share your pictures (even the crazy ones) with us. Upload them",
    "here": "here"
    },
  "fr": {
    "reception": "Réception",
    "upon": "Sur invitation",
    "car": "~30 min depuis Vevey",
    "ride": "Si vous avez besoin d'un lift, contactez-nous.",
    "available": "dispo sur place",
    "description": "Nous profiterons d’un repas et d’une soirée fun ensemble. Au niveau vestimentaire, mettez-vous à l’aise pour pouvoir danser! Le restaurant ferme à 3h du matin et il n’y a pas de chambres sur place. Il faudra organiser votre hébergement et transport avant le mariage.",
    "hotels": "Voici les hotels les plus proches:",
    "onfoot": "à pied",
    "drinkanddrive": "Pas de risque, pas d’accident. Ne prenez pas le volant et",
    "taxi": "appelez un taxi",
    "pictures": "On veut un max de souvenirs de cette journée alors vous pouvez partager vos photos (même les photos un peu folles/ratées) avec",
    "here": "ce lien"
  }
}
</i18n>
