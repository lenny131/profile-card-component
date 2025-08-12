# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Technical Specifications](#technical-specifications)
  - [Overview](#overview-1)
  - [Built with](#built-with)
  - [Components](#components)
  - [Styles](#styles)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/lenny131/profile-card-component](https://github.com/lenny131/profile-card-component)
- Live Site URL: [https://lenny131.github.io/profile-card-component/](https://lenny131.github.io/profile-card-component/)

## Technical Specifications

### Overview

I chose to start with a simple project to learn React. I added a user selection dropdown list to demonstrate how the profile card is dynamically generated using input data, as opposed to the data being hardcoded in HTML.

### Built with

- HTML/CSS/JavaScript
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS Preprocessor
- [TypeScript](https://www.typescriptlang.org/) - Programming language, superset of JavaScript

### Components

#### ProfileCard

This project only displays data for a single user, but creating a component for the user profile
would make it easy to display multiple profile cards on a page, or display
the user profile on multiple pages. 
I used the `<article>` HTML element as the top level element; this is the
appropriate semantic element for independent sections which can be used on any page.

#### StatElement

I created a sub-component to use for each user stat, to avoid repetition of code in the ProfileCard component.
The StatElement takes parameters for description, value, and precision. If the value is at least 1,000, it will be displayed in units of one thousand. For example, 1,000 will be displayed as "1K". The precision paremeter can be specified to allow for decimal digits in "K" format.

#### UserSelector

Dropdown list for selecting user. This is not part of the original design, but I added it to demonstrate
the flexibility of the profile card.

### Styles

- Style presets are in the style-presets folder. This includes typography, colors, and spacing. These variables and mixins can be used anywhere else.
- Page-level styles are in the root src folder and contain page layout and background styles.
- Component styles are in the components folder.

## My Process

### What I learned

This is my first React project.

### Continued development

I will continue practicing React.

## Author

- Website - [Leonard Cohen](https://leonardmcohen.com)
- Frontend Mentor - [@lenny131](https://www.frontendmentor.io/profile/lenny131)
