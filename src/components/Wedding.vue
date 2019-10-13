<template>
  <div>
    <h2 v-scroll-reveal>{{ $t('wedding') }}</h2>
    <Flowers v-scroll-reveal />
    <div v-scroll-reveal>
      <div class="allsaints-img"></div>
    </div>
    <div v-scroll-reveal class="infos">
      <p>
        @All Saints Church<br />
        Av. de la Prairie 40<br />
        1800 Vevey
      </p>
      <p class="time">14h00</p>
      <p class="parking">Av. du Major-Davel</p>
    </div>
    <p v-scroll-reveal><a href="javascript:alert('TODO');">Google maps</a></p>
    <p v-scroll-reveal>{{ $t('description') }}</p>
  </div>
</template>

<script>
import Flowers from '@/components/Flowers';
import imageSizes from '@/mixins/imageSizes';

export default {
  name: 'Wedding',
  mixins: [imageSizes],
  components: {
    Flowers,
  },
  data() {
    return {};
  },
  mounted() {
    this.getHeaderImage('.allsaints-img', 'church.jpg');
  },
};
</script>

<style scoped lang="scss"></style>

<i18n>
{
  "en": {
    "wedding": "Wedding",
    "description": "After the wedding ceremony, there will be drinks and some finger food."
    },
  "fr": {
    "wedding": "Mariage",
    "description": "Après la cérémonie religieuse, il y aura un verre et quelques amuses-bouches."
  }
}
</i18n>
