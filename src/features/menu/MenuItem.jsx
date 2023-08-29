import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateQuantityItem from "../cart/UpdateQuantityItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    console.log("ciao");

    dispatch(addItem(newItem));
  }

  return (
    <li className=" flex gap-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className=" flex flex-col grow pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className=" mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className=" text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className=" flex items-center gap-3 sm:gap-8">
              <UpdateQuantityItem
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
