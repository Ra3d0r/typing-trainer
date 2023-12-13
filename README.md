# Typing trainer
## Content
[Short description](#description)

[Technologies](#theology)

[Functional](#functional)

[Project Launch](#init)




<a name="description"><h3 style="text-align: center">Short description</h3></a>

The web application allows you to practice typing on the keyboard in different modes. Custom mode allows you to add your own text and practice on it. You need to register/login to save the results of metrics. All results of metrics are saved on firebase and you can manage them.

# [View demo](https://typing-trainer-alpha.vercel.app/)
![Example of a typing trainer](https://raw.githubusercontent.com/Ra3d0r/typing-trainer/gif/example.gif)


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
- i18next

Backend: 
- Firebase

Bundle:
- Webpack

Others:
- Prettier
- Prettier-sort-imports
- ESlint



<a name="functional" ><h3 style="text-align: center">Functional</h3></a>

1. Displaying pressed keys on the virtual keyboard
2. Displaying correct and incorrect input on the virtual keyboard and text
3. Manual deletion of previously written characters
4. Calculation of input results in real time
5. Saving the result of text typing after entering the last character in the text for authorized users.
6. Translate for Russian and English
 

Text for mode: 
1. EN
- easy: https://type.fit/api/quotes
- normal: https://dummyjson.com/posts
- hard: https://api.api-ninjas.com/v1/exercises
2. RU
- https://api.anilibria.tv/v2


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

4. Authorization data for testing:

- login: test@gmail.com
- password: 123456







 





