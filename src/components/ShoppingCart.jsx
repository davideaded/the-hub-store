import Item from './Item.jsx';
import '../styles/shoppingcart.css';

export default function ShoppingCart({items, opened}) {
	return (
		<div className={`shoppingCartContainer ${opened ? 'open' : ''}`}>
		{items.map(i => (
			<Item key={i.id} {...i}/>
			))
		}
		</div>
	)
}
