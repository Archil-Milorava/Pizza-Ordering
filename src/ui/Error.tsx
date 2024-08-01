import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError()

  console.log(error);
  

  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <h1 className='text-center pt-28  text-4xl font-extrabold text-stone-700/50'>Something went wrong 😢</h1>
      <p className='text-center pt-28  text-xl font-extrabold text-stone-700/50'>{error.statusText || error.message || error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
