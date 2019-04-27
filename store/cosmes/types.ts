export interface Cosme {
  id: number
  cosmename: string
  user_id: number
  category_id: number
  brand_id: number
  item_id: number
  color_id: number
  love_rate: number
  cosme_id: number
  image: string
  pick_rate: number
  created_at: string
  updated_at: string
}

export interface CosmesState {
  all: Cosme[]
  cosmesByCosmeID: Cosme[]
}