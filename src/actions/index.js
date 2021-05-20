export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'

// ActionCreatorを作成
export const countPlus = () => {
  // Actionオブジェクトを返す
  return { // →省略可
    // type: タイプ名
    type: COUNTPLUS
  }
}

export const countMinus = () => ({
  type: COUNTMINUS
})