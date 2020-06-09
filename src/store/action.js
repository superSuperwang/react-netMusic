
export default{
    // 添加正在播放的音乐
    addMusic(payload){
    return {
        type:'ADD_MUSIC',
        payload
    }
},
   // 删除音乐
   deleteMusic(payload){
    return {
        type:'DELETE_MUISIC',
        payload
    }
},

}
 