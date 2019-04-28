<template>
  <div>
    <slot :cosmes="cosmes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Cosme } from '~/store/cosmes/types';

@Component
export default class CosmeContainer extends Vue {
  @Getter('cosmes/getCosmesByCosmeID') cosmes!: Cosme[];
}
</script>
