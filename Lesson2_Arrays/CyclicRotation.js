/*
  title   : CyclicRotation
  creator : @shotozuro
*/

function solution(A, K) {
  let arr = [...A]
  let i = 0

  if (A.length === 0) return A

  while (i < K) {
    const removed = arr.pop()
    arr.unshift(removed)
    i++
  }

  return arr
}