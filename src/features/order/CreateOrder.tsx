import { ActionFunctionArgs, Form, redirect, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../types/types";
import Button from "../../ui/Button";
//@ts-expect-error one js file
import { createOrder } from "../../services/apiRestaurant";



function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false)
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector((state: RootState) => state.cart.cart);
  const userName = useSelector((state: RootState) => state.user.userName)
  

  return (
    <div>
      
      <h2 className="my-4 ml-5 text-2xl text-center">Ready to order? Let's go!</h2>

      <Form method="POST" className=" space-y-8 align-center">
        <div className="mx-2 sm:flex sm:flex-row flex flex-col mb-2">
          <label className="sm:basis-40 ml-2 mb-1">First Name</label>
<div className="sm:grow">

          <input className="input" type="text" name="customer" defaultValue={userName} required />
</div>
        </div>

        <div className="mx-2 sm:flex sm:flex-row flex flex-col mb-2 ">
          <label className="sm:basis-40 ml-2 mb-1">Phone number</label>
          <div className="sm:grow">
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>

        <div className="mx-2 sm:flex sm:flex-row flex flex-col mb-2">
          <label className="sm:basis-40 ml-2 mb-1">Address</label>
          <div className="sm:grow">
            <input className="input" type="text" name="address" required />
          </div>
        </div>
<div className=" flex items-center gap-3 justify-center">

        <div className="flex items-center gap-1">
          <input
            className="h-4 w-4 accent-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority.toString()}
            onChange={(e) => setWithPriority(e.target.checked)}
            />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div >
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {" "}
            {isSubmitting ? "ordering..." : "order"}{" "}
          </Button>
            </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const order = {
    ...data,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
