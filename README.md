# Getting Started with Create React App

### `yarn create react-app --template typescript`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Code coverage 
* is a metric that can help understand how much of the software code is tested

### `yarn coverage`

To see the detailed report of your project in tabular format.
- Stmts: Statement coverage percentage
- Branch: Branch coverage percentage
- Funcs: Functinos coverage percentage
- Lines: Lines coverage percentage
- Uncovered Line: line number which are not covered by any test

## With jest script in package.json 
Jest will fail
- if there is less than 80% branch, lines and function coverage
- or if there are more than 10 uncovered statements

* In coverage folder -> coverage Report -> index.html 
- if you open the index.html it will give the same report as the terminal with css
- if you select the file it also highlight the uncovered branch