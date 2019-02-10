<template>
  <div>
    <div class="swatch-container">
      <div class="u-bg-color-brand u-color-white">Primary</div>
      <div class="u-bg-color-brand-secondary u-color-black">Secondary</div>
    </div>
    <div class="swatch-container">
      <div class="u-bg-color-white u-color-black">Background</div>
      <div class="u-bg-color-white u-color-black">Surface</div>
      <div class="u-bg-color-error u-color-white">Error</div>
    </div>
  </div>
</template>

<style lang="scss">
.swatch-container {
  display: flex;
  flex-direction: row;

  > div {
    height: 50px;
    flex-basis: 50px;
    flex-grow: 1;
    padding: .5rem 1rem;
  }
}
</style>
