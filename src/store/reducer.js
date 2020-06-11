export default function setMusic(state = [], action) {

  // reducer 必须为纯函数，不能改变参数
  // 数组中添加对象时需判断数组中有没有，没有则加
  let newState = [...state]
  const index = newState.findIndex(item => item.id === action.payload.id)
  if (action.type === 'ADD_MUSIC' && index === -1) {
    newState.unshift(action.payload)
  } else if (action.type === 'DELETE_MUISIC' && index !== -1) {
    newState.splice(index, 1)
  }
  return newState
}