
let score=0;
let wicket=0;
let ballWiseResult=[];
let hit=0;
let inputRef= React.createRef();
//one way to use event 
// function addOne(){
//     score +=1;
//     ballWiseResult.push(1);
//     ReactDOM.render(<App />, document.getElementById("root"));
// }
// second way to use event 
function addScore(num){
    // if(wicket < 10){
    // ballWiseResult.push(num);
    // score +=num;
// }
hit=num;
ReactDOM.render(<App />, document.getElementById("root"));

}
// fuction update wicket
function addWicket(){
    hit="W"
    // if(wicket < 10){
    // ballWiseResult.push("W");
    // wicket +=1;
    // }
    ReactDOM.render(<App />, document.getElementById("root"));

}

// to handle submit button
function handleSubmit(e){
e.preventDefault();
if(hit=="W"){
    wicket += 1;
}else{
    score +=hit;
}

ballWiseResult.unshift(
//to add hit and comment in array at starting of the array
<span>{`${hit},${inputRef.current.value}`}</span>
);  
// after adding hit and comment to array set it to 0
hit=0;
inputRef.current.value=" ";
ReactDOM.render(<App />, document.getElementById("root"));

}
// component for buttons
const ScoreButton = ()=>(
<div>
<button onClick={()=> {addScore(0)}}>0</button>
{/* Not passing argument in function */}
<button onClick={()=> {addScore(1)}}>1</button>

{/*passing argument in function */}
<button onClick={()=> {addScore(2)}}>2</button>
<button onClick={()=> {addScore(3)}}>3</button>
<button onClick={()=> {addScore(4)}}>4</button>
<button onClick={()=> {addScore(5)}}>5</button>
<button onClick={()=> {addScore(6)}}>6</button>

<button onClick={addWicket}>Wicket</button>
</div>
)

// component for ballwise result
const Result = ()=> (
<div>
   {ballWiseResult.map((res,index)=>(
  <>
   { (index%6 === 0 ? <br/>:null)}
        <span>{res===0?<strong>.</strong>:res}</span>
        &nbsp;
  </>
    ))}
</div>
)

// Form component
const Form =()=>(
    <form onSubmit={handleSubmit}>
        <input value={ hit }/>
        <input ref={inputRef}/>
        <button>Submit</button>
    </form>
)
const App = () => (
<>
<h1>SCORE KEEPER</h1>
<h2>SCORE: {score}/{wicket}</h2>
<ScoreButton />
<br />
<br />
<Form />
<hr />
 {/* to show submitted score in input field*/}
{ballWiseResult.map((res,index)=>(
    <p key={index}>{res}</p>
))}
{/* <Result /> */}
</>
)
// const rootElement=ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />)

ReactDOM.render(<App />, document.getElementById("root"));

