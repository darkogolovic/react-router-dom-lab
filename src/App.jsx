import { Route, Routes } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import MailboxList from './components/MailBoxList/MailboxList'
import MailBoxForm from './components/MailBoxForm/MailBoxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import { useState } from "react";
import LetterForm from "./components/LetterForm/LetterForm";


const App = () => {
  const [mailboxes,setMailboxes] = useState([]);
  const [letters,setLetters]= useState([])

  const addBox = (data)=>{
    data._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, data]);
  };
  const addLetter = (data)=>{
    setLetters([...letters,data])
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<main><h1>Post office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList  mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailBoxForm  onAddBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes= {mailboxes}  letters={letters}/>} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} onAddLetter= {addLetter}/>}/>

      </Routes>
    </>
  )
};

export default App;
