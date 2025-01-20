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
import { useDispatch } from "react-redux";
import { login, setData } from "@/redux/reducers/userSlice.js";

const LogInPage = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, uUser, uLoading, uError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let from = location?.state?.from?.pathname || "/";
  const [token] = useToken(gUser || uUser);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  useEffect(() => {
    if (token) {
      if (gUser) {
        dispatch(login(gUser.user.email));
        dispatch(setData(gUser?.user?.reloadUserInfo));
      }
      navigate(from, { replace: true });
    }
  }, [token, from, navigate, gUser, dispatch]);

  return (
    <NavbarFooterWrapper>
      <LogIn
        signInWithGoogle={signInWithGoogle}
        gLoading={gLoading}
        gError={gError}
        uLoading={uLoading}
        uError={uError}
        updating={updating}
        updateError={updateError}
      />
    </NavbarFooterWrapper>
  );
};

export default LogInPage;
