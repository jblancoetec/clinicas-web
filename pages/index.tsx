// import Home from "../src/home/Home";
import Home from "../components/_home/Home";
import HomeAdmin from "../components/gestion/home/Home";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();
  return session ? <HomeAdmin /> : <Home />;
};

export default Index;
