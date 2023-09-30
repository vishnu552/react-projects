import { useContext, useState, createContext } from "react";

const AppContext = createContext();
export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ openSidebar, closeSidebar, isSidebarOpen, setPageId, pageId }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
