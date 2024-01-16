import React, {useState} from 'react';


export default function TextBox(props) {

  const[ mystyle,setMystyle]= useState({
    color:'white',
    backgroundColor:'black',
  })
  const[modetext,setModetext] = useState('Dark mode');

  const mode = ()=>{
    if(mystyle.color === 'white'){
      setMystyle({
           color:'black',
           backgroundColor:'white',
      })
      setModetext('Light mode');
    }
    else{
      setMystyle({
        color:'white',
        backgroundColor:'black',
   })
   setModetext('Dark mode');
    }  
  }
    const handleupclick = ()=>{
        let newtext = text.toUpperCase();
         setText( newtext);
    }
    const handleonclick = ()=>{
        let newtext = text.toLowerCase();
         setText( newtext);
    }
    const handlecleareclick = ()=>{
         
          setText(" ");



    }
    const handlevowelsclick = ()=>{
        let sum  =0;
        for(let char of text){
         if(char == 'a' ||char == 'e'|| char == 'i' || char == 'o'|| char == 'u'){
               sum++;
         }
        }
         setSum(sum);
  }

    const handleonchange = (event)=>{
          setText(event.target.value)
    }
    const [text, setText] = useState('Enter your text here');
    const [sum,setSum] = useState(0);
     
  return (
    <div  className="p-5 border border-primary rounded mt-3"   style={mystyle}> 
    <div className='d-flex align-items-center  '>
        <h2 className="mt-3 mb-3 me-3">Enter the text to analyze below</h2>
    <div class="form-check form-switch">
         <input class="form-check-input" onClick={mode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label"  for="flexSwitchCheckDefault">{modetext}</label>
     </div>
        {/* <button  className="btn btn-primary h-25 "   onClick={mode}>{modetext}</button> */}
    </div>
   <div class="mb-3">
  <textarea className="form-control" value={text} style={mystyle}  onChange={handleonchange} id="mybox" rows="8"></textarea>
   </div>
   <button  className="btn btn-primary me-3 " onClick={handleupclick}>Convert to Uppercase</button>
   <button  className="btn btn-primary me-3" onClick={handleonclick}>Convert to Lowercase</button>
   <button  className="btn btn-primary me-3" onClick={handlevowelsclick}>Check number of vowels</button>
   <button  className="btn btn-primary" onClick={handlecleareclick}>Clear</button>

     <p className='mt-3'>Your text summary</p>
     <p>Character = {text.length} words = {text.split(" ").filter((a)=>{return a.length != 0;}).length}</p>
     <p>minuts to read the text = {text.split(" ").filter((a)=>{return a.length != 0;}).length*0.008}</p>
     <p>Total vovls in tour text is = {sum} </p>
    </div>
    
  )
}
