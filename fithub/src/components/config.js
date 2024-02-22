import { createChatBotMessage } from 'react-chatbot-kit';
import Start from './Start';
import Help from './Help';
import BotAvatar from './BotAvatar';
import UserAvatar from './UserAvatar';

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
  customComponents: {
   botAvatar: (props) => <BotAvatar {...props}/>,
   userAvatar: (props) => <UserAvatar {...props} />
 },
};

export default config;