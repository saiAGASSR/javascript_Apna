// Templ;ating 
// Blueprint 
// 1 blueprint multiple copies 
// Tools
// https://handlebarsjs.com/
// https://ejs.co/

// npm init -y      -> setting the default values 
// npm install express
// npm i express
// npm i ejs
// touch index.js

// Render means sending files 
// mkdir views
// view engine expects all the ejs templates files to be in views diectory   
// cd views
// touch home.ejs
// https://www.google.com/search?q=jsx+and+ejs&sca_esv=a526368c5945871d&sca_upv=1&sxsrf=ADLYWIJrpd7oYEIGu-mW9WA-JCsTzXfPWQ%3A1724139965538&ei=vUnEZrPHIJnZ1e8P2Iqk6QI&ved=0ahUKEwjzmcHxiYOIAxWZbPUHHVgFKS0Q4dUDCA8&uact=5&oq=jsx+and+ejs&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2pzeCBhbmQgZWpzMgYQABgWGB4yCBAAGBYYChgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjxH1DUAljqEnABeAGQAQCYAXegAegGqgEDMi42uAEDyAEA-AEBmAIJoAKbB8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAgoQABiABBhDGIoFwgIFEAAYgATCAg0QABiABBixAxhDGIoFwgILEAAYgAQYkQIYigWYAwCIBgGQBhK6BgYIARABGAiSBwMyLjegB5Yq&sclient=gws-wiz-serp
// Syntax: EJS uses a syntax similar to regular HTML, where embedded JavaScript code is enclosed within <% %> tags. On the other hand, JSX combines HTML and JavaScript syntax directly, allowing developers to write JavaScript code within curly braces {}.
// Sai Teja@DESKTOP-D14OD9G MINGW64 ~/Downloads/MN/AfterJSMisc/5.Backend3
// $ cd ..

// Sai Teja@DESKTOP-D14OD9G MINGW64 ~/Downloads/MN/AfterJSMisc
// $ ls
// 1.Terminal/  2.Git/  3.Backend1/  4.Backend2/  5.Backend3/

// Sai Teja@DESKTOP-D14OD9G MINGW64 ~/Downloads/MN/AfterJSMisc
// $ nodemon 5.Backend3/index.js
// [nodemon] 3.1.4
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node 5.Backend3/index.js`
// listening on 8080

// Error: Failed to lookup view "home" in views directory "C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\views"
// at Function.render (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\application.js:597:17)
// at ServerResponse.render (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\response.js:1048:7)
// at file:///C:/Users/Sai%20Teja/Downloads/MN/AfterJSMisc/5.Backend3/index.js:17:9
// at Layer.handle [as handle_request] (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\layer.js:95:5)
// at next (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\route.js:149:13)
// at Route.dispatch (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\route.js:119:3)
// at Layer.handle [as handle_request] (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\layer.js:95:5)
// at C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\index.js:284:15
// at Function.process_params (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\index.js:346:12)
// at next (C:\Users\Sai Teja\Downloads\MN\AfterJSMisc\5.Backend3\node_modules\express\lib\router\index.js:280:10)

// https://www.npmjs.com/package/countdown