import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <header>
           <h1>PACE UNIVERSITY</h1>
         </header>
         <div id="leftd">
           <div>
             <article>
               <h1>Costco</h1>
               <p>
                 April 01, 2018
               </p>
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
             </article>
           </div>
           <div>
             <article>
               <h1>
                 Walmart
               </h1>
               <p>
                 April 01, 2018
               </p><p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
             </article>
           </div>
           <div>
             <article>
               <h1>
                 ShopRite
               </h1>
               <p>
                 April 01, 2018
               </p><p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
             </article>
           </div>
         </div>

         <div id="rightd">
           <p style={{textAlign: 'center'}}><b>Links</b> <br />
           </p><aside>
             <ul>
               <li>
                 <a href="https://aws.amazon.com/">https://aws.amazon.com/</a>
               </li>
               <li>
                 <a href="https://www.udemy.com/">https://www.udemy.com/</a>
               </li>
               <li>
                 <a href="https://www.javatpoint.com/">https://www.javatpoint.com/</a>
               </li>
               <li>
                 <a href="https://www.netflix.com/">https://www.netflix.com/</a>
               </li>
               <li>
                 <a href="https://www.youtube.com/">https://www.youtube.com/</a>
               </li>
             </ul>
           </aside>
           <p />
         </div>


       <footer>
         MY FIRST STATIC WEB PAGE
       </footer>
       </div>
    );
  }
}

export default App;
