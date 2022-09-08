import axios from "axios";
import React, { useState, useEffect } from "react";

function ApiCalls() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=a4WRxKrUc0Xt2a1IXvYznsRlH5D0WX0L")
			.then((response) => {
				setUsers(response.data.results);
				console.log(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{users.map((reviews) => {
				return (
					<div key={reviews.data}>
						<h1>title:{reviews.byline}</h1>
						<h1>body:{reviews.display_title}</h1>
						<img src= {reviews.multimedia?.src} />
					</div>
				);
			})}
		</div>
	);
}

export default ApiCalls;
