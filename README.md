# gamze-modal

gamze-modal is a modal library, is written in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

A library of React components created using `create-react-library`.

## Installation
Run the following command: `npm install gamze-modal`

### How to use

In a React app, use the modal component:

`import  Modal  from 'gamze-modal';`

You can add title, text or an image as a props.

Example :

`function App() {`

  `return (`
    `<div className="App">`
     `<Modal title={'Success!!'} text={'New employee has been created!!!'} image={logo} show=true}/>`
    `</div>`
  `);`
`}`

export default App;

 
## Changing CSS

You can some CSS of the modal.

Example :

 `<Modal title={'Success!!'} text={'New employee has been created!!!'} image={logo} show={true} backgroundColor={"beige"} buttonColor={'red'} buttonTextColor={'black'}/>`

 backgroundColor={} changes the backgroundColor of the modal.

 buttonColor={} changes the backgroundColor of the button.

 buttonTextColor={} changes the color of the text of the button.
  


 