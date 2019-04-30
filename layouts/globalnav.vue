<docs>
## グロナビ付きレイアウト

- 初期実装者 kawasumi
</docs>

<template>
  <DeviceWidthContainer>
    <div class="globalnav">グロナビをここに表示</div>
    <nuxt />
  </DeviceWidthContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    DeviceWidthContainer: () =>
      import('~/components/container/DeviceWidthContainer.vue')
  }
})
export default class Globalnav extends Vue {}
</script>

<style lang="scss" scoped />
