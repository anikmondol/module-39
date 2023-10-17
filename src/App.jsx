import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button Clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 10)
  }

  return (
    
    <>
      <h3>Vite + React</h3>
      <Friends></Friends>



      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick} className='styles'>Click Me</button>
      <button onClick={handleClick2} className='styles'>Click2</button>
      <button className='styles' onClick={() =>{
        alert('valo aco anik')
      }}>Third</button>
      {/* vejailla */}
      <button className='styles' onClick={() => addToFive(10)}>Ten + Ten</button>
    </>
  )
}

export default App
