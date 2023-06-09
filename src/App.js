import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter ,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  let pageSize = 8;
  let apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <HashRouter  basename={process.env.BASE_NAME}>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/newslive" element={<News setProgress={setProgress}  apiKey={apiKey}   key="genral" pageSize={pageSize} counry="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey}  key="business" pageSize={pageSize} counry="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey}  key="entertainment" pageSize={pageSize} counry="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey}  key="health" pageSize={pageSize} counry="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}  key="science" pageSize={pageSize} counry="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey}  key="sports" pageSize={pageSize} counry="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey}  key="technology" pageSize={pageSize} counry="in" category="technology" />}></Route>
          </Routes>

          <Footer/>
        </HashRouter>
      </div>
    )

}
export default App