import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signup = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="w-[50%] mx-auto">
          <form className="flex flex-col space-y-6 mt-[50px]">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
              <Input
                className="flex-1"
                label="First Name"
                placeholder="First Name"
                type="text"
                onChange={() => {}}
              />
              <Input
                className="flex-1"
                label="Last Name"
                placeholder="Last Name"
                type="text"
                onChange={() => {}}
              />
            </div>
            <Input
              label="Email Address"
              placeholder="Email Address"
              type="text"
              onChange={() => {}}
            />
            <Input
              label="Email Address"
              placeholder="Email Address"
              type="text"
              onChange={() => {}}
            />
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              onChange={() => {}}
            />
            <button className="bg-blue-600 py-2 px-4 rounded-md text-white w-36">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
