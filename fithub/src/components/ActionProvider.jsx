import React, { useState } from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  let [b,setB]=useState("");
  let [data1,setData1] = useState([]);
  let [data2,setData2] = useState([]);
 
   const workouts=()=>
   {
      let info= data1.filter((temp)=>temp.benefits.includes(b));
      review()
      return info;
   }

   const diet=()=>
   {
      let info= data2.filter((temp)=>temp.benefits.includes(b));
      review()
      return info;
   }

   const review=()=>
   {
    const botMessage = createChatBotMessage("Please provide a feedback for our application.") ;
    updateMessage(botMessage,"review")
   }

   const submit=()=>
   {
    const botMessage= createChatBotMessage("Thankyou for your response!")
    updateMessage(botMessage);
   }

   const getworkout=()=>
  {
    fetch("http://localhost:4000/workouts")
    .then((temp)=> temp.json())
     .then((temp) => setData1(temp))
     .catch((err)=>console.log(err))
  }

  const getdiet=()=>
  {
    fetch("http://localhost:4000/diet")
    .then((temp)=> temp.json())
     .then((temp) => setData2(temp))
     .catch((err)=>console.log(err))
  }

const handleBMI=(bmi)=>
{
  if(bmi<=18.5)
  {
    const botMessage = createChatBotMessage("You are under weight.\nPlease, select how can i help you?",{widget:"Help"}) ;
    setB("underweight");
    updateMessage(botMessage);
  }
  else if(bmi>18.5 && bmi<=25)
  {
    const botMessage = createChatBotMessage("You are Fit.\nPlease, select how can i help you?",{widget:"Help"}) ;
    setB("fit");
    updateMessage(botMessage);
  }
  else if(bmi>25 && bmi<=29.5)
  {
    const botMessage = createChatBotMessage("You are over weight.\nPlease, select how can i help you?",{widget:"Help"}) ;
    setB("overweight");
    updateMessage(botMessage);
  }
  else
  {
    const botMessage = createChatBotMessage("You are obese.\nPlease, select how can i help you?",{widget:"Help"}) ;
    setB("obese");
    updateMessage(botMessage);
  }
  getworkout();
  getdiet();
}

const initialAction=()=>
{
    const botMessage = createChatBotMessage("Please enter your BMI.") ;
    updateMessage(botMessage,"bmi");
};

const invalidBMI=()=>
{
  const botMessage = createChatBotMessage("Please enter a valid BMI.") ;
  updateMessage(botMessage,"bmi");
};

const updateMessage=(message,checker="")=>
{
  setState((prev)=>({
    ...prev,
    messages: [...prev.messages, message],
    checker
}));
}


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {initialAction,handleBMI,invalidBMI,workouts,diet,submit},
        });
      })}
    </div>
  );
};

export default ActionProvider;