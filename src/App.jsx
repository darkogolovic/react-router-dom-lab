import { Route, Routes } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import MailboxList from './components/MailBoxList/MailboxList'
import MailBoxForm from './components/MailBoxForm/MailBoxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import { useState } from "react";

const App = () => {
  const [mailboxes,setMailboxes] = useState([]);

  const addBox = (data)=>{
    data._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, data]);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<main><h1>Post office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList  mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailBoxForm  onAddBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes= {mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
