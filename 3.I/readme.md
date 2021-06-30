# Interface segregation principle
"Many client-specific interfaces are better than one general-purpose interface."


### Exercise: step 1
- [x] Refactor the current fat interface so each auth method has each own interface.  
As an extra difficulty, there is a feature request for a google bot to be able to login on the site, he can only use the google option to log in.

### Exercise: Step 2 (Optional)
- [x] both the Google and Facebook code is almost identical, refactor this code to small, separate dependencies