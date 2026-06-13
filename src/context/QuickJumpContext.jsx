import { createContext, useContext, useMemo, useState } from "react";

/* Global state for the QuickJump panel so any page (e.g. the Home CTA)
   can open the panel that lives in the FolderShell. */
const QuickJumpContext = createContext(null);

export function QuickJumpProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <QuickJumpContext.Provider value={value}>
      {children}
    </QuickJumpContext.Provider>
  );
}

export function useQuickJump() {
  const ctx = useContext(QuickJumpContext);
  if (!ctx) throw new Error("useQuickJump must be used inside QuickJumpProvider");
  return ctx;
}
