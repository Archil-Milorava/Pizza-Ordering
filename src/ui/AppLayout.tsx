import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading';
  
  return (
    <div className="relative h-screen grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />
      <main className=" w-full h-full bg-stone-100 overflow-y-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
