export { }
let x:number = 123;
let r: number;
let s = 0;

while (x != 0) {
    let y = x;
     r = Math.round(x % 10); 
     s = s + r; 
     x = Math.round(x / 10); 

     console.log("r="+r, "s="+s, "x="+x, "y="+y);
    
}
console.log(s);