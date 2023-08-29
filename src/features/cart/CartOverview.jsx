import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/helpers";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const quantity = useSelector(getTotalCartQuantity);
  const price = useSelector(getTotalCartPrice);

  if (!quantity) return null;

  return (
    <div className=" flex items-center justify-between bg-stone-800 text-stone-200 uppercase p-4 text-sm sm:px-6 md:text-base  ">
      <p className=" text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{quantity} pizzas</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
