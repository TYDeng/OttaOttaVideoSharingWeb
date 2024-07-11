//This the page display user's general contents
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNav from './components/UserNav';
import AccountSidebar from './components/AccountSidebar';
//import MainContent from './MainContent';

const userPage = () => {
  return (
    <div>
      <UserNav />
      <div className="container-xxxl mt-3">
        <div className="container-fluid">
            <div className="row">
            <AccountSidebar />
            <routes>
                
            </routes>
            {/* <MainContent /> */}
            </div>
        </div>
      </div>  
    </div>
  );
};

export default userPage;
