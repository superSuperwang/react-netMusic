export default function setMusic(state=[],action){
   switch(action.type){
         case 'ADD_MUSIC':
           return [...state,...action.payload]
           break
         case 'DELETE_MUISIC':
           return [...state].splice(action.payload,1)
           break
         default:
           break
   }
}