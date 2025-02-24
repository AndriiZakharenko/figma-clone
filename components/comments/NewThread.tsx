import { ReactNode } from "react";

interface NewThreadProps {
  children: ReactNode;
}

const NewThread: React.FC<NewThreadProps> = ({ children }) => {
  return children;
};

export default NewThread;
