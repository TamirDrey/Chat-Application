import Input from "../components/Input";

const Register = () => {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-1/2 items-center">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Register;
