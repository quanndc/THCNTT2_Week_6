import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/news/all").then((response) => {
      setItems(response.data);
      console.log(items)
    });
  }, []);
  return (
    <div id="container">
      <div id="contents">
        {items.map((item) => (
          <div id="new-card" key={item.id} >
            <div id="new-photo-holder">
              <img src={item.photoURL} alt="" />
            </div>
            <div id="new-contents">
              {item.isNew == true ? <p id="is-new-cap">[ Tin vua len ]</p> : null}
              <div id="new-title">
                <h2>{item.title}</h2>
              </div>
              <div id="category">
                {item.isNew == false ? <p>{item.category + " - " + item.time} phút trước</p> : null}
              </div>
              <div id="description">
                <p>{item.description}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
export default App