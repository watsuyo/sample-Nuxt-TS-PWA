<template>
  <div>
    <ItemSummary />
    <p>{{ item.name }}</p>
    <img :src="item.image" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Item } from '~/store/items/types';

@Component({
  components: {
    ItemSummary: () => import('~/components/presentations/ItemSummary.vue')
  }
})
export default class ItemDetail extends Vue {
  @Prop({ required: true }) readonly item!: Item;
}
</script>
