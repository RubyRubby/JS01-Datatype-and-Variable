// - ให้สร้างตัวแปร a มีค่าเท่ากับ 0
// - ให้เพิ่มค่า a อีก 1 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Increment
// - ให้เพิ่มค่า a อีก 3 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place
// - ให้คูณ a ด้วย 17 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place
// - ให้หารเอาเศษ a ด้วย 7 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place
// - ผลลัพธ์สุดท้ายของ a คือเท่าไหร่

let a = 0;
console.log(a);
a++;
console.log(a);
a += 3;
console.log(a);
a *= 17;
console.log(a);
a %= 7;
console.log(a);
