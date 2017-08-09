# Angular 4, VueJS 2
## What ?

We are working on a big project based on Angular (starting with 2, and now using 4). And if we are almost satisfied with
this framework, there is a lot of parts that we dislike. One of them is the changeDetector.
This project is just the same app with one main component and 5 sub-components. 2 of them are fully isolated (Alone and
Counter), 1 has an input sent by main app, whereas 2 are linked together because the most nested one emit an output that
is listened by its parent.
 
## Why ?

I wanted to compare ng4 with VueJS and React in their different approach : VueJS and React only refresh the component 
that needs to whereas ng4 refresh all the components from the root one (don't forget that in non production mode, ng4 
does a double check, that's why you will see console more that needed) 

Why an isolated component, that doesn't rely on anything, and that doesn't expose anything, would make a full re-render 
of the components because something has changed inside it ? Other frameworks don't do that because they use reactive 
pattern, but Ng4 does.
I may do something wrong with Ng4, but i don't understand what, so if you can help me, you're welcome !

## Installation
### Angular

 * cd angular && yarn install
 * ng serve
 * open a browser on http:://localhost:4200 and open the developer console
 
### VueJS

 * cd vuejs && yarn install
 * npm run dev
 * a browser has been opened by npm, just open the developer console
 
### React

 * cd react && yarn install
 * npm start
 * a browser has been opened by npm, just open the developer console

## Todo
