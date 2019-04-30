export interface Item {
  id: number
  itemname: string
  user_id: number
  product_id: number
  brand_id: number
  item_id: number
  color_id: number
  love_rate: number
  image: string
  pick_rate: number
  created_at: string
  updated_at: string
}

export interface ItemsState {
  all: Item[]
  itemsByItemID: Item[]
}