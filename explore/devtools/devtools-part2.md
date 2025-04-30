**Q1: What was the bug?** 
<br>
The input values `num1` and `num2` were being read as strings from the input fields, so the `+` operator performed string concatenation instead of numerical addition.

<br>

**Q2: How would you fix it?**
<br>
To fix the bug, I converted both of the inputs to numbers using the JavaScript type conversion function `Number()`, before performing the summation. This makes sure that `num1` and `num2` are treated as numbers instead of strings, so addition happens instead of string concatenation. 

```javascript
function calculateSum(num1, num2) {
  let result = Number(num1) + Number(num2)
  return result
}

```

[Screenshot of fix](expand/screenshots/fix.png)
