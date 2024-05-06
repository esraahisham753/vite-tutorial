import classes from "./style.module.css";

console.log('Server is running in ' + import.meta.env.MODE);
console.log(import.meta.env);
console.log(import.meta.env.VITE_SOME_KEY);

if (import.meta.env.DEV) {
    console.log('This is a development server');
}

document.querySelector("h1").className = classes.title;
