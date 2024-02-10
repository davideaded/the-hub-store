import { useState, useEffect } from 'react';
import '../styles/store.css';
import Item from './Item.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import data from '../data/items.json';
import brahmin from '../assets/brahmin.png';

function Store() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

	const toggleCartVisibility = () => {
		setIsCartVisible(!isCartVisible);
	};

  useEffect(() => {
    const hItems = data.map(i => (
      <Item
				key={i.id}
				{...i}
				quantity={null}
        handleClick={() => addToCart(i)}
      />
    ));
    setItems(hItems);
  }, []);

	const removeFromCart = (item) => {
		setCartItems(prevCartItems => {
			const itemIndex = prevCartItems.findIndex(i => i.id === item.id);

			if (itemIndex !== -1) {
				const newCartItems = [...prevCartItems];
				newCartItems.splice(itemIndex, 1);
				return newCartItems;
			}

			return prevCartItems;
		});
	};

	const addToCart = (selectedItem) => {
		setCartItems(prevCartItems => {
			const existingItem = prevCartItems.find(item => item.id === selectedItem.id);

			if (existingItem) {
				return prevCartItems.map(item =>
					item.id === selectedItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			const newSelectedItem = {
				...selectedItem,
				add: false,
				handleClick: () => removeFromCart(selectedItem),
				quantity: 1
			};

			return [...prevCartItems, newSelectedItem];
		});
};

  useEffect(() => {
    const newCart = <ShoppingCart items={cartItems} opened={isCartVisible} />;
    setCart(newCart);
  }, [cartItems, isCartVisible])

  return (
    <>
			<div className="miniCart" onClick={toggleCartVisibility}>
				<img src={brahmin} className="cartIcon" />
				<span className="cartItemCount">{cartItems.length}</span>
			</div>
      <div className="container">
        {items}
      </div>
			{isCartVisible && cart}
    </>
  );
}

export default Store;
