export default function formatPlayCount(playCount) {

  return playCount / 10000 > 9
    ? playCount / 10000 > 10000
      ? `${(playCount / 100000000).toFixed(1)}亿`
      : `${Math.ceil(playCount / 10000)}万`
    : Math.floor(playCount)


}