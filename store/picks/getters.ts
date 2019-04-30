import { GetterTree } from 'vuex'
import { PicksState, Pick } from '@/store/picks/types'
import _filter from 'lodash/filter'

export default {
  getPicksByPickID: (state: PicksState) => {
    return _filter(state.picksByPickID, ((pick: Pick) => pick.item_id === 1));
  }
} as GetterTree<PicksState, Pick>
