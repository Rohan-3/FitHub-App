import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { FcAssistant } from "react-icons/fc";
import "../App.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'red',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ChatBotModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{borderRadius:"50px",width:"100px", height:"100px"}}><FcAssistant style={{width:"100px",height:"100px"}}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </Box>
      </Modal>
    </div>
  );
}
export default ChatBotModal;