<template>
  <DeviceWidthContainer v-slot="{ only }">
    <template :only="only.sp">
      <CosmeContainer v-slot="{ cosmes }">
        <template v-for="cosme in cosmes">
          <CosmeDetail :key="cosme.id" :cosme="cosme" />
        </template>
      </CosmeContainer>
    </template>
  </DeviceWidthContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    DeviceWidthContainer: () =>
      import('~/components/container/DeviceWidthContainer.vue'),
    CosmeContainer: () => import('~/components/container/CosmeContainer.vue'),
    CosmeDetail: () => import('~/components/presentations/CosmeDetail.vue')
  },
  async fetch({ store, params }) {
    await store.dispatch('cosmes/fetchCosmesByCosmeID', params.cosmeID);
  }
})
export default class Home extends Vue {}
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
