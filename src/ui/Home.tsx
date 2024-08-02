import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { RootState } from "../types/types";

function Home() {
  const userName = useSelector((state: RootState) => state.user.userName);
  return (
    <div className="my-10 text-center">
      <h1 className="my-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"} type="small">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
