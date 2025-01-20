import NavbarFooterWrapper from "@/components/HOC/NavbarFooterWrapper";
import LogIn from "@/components/pages-components/LogIn";
import auth from "../../firebase.init.js";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "@/hooks/useToken.js";

const LogInPage = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let from = location?.state?.from?.pathname || "/";
  const [token] = useToken(gUser || user);
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <NavbarFooterWrapper>
      <LogIn signInWithGoogle={signInWithGoogle} />
    </NavbarFooterWrapper>
  );
};

export default LogInPage;
