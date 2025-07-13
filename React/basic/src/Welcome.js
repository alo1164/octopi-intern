// // Welcome.js
// function Welcome(props) {
//   return (
//     <div>
//       <h2>Welcome {props.name}!</h2>
//       <p>you are learning react!</p>
//     </div>
//   );
// }

export default Welcome;

//writing in destructuring format 
function Welcome({name}){
  return <h2> welcome {name}</h2>;
}
