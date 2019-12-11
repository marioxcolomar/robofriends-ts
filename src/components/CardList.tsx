import * as React from "react";
import Card from "./Card";
import { IRobot } from '../App'

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
	return (
		<div>
			{robots.map((rb, i) => {
				return (
					<Card
						key={i}
						id={rb.id}
						name={rb.name}
						email={rb.email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
