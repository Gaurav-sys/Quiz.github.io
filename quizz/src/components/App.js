
import '../styles/App.css';
import Main from  './Main';

import Quiz from './Quiz';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Result from './Result';
const router= createBrowserRouter([
  {
  path:'/',
  element:<Main />
},
{
  path:'/result',
  element:<Result />
},
{
  path:'/quiz',
  element:<Quiz />
},
])
function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
