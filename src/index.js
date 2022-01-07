import react from 'react'
import reactDom from 'react-dom';
//css
import './index.css';
const Firstimage= {
img :'data:image/jpeg;base64,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',
comali:'comali',
};
const Secondimage= {
img :'https://i.pinimg.com/564x/2f/d8/3e/2fd83e5a7d7b76cd846365796cd979bc.jpg',
eyes:'Eyes',
};
//retun single element
 //when giving name for tag it must be className='' not should be class=''
function Greeting(){
return(
  <section className='Name'>
    <Name img={Firstimage.img}
          comali={Firstimage.comali}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         A nesciunt ratione doloremque perferendis minima, sed delectus hic vero molestiae sint.</p>
    </Name>
  
    <Name img={Secondimage.img}
          comali={Secondimage.eyes}
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quae mollitia quos,
         consectetur vel ipsam! Nobis iusto cupiditate cumque consequuntur?</p>
      </Name>

  </section>
  
);
}
//.touppercase() use for make capital letter
//children only want to give as to name if you give some other name the para will not display
const Name = (about) =>{
 const {img,comali}=about;
 console.log(about)
  return(
<article>
  <img src= {img} alt=''/>
  <h4>{comali}</h4>
  {about.children}
</article>
  );
}
//<h6>{2+1}</h6>     output gives 3     

//const Image = () =>
//const About = () =><h1 style={{color:'red',fontSize:'0.75rem'}}>comali</h1>

//const Greeting =() =>{
  //return react.createElement('div',{},react.createElement('h1',{},'Hellow World!'))
//}


reactDom.render(<Greeting/>,document.getElementById('root'))