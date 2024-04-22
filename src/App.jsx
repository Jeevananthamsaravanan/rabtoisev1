import { Fragment, useState ,Suspense ,lazy } from "react";
import { Routes ,Route, Navigate  } from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loading from "./Pages/Loading";
const Home = lazy(()=>import('./Pages/Home')); 
const Error404 = lazy(()=>import('./Pages/Error404')); 

function App() {
  return (   
     <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
     </Suspense> 
  );
}

export default App;
