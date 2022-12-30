import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/SideBar/Sidebar';
import './Home.css'
import Single from './Single/Single';
const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="home">
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </>
    );
};

export default Home;