import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from "./pages/landing_page";

function App() {
  return (
	<BrowserRouter>
	  <Routes>
		<Route path="/" element={<Landing_Page />}>
		  {/* <Route index element={<Home />} />
		  <Route path="blogs" element={<Blogs />} />
		  <Route path="contact" element={<Contact />} />
		  <Route path="*" element={<NoPage />} /> */}
		</Route>
	  </Routes>
	</BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
// 	return (
// 		<h1 className="text-3xl font-bold underline">
// 			Hello world!
// 		</h1>
// 	)
// }

export default App;
