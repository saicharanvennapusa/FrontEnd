import React, { useEffect } from "react";
import { useState } from "react";
import "./Practice.css";

const Practice = () => {
   const [currentStep, setCurrentStep] = useState("Name");
   const [count, setCount] = useState(0);
   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   const [users, setUsers] = useState(null);

   function Counter() {
      setCount((prev) => {
         return prev + 1;
      });
   }

   useEffect(() => {
      (async () => {
         const res = await fetch("https://dummyjson.com/users");
         const data = await res.json();
         console.log(data);
         setUsers(data);
      })();
   }, []);

   const makeSquares = () => {
      let squares = numbers.map((n) => n * n);
      setNumbers(squares);
   };

   const makeSquare = (index) => {
      const newNumbers = [...numbers];
      newNumbers[index] = newNumbers[index] ** 2;
      setNumbers(newNumbers);
   };

   return (
      <div>
         <input onChange={(e) => setCurrentStep(e.target.value)} value={currentStep} type="text" />

         <h1> Count: {count}</h1>
         <button className="incButton" onClick={() => Counter(count)}>
            Increment
         </button>
         <button className="decButton" onClick={() => setCount(count - 1)}>
            Decrement
         </button>

         <div className="cards">
            {users &&
               users.users.map((user) => (
                  <div className="card" key={user.id}>
                     <div className="card-inner">
                        <p>Name: {user.username}</p>
                        <p>Age: {user.age}</p> <img src={user.image} alt={user.username} />{" "}
                     </div>
                  </div>
               ))}
         </div>
         <div className="numbers">
            {numbers &&
               numbers.map((number, index) => (
                  <div
                     key={number}
                     className="number"
                     onClick={() => {
                        makeSquare(index);
                     }}
                  >
                     {number}
                  </div>
               ))}
         </div>

         <button className="incButton" onClick={() => makeSquares()}>
            Make Squares
         </button>
      </div>
   );
};

export default Practice;
