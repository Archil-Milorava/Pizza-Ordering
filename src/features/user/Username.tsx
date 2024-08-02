import { useSelector } from "react-redux"
import { RootState } from "../../types/types";


function Username() {

  const userName = useSelector((state: RootState) => state.user.userName);

if(!userName) return null;


  return (
    <div className='text-stone-700 text-sm hidden font-semibold md:block md:ml-32'>{userName}</div>
  )
}

export default Username