// import { useParams } from "react-router-dom";
import Router from "../component/Router";

// 카테고리(Link설정 후 to='카테고리1' => products로 내려주기) , products(받아온 '카테고리1'활용) , product
const Page2 = () => {
  //   const params = useParams();
  const page2Id = decodeURI(window.location.pathname).substring(1);
  //   console.log(params);
  console.log(page2Id);
  return (
    <>
      <Router />
    </>
  );
};

export default Page2;
