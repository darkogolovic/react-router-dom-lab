import React from "react";
import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>MailboxList</h2>
      {mailboxes.length === 0 ? (
        "There is no one mailbox"
      ) : (
        <ul>
          {mailboxes.map((mailbox) => {
            return (
              <li key={mailbox._id}>
                <Link to={`/mailboxes/${mailbox._id}`}>
                  <p>Mailbox {mailbox._id}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MailboxList;
