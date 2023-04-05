import React from 'react';
export default function Funct(props){
  if(props.a.every((ele)=>typeof ele==='string')){
    return (
        <div>
            <h1>list</h1>
            <p style={{fontSize:"2em"}}>{props.a[0]}</p>
            <p style={{fontSize:"2em"}}>{props.a[1]}</p>
            <p style={{fontSize:"2em"}}>{props.a[2]}</p>
            <p style={{fontSize:"2em"}}>{props.a[3]}</p>
            <p>Shows error when other than string is passed</p>
      </div>
    )
  }
  else{
      throw new Error('Error caught!!!');
  }
}