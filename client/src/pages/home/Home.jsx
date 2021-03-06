import "./home.scss";
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
  
    useEffect(() => {
      const getRandomLists = async () => {
        try {
          const res = await axios.get(
            `lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDNmMDdjODAyNWE5MzllOGJmZmNiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDgyNDMyMiwiZXhwIjoxNjQ1MjU2MzIyfQ.O4PVYipgq4aUni-sHpNnhf4_fWUIcI-mVLL1Tw0Ocao"
              },
            }
          );
          setLists(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomLists();
    }, [type, genre]);
  
    return (
      <div className="home">
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
    );
  };
  
  export default Home;
