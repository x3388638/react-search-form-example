export const SET_FIELD = 'SET_FIELD'
export const CLEAR_FIELD = 'CLEAR_FIELD'
export const RESET = 'RESET'

interface State {
  [fieldKey: string]: any
}

interface Action {
  type: string
  payload?: {
    fieldKey: string
    value?: any
  }
}

const reducer = (state: State, action: Action): State => {
  const { payload } = action

  switch (action.type) {
    case SET_FIELD: {
      if (!payload) {
        return state
      }

      return {
        ...state,
        [payload.fieldKey]: payload.value
      }
    }

    case CLEAR_FIELD: {
      if (!payload) {
        return state
      }

      return {
        ...state,
        [payload.fieldKey]: undefined
      }
    }

    case RESET: {
      return Object.keys(state).reduce(
        (res: Record<string, undefined>, key) => {
          res[key] = undefined
          return res
        },
        {}
      )
    }

    default: {
      return state
    }
  }
}

export default reducer
