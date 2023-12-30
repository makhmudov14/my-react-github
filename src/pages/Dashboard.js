import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {isLoading} = React.useContext(GithubContext);
  if(isLoading) {
    <main>
      <Navbar/>
      <Search/>
      <img src={loadingImage} alt='loading' classNmae='loading-img' />
    </main>
  }
  return (
    <main>
      <Navbar></Navbar> 
      <Search/>
      <Info/>
      <User/>
     <Repos/> 
    </main>
  );
};

export default Dashboard;