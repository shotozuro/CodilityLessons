/*
title   : TapeEquilibrium
creator : @shotozuro
*/

function solution(A) {
  let i = 0
  let result = null
  const sumAll = A.reduce((a, c) => a + c)
  let left = 0
  while (i < A.length - 1) {
    left += A[i]
    const diff = Math.abs(sumAll - 2 * left)
    result = result === null || result > diff ? diff : result

    i++
  }
  return result
}
