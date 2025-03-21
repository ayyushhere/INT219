function isValidUser(username, password) {
    if (!username || !password) {
        return false;
    }
    else{
        return true;
    }
}

console.log("--------------------------------");

console.log(isValidUser("admin", "1234"));5
console.log(isValidUser("", "1234"));
console.log(isValidUser("admin", ""));
console.log(isValidUser("", ""));

console.log("--------------------------------");

function isEligibleForDiscount(age, isMember){
    if(age > 60 || isMember){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEligibleForDiscount(65, false));
console.log(isEligibleForDiscount(30, true));
console.log(isEligibleForDiscount(45, false));
console.log(isEligibleForDiscount(60, false));

console.log("--------------------------------");

function isBetween(x, min, max){
    if(x > min && x < max){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBetween(5, 1, 10));
console.log(isBetween(1, 1, 10));
console.log(isBetween(10, 1, 10));
console.log(isBetween(7, 3, 9));

console.log("--------------------------------");


//1.Arithematic Operators
console.log("Arithematic Operators");
let a=10, b=5;
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b);
console.log("a++ =", a++);
console.log("a-- =", a--);
console.log("++a =", ++a);
console.log("--a =", --a);

console.log("--------------------------------");

//2.Assignment Operators
console.log("Assignment Operators");
let x=10, y=5;
x += y;
console.log("x += y =", x);
x -= y;
console.log("x -= y =", x);
x *= y;
console.log("x *= y =", x);
x /= y;
console.log("x /= y =", x);
x %= y;
console.log("x %= y =", x);
x **= y;
console.log("x **= y =", x);

console.log("--------------------------------");

//3.Comparison Operators
console.log("Comparison Operators");
let p=10, q=5;
console.log("p == q =", p == q);
console.log("p != q =", p != q);
console.log("p === q =", p === q);
console.log("p !== q =", p !== q);
console.log("p > q =", p > q);
console.log("p < q =", p < q);
console.log("p >= q =", p >= q);
console.log("p <= q =", p <= q);

console.log("--------------------------------");

//4.Logical Operators
console.log("Logical Operators");
let r=true, s=false;    
console.log("r && s =", r && s);
console.log("r || s =", r || s);
console.log("!r =", !r);
console.log("!s =", !s);

console.log("--------------------------------");

//5.Ternary Operators
console.log("Ternary Operators");
let age=20;
let result = age >= 18 ? "Adult" : "Minor";
console.log("result =", result);

console.log("--------------------------------");

//6.Bitwise Operators
console.log("Bitwise Operators");
let m=5, n=3;
console.log("m & n =", m & n);
console.log("m | n =", m | n);
console.log("m ^ n =", m ^ n);
console.log("~m =", ~m);
console.log("m << 1 =", m << 1);
console.log("m >> 1 =", m >> 1);    

console.log("--------------------------------");






