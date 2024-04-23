import { useEffect } from "react";
import Custom_Hook from "../../Context/Custom_Hook";
import Here_Section from "../Home/Here_Section";

const About = () => {
  const { updateaboutpage } = Custom_Hook();

  useEffect(() => {
    updateaboutpage();
  }, []);
  return (
    <>
      <Here_Section />
    </>
  );
};

export default About;
