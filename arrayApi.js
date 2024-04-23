"use strict";
import {numbers, students, fruits} from './data.js';

const result = numbers.map((num) => num * 2);
console.log(result);

//map
console.log('map()');
console.log('영어점수:', students.map((student) => student.english));
console.log('학생 이름:',students.map((student) => student.name));

//some
console.log('some()');
console.log('과일중 배가 있나요?', fruits.some((fruit) => fruit === "배"));
console.log('과일중 배가 있나요?', fruits.some((fruit, index) => {
    console.log('index:', index, 'fruit:', fruit);
    return fruit === '배';
}));

console.log('숫자에 7이상인 숫자가 있나요?', numbers.some((number) => number > 7));
console.log('숫자에 8이상인 숫자가 있나요?', numbers.some((number) => number >= 8));
console.log('수학 점수가 100점인 학생이 있나요?', students.some((student) => student.mathematics === 100));
console.log('영어 점수가 50점 미만인 학생이 있나요?', students.some((student) => {student.english < 50}));


//every
console.log('every()');
console.log('숫자가 모두 8이하 인가요?', numbers.every((num) => num < 8 ));
console.log('학생들의 수학 점수가 모두 80점 이상인가요?', students.every((student) => student.mathematics >= 80 ));
console.log('학생들의 수학 점수가 모두 75점 이상인가요?', students.every((student) => student.mathematics >= 75 ));

//filter
console.log('짝수:', numbers.filter((num) => num % 2 === 0));
console.log('홀수:', numbers.filter((num) => num % 2 === 1));
console.log('영어 점수가 90점 이상인 학생들은?', students.filter(student => student.english >= 80));

//reduce
const output = numbers.reduce((acc, cur, idx, src) => {
    console.log('acc:', acc, 'cur:', cur, 'idx:', idx, 'src:', src);
    return acc + cur;
}, 0);
console.log("output:", output);
console.log('------------------------');
const newFruits = fruits.reduce((acc, cur) => {
    console.log('acc:', acc, 'cur:', cur);
    if(acc.includes(cur) === false) {
        acc.push(cur);
    }
    return acc;
}, []);
console.log(newFruits);