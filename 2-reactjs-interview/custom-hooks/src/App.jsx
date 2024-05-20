
import './App.css'
import Counter from './components/Counter'
import useWindowSize from './hooks/use-window-size'

function App() {
  const {width,height} = useWindowSize()
  return (
<div>
  <h2>
    Custom Hooks Interview Question in React
  </h2>
  <h5>what are custom hooks</h5>
  {/* Custom hooks in react are functions that allow you to extract  */}

<h5>
  Question1 : Build a Custom hook to manage and update a counter with appropriate functionalities.
  <Counter/>

</h5>
<h5>
  Question2 : Build a Custom hook to efficiently tracka and update window dimensions dynamically.
</h5>
<p>Width:{width}</p>
<p>Height:{height} </p>
</div>
  )
    
}

export default App
