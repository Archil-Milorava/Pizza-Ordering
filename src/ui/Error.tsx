import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <h1 className="pt-28 text-center text-4xl font-extrabold text-stone-700/50">
        Something went wrong 😢
      </h1>
      <p className="pt-28 text-center text-xl font-extrabold text-stone-700/50">
        {"Page not found"}
      </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
