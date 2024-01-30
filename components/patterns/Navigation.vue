<template>
  <nav class="navigation">
    <div class="navigation__inner layout__inner">
      <div class="navigation__logo">
        <svgo-logo filled/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}

</script>

<style lang="scss">
.navigation {
  z-index: 10;
  display: flex;
  align-items: center;

  height: clamp(4rem, 3.84rem + 0.66vw, 4.5rem);
}

.navigation__inner {

  display: flex;
  align-items: center;
}

.navigation__logo {
  svg {
    height: clamp(2rem, 1.84rem + 0.66vw, 2.5rem);
    width: auto;
  }
}

</style>