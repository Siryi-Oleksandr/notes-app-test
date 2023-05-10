import React from 'react';

function HaveNotNotes() {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>You haven't any notes yet</h2>
    </div>
  );
}

function IsNotChooseNotes() {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>Please choose any notes </h2>
    </div>
  );
}
export { HaveNotNotes, IsNotChooseNotes };
