interface props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: props) => {
  return (
    <div>
      <div>Cart</div>
      {cartItems.map((item) => (
        <ul>
          <li key={item}>{item}</li>
        </ul>
      ))}
      <button type="button" onClick={onClear}>
        Remove
      </button>
    </div>
  );
};

export default Cart;
