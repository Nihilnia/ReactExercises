import { useEffect, useState } from "react";
import Form from "./Form";

const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userz")) || []
  );

  const [tempData, setTempData] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    console.log(data);
  }, []);

  function handleChange(e) {
    let { name, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEnter(e) {
    if (e.key == "Enter") {
      console.log("Enter...");
      console.log("Current data..");
      console.log(tempData);
      setData((prev) => {
        return { ...tempData, ...prev };
      });
    }

    let asd = {
      tempData,
      ...data,
    };

    localStorage.setItem("userz", JSON.stringify(asd));
  }

  return (
    <>
      <Form eventChange={handleChange} eventEnter={handleEnter} />
      {/* {data.map((f) => {
        return (
          <>
            <h2>{f.userName}</h2>
            <h2>{f.password}</h2>
          </>
        );
      })} */}
    </>
  );
};

export default App;
