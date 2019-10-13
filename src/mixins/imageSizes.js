export default {
  methods: {
    getHeaderImage(target, imageName) {
      const image = document.querySelector(target);
      let desiredSize = Math.ceil(window.innerWidth);
      let imageSize;
      if (desiredSize > 2100) {
        imageSize = 'w_2100';
      } else {
        const sizes = [500, 800, 1080, 1600, 2100];
        const result = sizes.filter(number => number > desiredSize);
        if (this.closestNumber(result, desiredSize) != undefined) {
          imageSize = `w_${this.closestNumber(result, desiredSize)}`;
        } else {
          imageSize = 'w_2100';
        }
      }
      let extraParams = ',f_auto,dpr_2';
      let url = `https://res.cloudinary.com/dljgq8ek2/image/upload/${imageSize}${extraParams}/kim-julien/${imageName}`;
      image.style.backgroundImage = `url('${url}')`;
    },
    closestNumber(array, num) {
      let i = 0;
      let minDiff = 1000;
      let ans;
      for (i in array) {
        const m = Math.abs(num - array[i]);
        if (m < minDiff) {
          minDiff = m;
          ans = array[i];
        }
      }
      return ans;
    },
  },
};
