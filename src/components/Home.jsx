import '../styles/home.css';
import thehub from '../assets/thehub.png';

export default function Home() {
	return (
		<div className="mainText">
			<p>
				The Hub is the most important settlement and trading center in the Wasteland. Established in an old town untouched by the Great War, it serves as the major supplier of water and agricultural goods to New California, thanks to the plentiful farms located around the city. The diversified products traded by resident caravans include chems, tires, guns, bullets, food, brahmin, dirt, and even scraps of metal.<br /> <br />

				Now, this marvelous trade is available online! Enjoy affordable and high-quality merchandise with a fast brahmin delivery system, all within a couple of clicks on your mainframe!"
			</p>
			<img src={thehub} />
		</div>
	)
}
