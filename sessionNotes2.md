/** Jo Dikhta Hai, Vo Bikta Hai **/

E10 P2 - TOPICS
Tailwind CSS
Configuring CSS

## Tailwind CSS

> Rapidly build modern websites without ever leaving your HTML
> Dont have to leave you HTML/JSX and still style your components without switching files
> Works with all Frameworks and normal CSS/JS

## Configuring Tailwind CSS

> We need to first click on Framework Guides -> Parcel (Since we are using Parcel)
> It comes as a package(installs two packages tailwindcss and postcss)

npm install -D tailwindcss postcss
npx tailwindcss init (We are initalizing the tailwindcss into our repository)

npx tailwindcss init - creates a tailwind.config.js (Automatically created)

## postcss(tailwindcss uses postcss behind the scenes)

> Tool for transforming CSS with javascript
> Bascially if we want to transform CSS inside javascript we use postcss

## Create a configuration for postcss

> Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
> We write the below code in our .postcssrc file

{
"plugins": {
"tailwindcss": {}
}
}

> Telling our postcss that we are using tailwindcss
> NOTE - Parcel(bundler) need to use postcssrc to read/understand tailwindcss

## Configure your template paths in tailwind.config.js

content: [
"./src/**/*.{html,js,ts,jsx,tsx}",
],

> this configuration means the content attribute takes an array/list of the files where I can use my tailwindcss
> what files we can find our tailwindcss

## Add the Tailwind directives to your CSS

Adding these in our index.css file/ adding tailwindcss into our file

@tailwind base;
@tailwind components;
@tailwind utilities;
