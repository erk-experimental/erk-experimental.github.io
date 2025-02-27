# Rafael Avalos' personal website

### https://www.rafaelmaitra.com/

## High level site organization

```
main
|
App
| - SpeedDialNavbar
| - HomePage
| - PortfolioPage
|   | - PortfolioCarousel
|   | - PortfolioSlideshow
|   | - Running
|   | - Engineering
|   | - Music
|   | - Writing
|   |   | - TypewriterText
|   | - Lego
```

## Technologies used

| Type           | Name                      |
| -------------- | ------------------------- |
| **Language**   | TypeScript                |
| **Framework**  | React                     |
| **Build tool** | [Vite](https://vite.dev/) |

| Additional tools                |                                                  |
| ------------------------------- | ------------------------------------------------ |
| Tailwind CSS                    | Easier styling than pure CSS                     |
| Material UI                     | Library of nicely designed UI components         |
| [Swiper](https://swiperjs.com/) | Provides the fancy carousel/slideshow components |
| [Motion](https://motion.dev/)   | Toolkit for building animations                  |

## Develop and run

1. [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Run `npm install`
3. Run `npm run dev`
4. In a browser, open the URL `http://localhost:5173/`

### Making basic changes to the website

TailwindCSS is really handy for styling because it provides predefined CSS classes that apply styling for you. You can look through their website to find the class names, but it's honestly easier to ask ChatGPT.

Example: "What's the tailwind class for adding margin above the element?"

#### Text changes

All text can be found inside the HTML content of the corresponding `*.tsx` file

For example, to change the text on the Running page, look for it in `Running.tsx`

#### Adding/removing pages

Let's say we're adding a new Contact page.

1. Create a new folder in `pages/` called `contact`
2. Create the contact component file in that folder. File should be something like `pages/contact/ContactPage.tsx`
3. In `App.tsx`, add a new `<Route />` element for `ContactPage`. The `path` parameter is the browser URL path.
4. In `SpeedDialNavbar.tsx`, add a new item for Contact to `navItems` (icons can be found [here](https://mui.com/material-ui/material-icons))
5. Build out the `ContactPage.tsx` component, and you should see it when you run the application

To remove a page, follow the steps in reverse, deleting instead of creating.

#### Adding portfolio projects

Let's say we're adding a new Lego page.

1. Create a new folder in `pages/portfolio/` called `lego`
2. Create the lego component file in that folder. File should be something like `pages/portfolio/lego/Lego.tsx`
3. In `const/projects.ts`, add a title for Lego to `ProjectTitles`, and an item for it to the `projects` variable
4. In `PortfolioPage.tsx`...

   a. Add a ref entry to the `projectRefs` variable

   b. Add a `<div />` element for `Lego`. Follow the existing examples.

   c. You can change the order of the projects on the page by rearranging the `divs`

## Production build

```
npm run build
```

Built project can be found in the `./dist/` folder. Upload the contents to your hosting solution (Github Pages, Amazon S3, etc).

## Manage hosting and domain

If you get stuck on any of these steps, ChatGPT should be able to help out pretty effectively.

### Set up Git

1. Create a new GitHub account (or use an existing one)
2. Download and install [GitHub Desktop](https://github.com/apps/desktop)

   a. Assuming you're on Mac, unzip the downloaded file and drag the `GitHub Desktop` application to the `Applications` folder

3. Run GitHub Desktop and sign in
4. Use default options to Configure Git

### Download the project

1. In a browser, open `https://github.com/erk-experimental/rafael.git`
2. Click the green `Code` button, then `Download Zip`
3. Unzip the file and move the folder to anywhere on your computer

### Upload to your own repository

1. In GitHub Desktop, click `add existing repository from local drive`
2. For `local path`, choose the folder you just downloaded
3. Click `add repository`. **There will be an error.**
4. In the error message, click `create a repository`
5. Give it any name, and leave all options at their defaults
6. Create repository
7. At the top, click `Publish repository`
8. Uncheck "keep this code private" (it must be public for GitHub Pages to work)
9. Publish it

Now if you open up (https://github.com/) and login, you should be able to see the new repository.

### Hosting on GitHub Pages

[TODO]: Finish this section
