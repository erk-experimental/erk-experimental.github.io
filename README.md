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

### Hosting on GitHub Pages

1. Create a new GitHub account (or use an existing one)
2. Go to repositories > create new repository

   a. Give it any name

   b. Make it public (must be public for Pages to work)

   c. Leave the other options at their default and create

3. Install Git command line tools

   a. Mac: Press `CMD + Space`, type "terminal", hit Enter. At the Terminal, type the command `git --version` and hit Enter. Follow the prompts to install.

   b. Windows: Go to (https://git-scm.com/downloads/win) and download the Standalone Installer.
