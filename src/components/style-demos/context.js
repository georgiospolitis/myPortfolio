import { createContext, useContext } from "react";

// How a demo is being shown: `compact` (card — first screen only) and the
// scale used to size image requests.
const DemoContext = createContext({ compact: false, imageScale: 1 });

export const DemoProvider = DemoContext.Provider;
export const useDemo = () => useContext(DemoContext);
