import { WidthState } from '~/store/app/types'

export default (): WidthState => ({
  breakpoint: 768,
  only: {
    pc: false,
    sp: true
  },
})
