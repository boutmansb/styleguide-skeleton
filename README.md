# Styleguide Skeleton
This is a basic skeleton for quickly creating a styleguide.

## Setup
### Installation
1. Clone the repo.
2. run `npm install`.
3. You might need to install Gulp. You can do this by `npm install -g gulp`.

### Run
To start the styleguide just run `gulp dev`. This will compile the styleguide and start a local server on `http://localhost:8090`.

### Build
If you only want to compile/build the css you can run `gulp dist`. This will only compile all of the sass and copies the images to the dist folder without starting the local server and generating the styleguide.

### Basic structure
After you run `npm install` and `gulp dev` for the first time, you'll have a folder structure like this.
- **root**
	- node_modules
	- **dist** - where your compiled and autoprefixed styles will go.
	- **images** - Contains all of our images/icons we use. These get copied to the dist folder when compiling the css.
	- **fonts** - Contains all of our local fonts we use. These get copied to the dist folder when compiling the css.
	- **sass** - where your style files go.
	- **styleguide** - where your style library is generated.

## BEM notation
We use the BEM notation in our stylefiles. This has a few advantages:
- Avoids inheritance and provides some sort of scope by using unique CSS classes per element (like `.my-component__list-item`).
- Reduces style conflicts by keeping CSS specificity to a minimum level.

For more information about BEM you can get out [their documentation](http://getbem.com/introduction/)

## SASS Structure
To seperate the styles in a logical way, we use the atomic design system. Just a quick overview of atomic design:

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are:

1. Atoms
	- Atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
2. Molecules
	- Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
3. Organisms
	- Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface. (example: header containing search form)
4. Templates
	- Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.
5. Pages
	- Pages are specific instances of templates that show what a UI looks like with real representative content in place. Building on our previous example, we can take the homepage template and pour representative text, images, and media into the template to show real content in action.