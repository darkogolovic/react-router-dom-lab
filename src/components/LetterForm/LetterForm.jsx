import { useState } from "react";
import { useNavigate } from "react-router";

const LetterForm = ({ mailboxes,onAddLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mailboxId") {
      const selectedMailbox = mailboxes.find(
        (mailbox) => String(mailbox._id) === String(value)
      );

   
      setFormData((prev) => ({
        ...prev,
        mailboxId: value,
        recipient: selectedMailbox ? selectedMailbox.boxHolder : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    onAddLetter(formData);
    setFormData({mailboxId: "",
    recipient: "",
    message: "",
    })
    navigate('/mailboxes')

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="selectMailbox">Select a Mailbox</label>
      <select
        id="selectMailbox"
        name="mailboxId"
        value={formData.mailboxId}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        {mailboxes.map((mailbox) => (
          <option value={mailbox._id} key={mailbox._id}>
            {`Mailbox ${mailbox._id}`}
          </option>
        ))}
      </select>

      <label htmlFor="recipient">Recipient</label>
      <input
      id="recipient"
        type="text"
        name="recipient"
        placeholder="Recipient name"
        value={formData.recipient}
        readOnly
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows={2}
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LetterForm;
