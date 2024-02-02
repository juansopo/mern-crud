import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginForm } from "../components/Forms/Login/index";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signin, error: signinError, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) navigate("/socios");
  }, [isAuthenticated, navigate]);

  return (
    <LoginForm
      register={register}
      onsubmit={onSubmit}
      errors={errors}
      signinError={signinError}
    ></LoginForm>
  );
}
export default LoginPage;
