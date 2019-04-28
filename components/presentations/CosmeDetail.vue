<template>
  <div>
    <CosmeSummary />
    {{ cosme.cosmename }}
    <img :src="cosme.image" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Cosme } from '~/store/cosmes/types';

@Component({
  components: {
    CosmeSummary: () => import('~/components/presentations/CosmeSummary.vue')
  }
})
export default class CosmeDetail extends Vue {
  @Prop({ required: true }) readonly cosme!: Cosme;
}
</script>
