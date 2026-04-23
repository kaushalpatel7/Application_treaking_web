import "./App.css"
export default function MyApp() {

const data = {
  "name" : "kaushal",
  "age" : 19
}


  function MyButton() {
    
    return (
    <button >
      I'm a button
    </button>
  );
}
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/><br />

      {data.name} {data.age}
    </div>
  );
}
