<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="src/images/meteorite.png" alt="Logo" width="80" height="80">

  <h3 align="center">Ecommerce for Ben</h3>

  <p align="center">
    An amazing site to view all the random things!
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-app-locally">Running The App Locally</a></li>
      </ul>
    </li>
    <li>
      <a href="#testing">Testing</a>
      <ul>
        <li><a href='#running-unit-tests'>Running Unit Tests</a></li>
        <li>
          <a href='#running-functional-tests'>Running Functional Tests</a>
        </li>
      </ul>
    </li>
    <li><a href="#build-and-deployment">Build and Deployment</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[Short Description About the App]

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [Material UI](https://mui.com/)
- [TestCafe (Coming Soon)](https://testcafe.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these simple steps to get the app running smoothly locally.

### Installation

1. Clone the repo
   ```sh
   git clone {github_repo_url}
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Running The App Locally

```sh
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TESTING -->

## Testing

### Running Unit Tests

Our unit tests are written with React Testing Library and Jest. To run them use:

```sh
npm run test
```

To run a specific file you can use:

```sh
npm run test -- {path to file}
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Running Functional Tests

Our functional tests are written with TestCafe. To run all of them use:

```sh
testcafe {browser} i.e. 'testcafe chrome'
```

To run specific models use:

```sh
testcafe {browser} {file} i.e. 'testcafe chrome test1.js'
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- BUILDING FOR DEPLOYMENT -->

## Build and Deployment

We are using GitHub Pages to build and deploy the app.

The `predeploy` in our react scripts will automatically run before the `deploy` step and kick off `npm run build`

`npm run build` will build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Once you are ready to deploy the code after developing any features or adding / removing any code, simply run the command:

```sh
npm run deploy
```

<p align="right">(<a href="#top">back to top</a>)</p>
