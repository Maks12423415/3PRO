import { useState, useEffect } from "react";

export default function Strona2() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(pb.authStore.model);
  }, []);

  return <div>{user ? <h1>Strona2</h1> : ""}</div>;
}
