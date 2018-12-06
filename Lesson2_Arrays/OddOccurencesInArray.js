/*
  title   : OddOccurencesInArray
  creator : @shotozuro
*/

function solution(A) {
  const sorted = A.sort()
  let start = true
  let pos = 0
  let result = null
  while (start) {
    if (sorted[pos] != sorted[pos + 1]) {
      start = false
      result = sorted[pos]
    } else {
      pos = pos + 2
    }
  }

  return result
}
