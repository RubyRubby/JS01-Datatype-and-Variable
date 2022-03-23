// a มีค่าเท่าไหร่และเพราะอะไร

// let a = 1 * "4" + |+null| + |+" "| - "5" * 2 + |+(7 + 2 + "" + +!!undefined)|;

// do bracket frist(7 + 2 + "" + +!!undefined)
//7+2 = 9
//9+"" ===== 9""
//+!!undefined = turn undefined to Boolend and turn  value = 0 ==== 9""0 ====== 90
// 1*"4" === 4
// +null === 0
// - "5" *2 === 10
// +'' === 0
// +(7 + 2 + "" + +!!undefined) ===90

// 4+0-10+0+90 == 82

console.log(a); //84
