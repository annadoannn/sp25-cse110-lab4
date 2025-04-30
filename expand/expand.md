**Q1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.**
<br>

JavaScript's asynchronous nature can be frustrating for developers because it introduces complexity in how code executes. Since JavaScript is single-threaded, asynchronous operations are essential for maintaining performance and responsiveness, especially in web applications. However, managing asynchronous control flow—through callbacks, promises, or `async/await`—can lead to issues such as race conditions, deeply nested callbacks, and harder-to-trace bugs.

Loose typing in JavaScript is another challenge, as variables are not restricted to a single data type. This flexibility can lead to unexpected behavior when JavaScript automatically coerces values between types. For example, adding a string and a number may result in string concatenation rather than numerical addition. Such implicit conversions can cause logical errors that are difficult to detect during development.

Lastly, the fact that JavaScript is deeply integrated with how browsers work can introduce its own set of issues. Differences in browser implementations and APIs can lead to inconsistent behavior across environments. Developers must account for browser compatibility, security constraints, and limitations in performance that come with running code on a wide variety of user devices.

---
<br>

**Q2: Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?**
<br>

The creators of JavaScript designed it with the goal of making it accessible to a wide range of users. Loose typing supports this goal by allowing developers to write code more quickly and flexibly without worrying about strict type declarations. This design choice made the language easier to learn and well-suited for rapid prototyping and experimentation.

Asynchronous features were included because JavaScript was intended to run in web browsers, which need to remain responsive to user input even while performing background tasks like fetching data. Blocking operations would freeze the user interface, resulting in a poor user experience. Asynchronous constructs such as event listeners and `setTimeout()` allow JavaScript to handle tasks non-blockingly, enabling smooth, interactive web applications.

---
<br>

**Q3: What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?**
<br>

A compiled language is one in which the source code is translated into machine code before execution. This compilation step allows for performance optimizations and early detection of syntax and type errors. Examples include C++ and Java. In contrast, an interpreted language is executed line by line by an interpreter at runtime. JavaScript is primarily interpreted, although modern engines like Chrome's V8 use Just-In-Time (JIT) compilation to improve execution speed.

Because JavaScript is interpreted, it allows developers to test and iterate quickly, making it well-suited for web development and dynamic applications. However, this flexibility comes with trade-offs. Interpreted code is generally slower than compiled code, and many errors—especially those related to types—are not caught until the code is executed. This can lead to more bugs making it into production if not properly tested.

---
<br>

**Q4: The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?**
<br>

The professor likely emphasizes vanilla JavaScript because understanding the core principles of the language is essential for becoming a competent web developer. Frameworks like React, Angular, or Vue provide useful abstractions, but they are built on top of vanilla JavaScript. By mastering the fundamentals, students are better equipped to understand how frameworks operate internally and how to debug issues when they arise.

Additionally, relying too heavily on frameworks early on can lead to developers using features without fully understanding them. This limits their ability to write efficient and maintainable code. Learning vanilla JavaScript first promotes a deeper understanding of how the DOM, events, and JavaScript logic work together. The drawback of not learning frameworks is that students may feel unprepared for industry settings, where frameworks are commonly used. However, once a solid foundation is established, transitioning to frameworks becomes significantly easier and more meaningful.

---
<br>


**Q5: Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?**
<br>

This lab relates to our project because it emphasizes critical skills in debugging, inspecting network requests, and understanding how JavaScript interacts with the browser environment. During the project, we will likely need to fetch and manipulate data, respond to user input, and fix logic or display bugs. The debugging tools introduced in this lab—such as setting breakpoints, watching variables, and inspecting request headers—will be directly applicable when tracking down issues in our code.

Furthermore, understanding how asynchronous operations and DOM manipulation work at a low level gives us greater control over our application’s behavior. This lab helps reinforce the importance of clean, well-structured JavaScript code, and equips us with the skills to diagnose and resolve issues more efficiently during project development.

<br> 