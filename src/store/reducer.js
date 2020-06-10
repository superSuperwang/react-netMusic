export default function setMusic(state = [], action) {
  let newState
  switch (action.type) {
    case 'ADD_MUSIC':
      newState = [...state, ...action.payload]
      break
    case 'DELETE_MUISIC':
      newState = state.splice(action.payload, 1)
      break
    default:
      break
  }
  return newState
}