import Login from "../components/login/Login";
import { useRouter } from "next/router";
const SignIn = () => {
  const router = useRouter();
  const error = router.query.error;
  return (
    <>
      <Login errors={error ? true : false} />;
    </>
  );
};
export default SignIn;
