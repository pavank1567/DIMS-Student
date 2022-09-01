import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import List from './MyComponents/List'
import Home from './MyComponents/Home'
import {Display} from './MyComponents/Display'
import { ClassList } from './MyComponents/ClassList';
import { StudentList } from './MyComponents/StudentList';
import { Profile } from './MyComponents/Profile';
import { Login } from './MyComponents/Login';
import {EditProf} from './MyComponents/EditProf'
import { StudentList2 } from './MyComponents/StudentList2';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/list' element={< List/>}></Route>
          <Route exact path='/display' element={<Display/>}></Route>
          <Route exact path='/classList' element={<ClassList />}></Route>
          <Route exact path='/stuList' element={<StudentList2/>}></Route>
          <Route exact path='/stuProfile' element={<Profile/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/editProfile' element={<EditProf/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
