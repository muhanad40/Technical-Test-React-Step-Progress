## React Steps Progress Component

A simple React application that has a steps progress component. The user is only allowed to select the next or previous step. The user cannot skip a step and select the one after. The component will render if it's given a minimum of 2 and maximum of 5 steps.

I've used stateless components where necessary, but also used a stateful component along with some lifecycle methods. I couldn't use the other available lifecycle methods because there's not much use for them for such a simple application. I didn't use Redux/Flux because it would be an overkill.

#### Time taken to complete:
About 5 hours, but not in one go. Context switching and project setup slowed me down unfortunately.

#### Setup
- `git clone git@github.com:muhanad40/React-Step-Progress.git`
- `cd React-Step-Progress`
- `npm install`

#### Run the demo
- `npm start`
- Point your browser to http://localhost:3000/

#### Run the tests
`npm test`

