import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
   if(children.props.state.checker==="bmi")
   {
          if(message>0)
          {
           actions.handleBMI(message);
          }       
           else
          {
            actions.invalidBMI();
          }
}

if(children.props.state.checker==="review")
{
  let data = JSON.parse(localStorage.getItem("reviews")) || [];
  let name= JSON.parse(localStorage.getItem("userno"));
  let info={name:name.userid,response:message};
  data=[...data,info];
  localStorage.setItem("reviews",JSON.stringify(data));
    actions.submit();
}

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;