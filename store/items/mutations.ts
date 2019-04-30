import { MutationTree } from 'vuex'
import { ItemsState, Item } from '~/store/items/types'

export default {
  setItemsByItemID(state, { item }) {
    state.itemsByItemID = item
  },
} as MutationTree<ItemsState>