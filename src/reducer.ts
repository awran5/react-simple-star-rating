type State = {
  ratingValue: number | null
  hoverValue: number | null
  hoverIndex: number
  valueIndex: number
}

type Action =
  | { type: 'PointerMove'; payload: number | null; index: number }
  | { type: 'PointerLeave' }
  | { type: 'MouseClick'; payload: number }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PointerMove':
      return {
        ...state,
        hoverValue: action.payload,
        hoverIndex: action.index
      }

    case 'PointerLeave':
      return {
        ...state,
        ratingValue: state.ratingValue,
        hoverIndex: 0,
        hoverValue: null
      }

    case 'MouseClick':
      return {
        ...state,
        valueIndex: state.hoverIndex,
        ratingValue: action.payload
      }

    default:
      return state
  }
}
