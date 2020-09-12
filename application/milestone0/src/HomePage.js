import React from 'react';
import './HomePage.css';
import Developer from './Developer';

function HomePage() {
    return (
        <div className="homePage" style={{backgroundColor:"#000000"}}>
            <div className="developers"style={{display:"flex", width:"100vw",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                <Developer name='Himanshu Garg' role='Team Lead' bio='I am a Computer Science Junior at SFSU.
                I am currently working as a Teaching Assistant for CSC 220, CSC 210 and Instructor for SCI 211.
                I love to create web and android based applications.' image={require('./images/himanshu.jpg')}/>
                <Developer name='Second Member' role='My Role' bio='My Bio.' image={require('./images/no-pic.jpg')}/>
                <Developer name='Third Member' role='My Role' bio='My Bio' image={require('./images/no-pic.jpg')}/>
                <Developer name='Fourth Member' role='My Role' bio='My Bio' image={require('./images/no-pic.jpg')}/>
                <Developer name='Fifth Member' role='My Role' bio='My Bio' image={require('./images/no-pic.jpg')}/>
                <Developer name='Sixth Member' role='My Role' bio='My Bio' image={require('./images/no-pic.jpg')}/>
            </div>

            
        </div>
    )
}

export default HomePage;
