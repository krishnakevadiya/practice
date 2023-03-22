import React from 'react';
export default function Userprofile({username,avtar,title,skill}){
  return (
    <>
    <div id="maincon">
    <div>
    <div><h1>{username}</h1><button>Follow</button></div>
    <p>{title}</p>
    <img src={skill} alt="skill"/>

    </div>
    <img src={avtar} alt={username}/>
    </div>
    </>
  );
}
