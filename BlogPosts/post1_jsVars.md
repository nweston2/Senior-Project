# JavaScript Variables

I have been teaching myself JavaScript. One of the first things I learned about was the different variable types and how to initialize them.

## Declaring Variables

Many things in JavaScript remind me a bit of Python. However, the more I learn about it, the more it reminds me of C#. For example, there is specific syntax associated with declaring variables.

There are three ways to declare variables:
* var
* let
* const

Unlike C#, you can technically forego the keyword when declaring a variable, but it is considered bad practice and can be confusing later on if a variable is not behaving the way you intended.

### var

For many years, this was the only variable type. However, as of 2015, this variable type is outdated. The let and const variables have replaced it. Variables should only ever be initialized with var if your website absolutely has to support old browsers (created prior to 2015). 

One of the major issues with var is that it is allowed to be reassigned.
```
var myvariable = 5
var myvariable = "dinosaur"
```
If your code is long, you can end up accidentally using multiple variables with the same name, overwriting them and causing many issues. 

### let

The "let" keyword allows you to initialize a variable that can change. This is good for variables that will need to be updated as your code runs. My initial thought was that this is a bit silly. Why wouldn't you allow all of your variables to have the ability to change just in case? I can now see the value of only allowing specific variables to vary. 

```
let year = 1989
year = 2015
```

If you try to reassign a let variable like you do with var, it will throw an error. However, you can update it, like in the code above, your code can be dynamic with much less room for variable related bugs.

### const

This is how you make a variable that can't change. Once initialized, it will remain the same throughout your code. It is considered good practice for all of your variables to be initialzed this way unless you know for sure they will need to be updated later. As I said above, it seemed a bit odd to me at first that you would make variables that can't actually vary. However, it is nice to know that you have some constants in your code. They can be relied on and referenced to make other values (some of the child variables can be initialized to be able to be updated, so you can use your constants as a foundation, then build your code to still be flexible). Also, worst case scenario: you realize you absolutely have to be able to update it later. You just need to go back and change it to let. So it makes sense that you should start your variables as constant unless you know for a fact that it will be updated (like a counter or a date or something like that).

```
const myName = "Noah"
```
