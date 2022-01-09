import react from 'react'
import reactDom from 'react-dom';
//css
import './index.css';
import {Shankar} from './about'
import Name from './Name'; 
import {tests} from './testing/testing'
//retun single element
 //when giving name for tag it must be className='' not should be class=''
 //map() creates a new array from calling a function for every array element.
//Three dots ... represent spread operators.The spread operator is very useful when you want to make an exact copy of an existing array, you can use the spread operator to accomplish this quickly.
function Greeting(){
  console.log(tests);
  return (<section className='Name'>{Shankar.map((friends)=>{
    return <Name key={friends.id} {...friends}></Name>
  })}
  </section>
  );
}
//.touppercase() use for make capital letter
//children only want to give as to name if you give some other name the para will not display


reactDom.render(<Greeting/>,document.getElementById('root'))