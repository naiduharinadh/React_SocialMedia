import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import randomColor from 'randomcolor'; // npm install randomcolor

// Styled component for message display
const MessageContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: '#FFF3E0', // Light orange background color for the container
  minHeight: '150px',
  overflowY: 'auto',
}));

const Message = styled('div')(({ color }) => ({
  padding: '8px',
  marginBottom: '8px',
  borderRadius: '4px',
  backgroundColor: color,
  color: '#333',
  wordWrap: 'break-word', // Ensure long words break and don't overflow
  maxWidth: '100%', // Ensure messages do not overflow the container
}));

const SendMessages = () => {
  const [messages, setMessages] = useState([]); // State to store an array of messages
  const [input, setInput] = useState('');       // State to store the input value

  // Function to handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle button click
  const handleSendClick = () => {
    if (input.trim()) { // Only add non-empty messages
      setMessages([...messages, { text: input, color: randomColor() }]); // Append the new message with a random color
      setInput(''); // Clear the input field
    }
  };

  return (
    <div>
      <TextField
        label="Type your message here"
        variant="outlined"
        value={input}
        onChange={handleInputChange}
        fullWidth
      />
      <Button className='sendbutton'
        onClick={handleSendClick}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        Send ➔
      </Button>
      <MessageContainer>
        {messages.map((msg, index) => (
          <Message key={index} color={msg.color}>
            {msg.text}
          </Message> // Display each message with a different background color
        ))}
      </MessageContainer>
    </div>
  );
};

export default SendMessages;
