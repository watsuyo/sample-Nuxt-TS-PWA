<template>
  <DeviceWidthContainer v-slot="{ only }">
    <ItemContainer v-slot="{ items }">
      <ItemDetail v-for="item in items" :key="item.id" :item="item" />
    </ItemContainer>
  </DeviceWidthContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'globalnav',
  components: {
    DeviceWidthContainer: () =>
      import('~/components/container/DeviceWidthContainer.vue'),
    ItemContainer: () => import('~/components/container/ItemContainer.vue'),
    ItemDetail: () => import('~/components/presentations/ItemDetail.vue')
  },
  async fetch({ store, params }) {
    await store.dispatch('items/fetchItemsByItemID', params.itemID);
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
