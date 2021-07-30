<template>
  <div>
    <h2 v-scroll-reveal>{{ $t('reception') }}</h2>
    <!-- <div class="warning">
      <h2 style="margin-top: 0;">{{ $t('to-be-confirmed') }}</h2>
    </div> -->
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
      <p class="gmap">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 9270.284 9270.284"
          enable-background="new 0 0 9270.284 9270.284"
        >
          <g>
            <path
              fill="#0F9D58"
              d="M7923.886,915.992c-66.217-22.072-132.434-33.108-198.649-33.108H662.163
			      C297.973,882.884,0,1180.858,0,1545.047v7063.074c0,66.216,11.036,132.432,33.108,198.649L7923.886,915.992z"
            />
            <path
              fill="#4285F4"
              d="M4193.7,5076.584L463.514,9237.176c66.216,22.072,132.433,33.108,198.649,33.108h7063.074
			      c66.216,0,132.432-11.036,198.649-33.108L4193.7,5076.584z"
            />
            <path
              fill="#E1E1E1"
              d="M4193.7,5076.584l4160.591,3730.187c22.072-66.217,33.108-121.396,33.108-198.649V1545.047
			      c0-66.216-11.035-132.433-33.108-198.649L4193.7,5076.584z"
            />
            <path
              opacity="0.5"
              fill="#C2C2C2"
              enable-background="new    "
              d="M4193.7,5076.584l4160.591,3730.187
			      c22.072-66.217,33.108-121.396,33.108-198.649V1545.047c0-66.216-11.035-132.433-33.108-198.649L4193.7,5076.584z"
            />
            <path
              fill="#F1F1F1"
              d="M8387.399,8608.121L4414.421,4635.142l-772.524,662.163l3972.979,3972.979h110.361
			      C8089.427,9270.284,8387.399,8972.311,8387.399,8608.121z"
            />
            <path
              fill="#FFEB3B"
              d="M7725.237,882.884L0,8608.121c0,364.189,297.973,662.163,662.163,662.163h110.361l7614.876-7614.876
			      v-110.36C8387.399,1180.858,8089.427,882.884,7725.237,882.884z"
            />
            <path
              opacity="0.5"
              fill="#FFCD40"
              enable-background="new    "
              d="M7725.237,882.884L0,8608.121
            c0,364.189,297.973,662.163,662.163,662.163h110.361l7614.876-7614.876v-110.36
            C8387.399,1180.858,8089.427,882.884,7725.237,882.884z"
            />
            <path
              fill="#FFFFFF"
              fill-opacity="0.2"
              d="M7725.237,882.884H662.163C297.973,882.884,0,1180.858,0,1545.047v55.18
            c0-364.19,297.973-662.163,662.163-662.163h7063.074c364.19,0,662.163,297.973,662.163,662.163v-55.18
            C8387.399,1180.858,8089.427,882.884,7725.237,882.884z"
            />
            <path
              fill="#263238"
              fill-opacity="0.1"
              d="M7725.237,9215.104H662.163C297.973,9215.104,0,8917.131,0,8552.94v55.181
            c0,364.189,297.973,662.163,662.163,662.163h7063.074c364.19,0,662.163-297.974,662.163-662.163v-55.181
            C8387.399,8917.131,8089.427,9215.104,7725.237,9215.104z"
            />
            <path
              fill="#EEEEEE"
              d="M1876.129,2538.292v474.55h651.127c-55.18,275.901-297.973,485.586-651.127,485.586
            c-397.298,0-717.343-331.082-717.343-728.379s320.045-728.38,717.343-728.38c176.577,0,342.118,66.216,463.514,176.577
            l353.154-342.118c-209.685-209.685-485.586-331.082-816.668-331.082c-673.199,0-1213.966,540.767-1213.966,1213.966
            s540.767,1213.966,1213.966,1213.966c695.271,0,1169.822-496.622,1169.822-1191.894c0-88.288-11.036-165.541-22.072-242.793
            H1876.129z"
            />
            <g>
              <path
                fill="#DB4437"
                d="M7063.074,0c-1213.966,0-2207.21,982.209-2207.21,2207.21c0,1666.444,1854.057,2527.256,2074.777,4900.007
              c11.036,66.216,66.216,121.396,132.433,121.396c66.216,0,121.396-55.18,132.432-121.396
              c220.721-2372.751,2074.778-3233.563,2074.778-4900.007C9270.284,982.209,8288.075,0,7063.074,0z"
              />
              <circle fill="#7B231E" cx="7063.074" cy="2207.21" r="772.524" />
              <path
                fill="#FFFFFF"
                fill-opacity="0.2"
                d="M7063.074,55.18c1202.93,0,2185.138,971.173,2207.21,2174.103
              c0-11.036,0-11.036,0-22.072C9270.284,982.209,8288.075,0,7063.074,0s-2207.21,982.209-2207.21,2207.21
              c0,11.036,0,11.036,0,22.072C4877.935,1026.353,5849.108,55.18,7063.074,55.18z"
              />
              <path
                fill="#3E2723"
                fill-opacity="0.2"
                d="M7195.506,7052.038c-11.036,66.216-66.216,121.396-132.432,121.396
              c-66.216,0-121.396-55.18-132.433-121.396C6709.92,4690.322,4866.899,3818.474,4855.863,2174.102c0,11.036,0,22.072,0,33.108
              c0,1666.444,1854.057,2527.256,2074.777,4900.007c11.036,66.216,66.216,121.396,132.433,121.396
              c66.216,0,121.396-55.18,132.432-121.396c220.721-2372.751,2074.778-3233.563,2074.778-4900.007c0-11.036,0-22.072,0-33.108
              C9248.212,3818.474,7416.227,4690.322,7195.506,7052.038z"
              />
            </g>

            <radialGradient id="SVGID_1_" cx="230.1017" cy="7220.6421" r="11305.9941" gradientTransform="matrix(1 0 0 -1 0 8286.2842)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1" />
              <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
            </radialGradient>
            <path
              fill="url(#SVGID_1_)"
              d="M7063.074,0C6345.73,0,5705.639,342.118,5297.305,882.884H662.163
            C297.973,882.884,0,1180.858,0,1545.047v7063.074c0,364.189,297.973,662.163,662.163,662.163h7063.074
            c364.19,0,662.163-297.974,662.163-662.163V4281.988c463.515-673.199,882.885-1291.218,882.885-2074.778
            C9270.284,993.245,8288.075,0,7063.074,0z"
            />
          </g>
        </svg>
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
      <a href="tel:+41269122121">{{ $t('taxi') }}</a
      >.
    </p>
    <h4 v-scroll-reveal>Photos</h4>
    <p v-scroll-reveal>{{ $t('pictures') }}</p>
    <!-- <p v-scroll-reveal>{{ $t('easy-steps') }}</p> -->
    <ul v-scroll-reveal class="share-links">
      <li>
        {{ $t('whatsapp') }} <a href="https://chat.whatsapp.com/F6R2VqExlWFJpvBi10LxEo">{{ $t('whatsapp-group') }}</a>
      </li>
      <li>{{ $t('dropbox') }}</li>
      <li>{{ $t('by-sending') }} <a href="mailto:kimberly.waelti@gmail.com">email</a></li>
    </ul>
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
    this.getBGImage('.colombette-img', 'colombettes.jpg');
  },
};
</script>

<style scoped lang="scss">
.share-links {
  li {
    margin-bottom: 10px;
    font-size: 16px;
    background-position: 0 9px;
  }
}
.warning {
  background-color: #d24679;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  padding: 15px;
  margin: 15px 0 20px;
  h2 {
    color: #fff;
    font-size: 50px;
  }
  @include xs {
    padding: 15px 10px;
    h2 {
      font-size: 40px;
    }
  }
}
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
    "drinkanddrive": "Do not drink and drive! Eat, drink and be merry: ",
    "taxi": "taxi étoile",
    "pictures": "We want to remember this day, so please share your pictures (even the crazy ones) with us. Here are some ways for you to share them, choose whichever one is easiest for you:",
    "whatsapp": "via this whatsapp ",
    "whatsapp-group": "group link",
    "dropbox": "by creating your Dropbox or Google photos album, and sharing it with kimberly.waelti@gmail.com",
    "by-sending": "or by sending them direction by",
    "here": "here",
    "to-be-confirmed": "Reception to be confirmed. We await the next Covid restrictions announcement..."
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
    "drinkanddrive": "Pas de risque, pas d’accident. Ne prenez pas le volant: ",
    "taxi": "taxi étoile",
    "pictures": "On veut un max de souvenirs de cette journée alors pouvez-vous svp partager avec nous vos photos (même les photos un peu folles/ratées). Choisissez ce qui vous fait plaisir:",
    "whatsapp": "via ce",
    "whatsapp-group": "group whatsapp",
    "dropbox": "en créant un dossier Dropbox ou Google photos, puis en le partageant avec kimberly.waelti@gmail.com",
    "by-sending": "ou en les envoyant directement par",
    "here": "ce lien",
    "to-be-confirmed": "Réception à confirmer suivant les prochaines mesures sanitaires..."
  }
}
</i18n>
