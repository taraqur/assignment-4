1*. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


ANS:
1. getElementById → gets one element by ID

2. getElementsByClassName → gets many elements by class (HTMLCollection)

3. querySelector → gets first matching element (CSS style)

4. querySelectorAll → gets all matching elements (NodeList)

--------------------------------------------------------------------------------------------------

2.How do you create and insert a new element into the DOM?

ANS:

let div = document.createElement("div");
div.textContent = "Hello";         
document.body.appendChild(div); 

---------------------------------------------------------------------------------------------------

3. What is Event Bubbling? And how does it work?

ANS:

-->Event goes from child → parent → up
Example: click button → also triggers div → body

-------------------------------------------------------------------------------------------------

4. What is Event Delegation in JavaScript? Why is it useful?

ANS: 
Use one event on parent instead of many on children
Useful because:

-->less code

-->works for new elements too

----------------------------------------------------------------------------------------------------

5. What is the difference between preventDefault() and stopPropagation() methods?

ANS: preventDefault vs stopPropagation

preventDefault() → stops default action (like form submit)

stopPropagation() → stops event from going up (no bubbling)