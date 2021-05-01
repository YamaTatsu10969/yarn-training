/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 数値の配列を受け取って、その要素を全て掛けた数字を返す関数
 */
function multi(numbers) {
  let result = 1;
  for (const num of numbers) {
    result = result * num;
  }
  return result;
}

/// add と multi のメソッドを書く
module.exports = { add, multi };