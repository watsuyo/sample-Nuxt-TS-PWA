export interface Pick {
  id: number,
  user_id: number,
  item_id: number,
  status: number,
  created_at: string,
  updated_at: string
}

export interface PicksState {
  all: Pick[]
  picksByPickID: Pick[]
}