**Q1:** `values added: 20` <br>

*(Since `add = true`, we enter the `if` block, compute `result = 10+10 = 20`, and log it inside the block.)* 

<br>

**Q2:** `final result: 20` <br>

*(Since `var` is function-scoped, the variable `result` is still accessible outside of the `if` block. Thus, it prints `20` without an error.)* 
<br>
<br>

**Q3:** We shouldn't use `var` due how the variable is function scoped. Regardless of where `var` is declared, we can access it anywhere inside the function it's defined in; variables may be accessed or modified outside their intended block. This can lead to bugs and cause unexpected behavior.
<br>
<br>


**Q4:** `values added: 20` <br>

*(Since `add = true`, we enter the `if` block, compute `result = 10+10 = 20`, and log it inside the block.)*
<br>
<br>

**Q5:** Line 13 would return a **ReferenceError** because `let ` is block-scoped. Thus, the `result` variable would be undefined outside of the `if (add)` block. 

<br>
<br>


**Q6:** Line 9 would not be reached since the code errors at line 7. At line 7, the code tries to reassign the const variable, and since const variables can't be reassigned after they're initialized, a **TypeError** would occur.

<br>
<br>


**Q7:** Line 13 would not be reached because the program crashed earlier at line 7 with the TypeError. Because of the crash, the function stops executing, so it never gets to line 13. 