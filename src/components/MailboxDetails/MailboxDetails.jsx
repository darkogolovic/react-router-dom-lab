import React from 'react'
import { useParams } from 'react-router'

const MailboxDetails = ({mailboxes,letters}) => {
  const {mailboxId}= useParams();
  const selectedBox = mailboxes.find((mailbox)=> mailbox._id === Number(mailboxId));

  const selectedLetters = letters.filter((letter) => (
    letter.mailboxId === Number(mailboxId)
  ));

  return (
    
    <>
    <h2>MailboxDetails</h2>
    {selectedBox ? 
    
    <div className="mail-box">
      <p>Box number: {selectedBox._id}</p>
      <p>Box owner: {selectedBox.boxHolder}</p>
      <p>Box size: {selectedBox.boxSize}</p>
      <h3>Letters</h3>
      <ul>
        {letters.map((letter,index)=> <p key={index}>{letter.message}</p>)}
      </ul>
    </div> : 'Mailbox not found!'}
    </>
  )
}

export default MailboxDetails