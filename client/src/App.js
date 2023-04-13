import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

const BASE_URL = "https://crud-app-hosting-test-production.up.railway.app";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchUsersData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUser`);

    setUserData(resp.data.users);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
      {/* Form component */}
      <Form fetchUsersData={fetchUsersData} BASE_URL={BASE_URL} />

      {/* All user list */}
      <UserList
        userData={userData}
        setUserData={setUserData}
        fetchUsersData={fetchUsersData}
        BASE_URL={BASE_URL}
      />
    </div>
  );
}

export default App;
