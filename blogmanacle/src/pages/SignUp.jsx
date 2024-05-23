import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* try {
       const res = await fetch('/api/auth/signup',{
               method:"POST",
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(formData)
       })
    } catch (error) {
      
    } */
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1  text-white rounded-lg bg-gradient-to-r from-red-400 to-yellow-300">
              Manacle@mSell
            </span>
          </Link>
          <p className="text-sm mt-5" style={{ fontWeight: "bold" }}>
            You can login with your email and password or with Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="UserName:" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email:" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password:" />
              <TextInput
                type="text"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="redToYellow" type="submit">
              SignUp
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link
              to="/Sign-in"
              className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500"
            >
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
