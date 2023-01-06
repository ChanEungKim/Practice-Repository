export const Message: string = "hellow world";
console.log(Message);

let count:number = 0;
console.log(count);
count +=1;

const done: boolean = true;
console.log(done);

const numbers:number[] = [1,2,3];
console.log(numbers);

let mightBeUndefined: string | undefined = undefined;
console.log(mightBeUndefined);

let color:'red'|'orange'|'black' = 'red';
console.log(color);

function sum(x:number,y:number):number {
    return x+y;
}
sum(1,2);

function sumArray(numbers:number[]):number {
    return numbers.reduce ((acc,cur)=>acc+cur,0);
}
const total = sumArray([1,2,3,4,5])
console.log(total);

interface Person {
    name: string;
    age?: number;
}
interface Developer {
    name: string;
    age?: number;
    skills: string[];
}
const person: Person = {
    name: '김사랑',
    age:20
};

const expert: Developer = {
    name: "김개발",
    skills: ['js', 'react']
};
console.log(person, expert);

interface Items<T> {
    list : T[];
}
const items: Items<string> = {
    list: ['1','2','3']
};
console.log(items);
