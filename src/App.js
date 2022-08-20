import Child from './components/Child'

function App(){
  return <>
    <Child render={(x) => <h1>{x}</h1> } />
    <Child render={(x) => <p>{x}</p> } />
    <Child render = {(num, setNum) => {
        return <>
          <h3>current value - {num}</h3>
          <button onClick={() => setNum(num + 1)}>up</button>
          <button onClick={() => setNum(num - 1)}>down</button>
        </>
    }}/>
  </>
}
export default App