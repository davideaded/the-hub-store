import '../styles/item.css';
import { useState } from 'react';

export default function Item({name, image, value, handleClick, quantity = 0, add = true}) {
	const [quantityVal, setQuantityVal] = useState(quantity);

	const updateQuantity = (amount) => {
		setQuantityVal((prevQuantity) => Math.max(prevQuantity + amount, 1));
	};

	return (
		<div className="itemCard">
			<img src={image} />
			<h2>{name}</h2>
			<h3>Value: ${quantityVal !== 0 && quantityVal !== null ? value * quantityVal : value}</h3>
			{quantityVal !== null &&
				<div className="quantity">
					<button onClick={() => updateQuantity(-1)}>-</button>
					<h3>Quantity: {quantityVal}</h3>
					<button onClick={() => updateQuantity(1)}>+</button>
				</div>
			}
			<button onClick={handleClick}>{add ? "Add to cart" : "Remove from cart"}</button>
		</div>
	)
}
