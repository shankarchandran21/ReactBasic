import React from 'react'

const Name = ({img,comali,eyes}) =>{
  const clickHandler=(e)=>{ //I declare e and print in console.log. it shows event in console
                            //The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.
  console.log(e);
    console.log(e.target);
    return alert('Hi Shankar')
  }
  const secondHandler=(comali)=>console.log(comali);//for clicking sanjay button it will display comali
 //const {img,comali}=about;
 //attribute,EventHandler.
 //onclick,onmouseover.
  return(
<article onMouseOver={()=>{
  console.log(comali);

}}>
  <img src= {img} alt=''/>
  <h4 onClick={()=>console.log(comali)}>{comali}</h4>
  <h3>{eyes}</h3>
  <button type='button'onClick={clickHandler}>CHINDU</button>
  <button type='button' onClick={()=>secondHandler(comali)}>Sanjay</button>
</article>
  );
};
//<h6>{2+1}</h6>     output gives 3     

//const Image = () =>
//const About = () =><h1 style={{color:'red',fontSize:'0.75rem'}}>comali</h1>

//const Greeting =() =>{
  //return react.createElement('div',{},react.createElement('h1',{},'Hellow World!'))
//}

export default Name
