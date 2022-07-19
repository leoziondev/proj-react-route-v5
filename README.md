# Project with React Router DOM V5

Learn and explore more about React Router DOM v5

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### __Start Json Server__
```
json-server --watch ./data/db.json
```

### __Solve ports conflict__
* Run first json server
* Only then run `npm start` so that there are no conflicts on the ports

### Ports
* JSON-SERVER `http://localhost:3000`
* REACT APP `http://localhost:3001`