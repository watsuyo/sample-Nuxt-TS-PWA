<template>
  <div>
    <h2>イエベ春</h2>
    <template v-for="cosme in cosmes">
      {{ cosme.cosmename }}
      <img :key="cosme.id" :src="cosme.image" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Cosme } from '~/store/cosmes/types';

@Component({
  async fetch({ store, params }) {
    await store.dispatch('cosmes/fetchCosmesByCosmeID', params.cosmeID);
  }
})
export default class cosmes extends Vue {
  // cosmesの前にprivateをつけるとエラーになる
  @Getter('cosmes/getCosmesByCosmeID') cosmes!: Cosme[];
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
