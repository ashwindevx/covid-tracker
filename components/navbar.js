import SignIn from "./signIn";

const Navbar = () => {
  return (
    <div className="flex px-4 justify-between items-center h-16 bg-zinc-800">
      <p>🏏 Criz</p>
      <SignIn value="Sign In" />
    </div>
  );
};

export default Navbar;
