**Q1:** At line 12, `console.log(i)` will print **3**. The variable `i` was declared with `var`, which is function-scoped. Thus, after the `for` loop finishes, `i` still exists and has value 3.

<br> 

**Q2:** At line 13, `console.log(discountedPrice)` will print **150**. `discountedPrice` was declared with `var` inside the `for` loop and it's function-scoped. Which means the variable `discountedPrice` remains accessible after the loop ends. Its last assigned value was 150, which gets printed. 

<br> 

**Q3:** At line 14, `console.log(finalPrice)` will print **150**, because `finalPrice` was declared with `var` outside the loop; making it accessible throughout the whole function. After the loop finishes, its last assigned value is 150; which gets printed. 

<br>

**Q4:** The function `discountPrices` will return **[ 50, 100, 150]**. Each price from the input array `[100, 200, 300]` is multiplied by (1 - discount) to apply a 50% discount, then rounded to two decimal places using `Math.round`, and pushed into the discounted array. After the loop finishes, the function returns the final `discounted` array, which is `[ 50, 100, 150]`.

<br>

**Q5:** At line 12, we will get a **ReferenceError**, because `i` was declared using `let`, which is block-scoped, and `i` is no longer accessible outside the `for` loop block.

<br>

**Q6:** At line 13, we will get a **ReferenceError**, because `discountedPrice` was declared using `let` in the `for` loop. Since line 13 is called outside of the `for` block, `discountedPrice` will be undefined. 

<br>

**Q7:** Line 14 will print **150**. `finalPrice` was declared with `let` in the function scope, making it accessible throughout the entire function. During the `for` loop, `finalPrice` is updated during each iteration, and after the final iteration, its value is 150. This value is then logged at line 14. 

<br>

**Q8:** The function `discountPrices([100, 200, 300], 0.5)` would return **[50, 100, 150]**. Each price is discounted by 50%, rounded to two decimal places with `Math.round`, and the resulting values are stored in the `discounted array`, which is then returned after the loop completes.

<br>

**Q9:** At line 11, a **ReferenceError** will occur because `i` was declared with `let` inside the `for` loop block. Since `let` is block-scoped, `i` is not accessible outside the loop. As a result, no output is printed and the program crashes when trying to access `i`. 

<br>

**Q10:** At line 12, it will print **3**. Thw variable `length` was declared using `const` at the function scope. Thus, `length` remains accessible throughout the entire function. Its value is 3 based on the length of the input array `[100, 200, 300]`. 

<br>

**Q11:** The function `discountPrices([100,200,300], 0.5)` will return **[50, 100, 150]**. Although the variable `discounted` is declared as a `const`, its contents can be modified *(e.g., by `.push()`)*, but its reference can't be reassigned. Thus, the discounted prices are correctly added to the array and returned. 

<br>

**Q12: Data Types**
<ol type="A">
  <li>Accessing the value of the name property in the student object: <code>student.name</code> </li>
  <li>Accessing the value of the Grad Year property in the student object: <code>student["Grad Year"]</code></li>
  <li>Calling the function for the greeting property in the student object: <code>student.greeting()</code></li>
  <li>Assessing the name property of the object in the Favorite Teacher property in student: <code>student["Favorite Teacher"].name</code></li>
  <li>Access index zero in the array of the courseLoad property of the student object: <code>student.courseLoad[0]</code></li>
</ol>

<br>

**Q13: Arithmetic**
<ol type ="A">
    <li>Output: <code>'32'</code>. The (+) operator with a string triggers string concatenation. Thus, the number 2 is coerced to '2', so '3' + '2' becomes '32'. </li>
    <li>Output: <code>1</code>. The (-) operand triggers numeric coercion. So '3' is converted to number 3, then 3-2 = 1. </li>
    <li>Output: <code>3</code>. null is coerced into 0, so 3+0 is 3.</li>
    <li>Output: <code>'3null'</code>. (+) with a string performs string concatenation. Thus, null is coerced into 'null'. So, '3' + 'null' = '3null'. </li>
    <li>Output: <code>4</code>. true is coerced to 1, so 1 + 3 = 4. </li>
    <li>Output: <code>0</code>. false is coerced into 0. Null is coerced into 0. Thus, 0 + 0 is 0. </li>
    <li>Output: <code>'3undefined'</code>. The (+) operand with a string converts undefined into a string as well. So, we're concatenating two strings: '3' + 'undefined' and that becomes '3undefined'. </li>
    <li>Output: <code>NaN</code>. The - operator tries to coerce undefined to a number, but fails, so the result is NaN (Not a Number).</li> 
</ol>

<br>

**Q14: Comparison**
<ol type="A">
    <li>Output: <code>true</code>. '2' is coerced to number 2, so 2 > 1 is true. </li>
    <li>Output: <code>false</code>. Both are strings, so the comparison is lexicographic (dictionary order). Since '2' comes after '1' in character order, '2' < '12' would return false.</li>
    <li>Output: <code>true</code>. == performs type coercion. Thus, '2' becomes 2 and 2 == 2 is true.</li>
    <li>Output: <code>false</code>. The ===  compares both type and value. Since one is a number and the other is a string, 2 === '2' is false. </li>
    <li>Output: <code>false</code>. true is coerced to 1 with ==. Thus, 1 == 2 is false. </li>
    <li>Output: <code>true</code>. Boolean(2) is true, because 2 is nonzero. Thus, true === true is true. </li>
</ol>

<br>

**Q15: Explain the difference between the == and === operators.** 

<br>

`==` is loose equality. It allows type coercion, meaning it tries to convert both operands to the same type before comparing their values. 

<br>

`===` is strict equality. It does not perform type coercion. Thus, the operands must be the same type and value to be considered true. 

<br>

**Q16:** 
<br>

[Code Answer for Question 16](part2-question16.js)

<br>

**Q17:** The result will be an array `[2, 4, 6]`. The function `modifyArray` is called with an array [1, 2, 3] and a callback function `doSomething` that multiplies each number by 2.
Inside the `modifyArray` function, we loop through the array inout and apply the callback to each element. So, doSomething(1) → 2, doSomething(2) → 4, and doSomething(3) → 6. Each result is pushed into the new array, `newArr`. The final returned array is [2, 4, 6].

<br>

**Q18:**

<br>

[Modified Program](part2-question18.js)

<br>

**Q19:** 
<br> 
Output: <br>
1 <br>
4 <br>
3 <br>
2 <br>

JavaScript executes code synchronously first, so 1 and 4 are printed immediately. Then, setTimeout(..., 0) schedules console.log(3) to run after the current stack clears, so this executes next. Finally, setTimeout(..., 1000) delays console.log(2) by 1 second, so it's printed last.




