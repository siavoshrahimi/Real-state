import React,{useState,useEffect} from 'react';
import Layout from './component/Layout/Layout';
import Home from "./container/Home/Home";

function App() {
const [scrollValue,setScrollValue] = useState(0);
useEffect(() =>{
    window.addEventListener('scroll',event =>{
        let scrollTop = window.scrollY;
        setScrollValue(scrollTop);
    });
    return () =>{
        window.removeEventListener('scroll',vent =>{
            let scrollTop = window.scrollY;
            setScrollValue(scrollTop);
            })

    }
},[]);
  return (
    <div>
        <Layout scrollVal={scrollValue}>
            <Home/>
        </Layout>
    </div>
  );
}

export default App;
