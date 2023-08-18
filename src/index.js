
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix)
    res = matrix.map((x)=> (matrix.indexOf(x) % 2) ? x.reverse() : x);
  return [].concat(...res);
}