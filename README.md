# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Project Spec
Basically the front end just needs to be an interface so a client can join a network (maybe a join button), and to be a client and join network, they need to fill in 4 fields: w3 (the blockchain network endpoint, as a string), chain_id (integer), blockchain address (string), and private key (for blockchain address, also a string)
At the moment there's no verification to check if strings they input are valid. Also for private key, how I'm doing it is via an environment variable, do you think it's secure to input it as a string into the server?

A better option I think is if there's metamask integration (can do with js I'm fairly certain, saw it in a tutorial vid I was watching)
Actually before they join network, they'll select the model they are training (from a dropdown list). Then theywill join to be a client
They'll then be given the current global model at that point in time, to train (how is yet to be determined), and then they'll train using their local data, and updates are sent time-based, or number of rounds of training, to the blockchain via smartcontract (not front end). But I need to design the interface so that I can train the data locally, and it will automatically send to the network
How I'm doing that I don't know, because they'll interface with the front end, but also a part of it is done locally. Any ideas? I will look into it more as well

And then the front end will give them progress notifications, like 'update sent', 'rounds completed', 'current global round', 'total incentives earned,  (they get payment via the blockchain (ethereum) based on how much they train the model ), incentive earned (they get this incentive every time they send an update),
People can also choose to upload their own model (and they will have to set up the blockchain network etc) so that people can choose it from the dropdown list to train.