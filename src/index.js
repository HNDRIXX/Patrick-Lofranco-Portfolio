import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./App"

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);

// import React, { useState } from 'react';

// const people = [
//   { name: 'Patrick' },
//   { name: 'Irine' },
//   { name: 'Blackeye' }
// ];

// const PeopleList = () => {
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   return (
//     <ul>
//       {people.map(person => (
//         <li key={person.name} onClick={() => setSelectedPerson(selectedPerson === person ? null : person)}>
//           {person.name}
//           {selectedPerson === person && <div>Hello, {person.name}</div>}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default PeopleList;
