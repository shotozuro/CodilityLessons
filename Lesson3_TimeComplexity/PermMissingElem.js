/*
title   : PermMissingElem
creator : @shotozuro
*/


function solution(A) {
  const sorted = A.sort()
  let end = false
  let i = 0
  let result = 1
  while (!end) {
    if (i + 1 !== sorted[i]) {
      end = true
      result = i + 1
    } else {
      i++
    }
  }

  return result
}
