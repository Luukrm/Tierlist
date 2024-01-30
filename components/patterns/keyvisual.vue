<template>
  <div class="keyvisual">
    <div class="keyvisual__inner [ pt-xs pb-xs ]">
      <div class="grid">
        <div class="keyvisual__content">
          <h1 class="keyvisual__title [ text-xl leading-tight ]">Your<br> all-in-one<br> tierlist maker!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus exercitationem, expedita pariatur
            placeat porro repellat veritatis voluptate. Aliquam blanditiis, consequuntur culpa, deleniti illo iusto
            minima non officiis, quaerat quod ut.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.keyvisual {
  width: 100%;
  padding-top: clamp(4rem, 3.84rem + 0.66vw, 4.5rem);
}

.keyvisual__inner {
  z-index: 2;
  position: relative;
}

.keyvisual__content {
  grid-column: span 6;

  display: flex;
  flex-direction: column;
}

.keyvisual__title {
  font-weight: 800;
  color: #060b2e;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;

}

.keyvisual__image {
  grid-column: span 6;
  position: relative;
  height: clamp(22.5rem, 19.298rem + 13.14vw, 32.5rem);

  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    right: -4px;

    //background-color: #626161;

    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  picture {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;

    font-family: 'object-fit: cover; object-position: 50% 50%;';

    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 16px;

  }
}
</style>
<script setup lang="ts">
</script>