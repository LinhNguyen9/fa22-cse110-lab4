1. Line 9 printed 20
2. Line 13 returned 20
3. Nothing got printed to the screen at line 9 
4. Line 13 returned an error "ReferenceError: result is not defined". Because "result" was declared using let and let is known as function scope so it can only be used within the scope of the function. Thus, when "result" was called on line 13, the function cannot find the "result" variable. Therefore, it occurs the error.
5. The code returns an error because "result" was declared using const which is used to declare a constant (unchanging) variable. When variables declared using const and they cannot be reassigned. An attempt to do so would cause an error.
6. The code returns error because the "result" variable was declared within the if statement scope so when "result" was called outside of the scope, the fucntion cannot find the "result" variable. 