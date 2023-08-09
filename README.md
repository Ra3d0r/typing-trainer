# Typing trainer
## Content
[Short description](#description)

[Technologies](#theology)

[Functional](#functional)

[Project Launch](#init)




<a name="description"><h3 style="text-align: center">Short description</h3></a>

The web application allows you to practice typing on the keyboard in different modes. Custom mode allows you to add your own text and practice on it. You need to register/login to save the results of metrics. All results of metrics are saved on firebase and you can manage them.

# [View demo](https://link)
![Example of a typing trainer](https://raw.githubusercontent.com/Ra3d0r/repo/gif/example.gif)


<a name="theology"><h3 style="text-align: center">Technologies</h3></a>

Frontend:
- TypeScript
- React
- React Router
- Redux Toolkit
- Tailwind
- PostCSS
- Twin.macro
- Flowbite

Backend: 
- Firebase

Bundle:
- Webpack

Others:
- Prettier
- Prettier-sort-imports
- ESlint



<a name="functional" ><h3 style="text-align: center">Functional</h3></a>

1. Uploading text via API for different mode
2. Lazy loading pages and components
3. Indicator of loading between lazy loading of pages 
4. Indicator of preloading before React loaded
5. Adding personal text for custom mode
6. Highlighting character in the text when correct and incorrect keystrokes on the keyboard
7. Highlighting the button in the virtual keyboard when correct and incorrect keystrokes on the keyboard
8. Highlighting the special button in the virtual keyboard
9. Highlighting currently character in the text and the currently button in the virtual keyboard
10. Change the symbol of the button in the virtual keyboard when press shift
11. Real-time calculation of typing metrics
12. Notifications when the keyboard layout is incorrect for text
13. SPA routing
14. Private routing for account pages
15. Closed route to authorization pages of authorized users
16. Validation for authorization data
17. Visualization of loading status at authorization on special pages
18. User notifications about authorization/registration result
19. Redirection after successful authorization
20. Reset password
21. Indicator of loading user in header
22. Pagination in user table of metrics results
23. Filtering by modes in the user table
24. Changing authorization data on a special page
25. Responsive Web Design for mobile

Text for mode: 
- easy: https://type.fit/api/quotes
- normal: https://dummyjson.com/posts
- hard: https://api.api-ninjas.com/v1/exercises


<a name="init" ><h3 style="text-align: center">Project Launch</h3></a>

Note: Node.js and the npm package manager are required for the project to work. For further actions it is necessary to install them.

1. Install all packages and dependencies. To do this, enter the command:

```no-highlight
npm i
```
2. Create a .env.local file and fill in the variables in it according to the .env.example file

3. Start the build of the project. After installing all the dependencies, you must enter the command:

```no-highlight
npm start
```

After building the project, the server will automatically start with webpack dev server and open the project in the default browser.







 





