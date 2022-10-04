import React, { useState } from "react";

import DialogContext from "../Context/DialogContext";

function AuthProvider({ children }) {
  const [open, setOpen] = useState(false);

  const showDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog, open }}>
      {children}
    </DialogContext.Provider>
  );
}

export default AuthProvider;
