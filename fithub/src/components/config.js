import { createChatBotMessage } from 'react-chatbot-kit';
import Start from './Start';
import Help from './Help';

const botName = JSON.parse(localStorage.getItem("userno"))

const config = {
  initialMessages: [createChatBotMessage(`Hi ${botName.userid}, welcome to FitHub.`,{widget:'Start'})],
  botName:"Fitness Expert",
  disabled:true,
  widgets: [
    {
      widgetName: 'Start',
      widgetFunc: (props) => <Start {...props} />,
    },
    {
      widgetName: 'Help',
      widgetFunc: (props) => <Help {...props} />,
    },
  ],
};

export default config;