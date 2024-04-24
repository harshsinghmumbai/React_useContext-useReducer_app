import Here_Section from "./Hero_Section";
import Custom_Hooks from "../../Context/Custom_Hook";
import { useEffect } from "react";

const Home = () => {
  const { updatehomepage } = Custom_Hooks();

  useEffect(() => {
    updatehomepage();
  }, []);
  return (
    <>
      <Here_Section />
    </>
  );
};

export default Home;
