import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Toolbar, Footer, Editor } from "./components/exports";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [data, setData] = useState("");
  const length = countAlphanumericCharacters(data);
  const { theme } = useContext(ThemeContext);

  function countAlphanumericCharacters(str) {
    const alphanumericRegex = /[A-Za-z0-9]/g;
    const matches = str.match(alphanumericRegex);
    return matches ? matches.length : 0;
  }

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", data);
  }, [data]);
  return (
    <>
      {/* There will be a toolbar, editor, footer. But all having blending backgrounds.*/}
      <div className={`${theme}`}>
        <Toolbar />
        <Editor data={data} setData={setData} />
        <Footer length={length} />
      </div>
    </>
  );
}

export default App;
