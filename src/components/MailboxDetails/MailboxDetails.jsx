import React from 'react'
import { useParams } from 'react-router'

const MailboxDetails = ({mailboxes}) => {
  const {mailboxId}= useParams();
  const selectedBox = mailboxes.find((mailbox)=> mailbox._id === Number(mailboxId));

  return (
    
    <>
    <h2>MailboxDetails</h2>
    {selectedBox ? 
    
    <div className="mail-box">
      <p>Box number: {selectedBox._id}</p>
      <p>Box owner: {selectedBox.boxHolder}</p>
      <p>Box size: {selectedBox.boxSize}</p>
    </div> : 'Mailbox not found!'}
    </>
  )
}

export default MailboxDetails