import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, increaseItem } from "./cartSlice";

function UpdateQuantityItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItem(pizzaId))} type="rounded">
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItem(pizzaId))} type="rounded">
        +
      </Button>
    </div>
  );
}
export default UpdateQuantityItem;
