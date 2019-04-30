<template>
  <div>
    <slot :items="items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Item } from '~/store/items/types';

@Component
export default class ItemContainer extends Vue {
  @Getter('items/getItemsByItemID') items!: Item[];
}
</script>
