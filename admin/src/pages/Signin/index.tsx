import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signin = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="w-[50%] mx-auto">
          <form className="flex flex-col space-y-6 mt-[50px]">
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

export default Signin;
