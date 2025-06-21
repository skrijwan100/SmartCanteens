import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function CreateAdmin() {

  return (
    <div>
      <h1>Create Admin</h1>
      <p>To create an admin account, please contact the system administrator.</p>
      <p>For more information, refer to the documentation below:</p>
      <ReactMarkdown>
        {`
        ## Create Admin Documentation

        To create an admin account, follow these steps:

        1. Contact the system administrator.
        2. Provide your details and request admin access.
        3. Wait for confirmation from the administrator.

        **Note:** Only authorized personnel can create admin accounts.
        `}
      </ReactMarkdown>
    </div>
  );
}
