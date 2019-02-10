<template>
  <div class="c-form-group c-form-group--check">
    <input :id="_uid" class="u-visuallyhidden" type="checkbox" />
    <label :for="_uid" class="u-1/1 u-padding-small">
      <slot />
    </label>
  </div>
</template>
