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

**Q12:**
<ol type="A">
  <li>Accessing the value of the name property: <code>student.name</code> </li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
