import React from "react";

const Header = ({ applicationName }: {
	applicationName: string
}) => (
	<header>
		<h1>{applicationName}</h1>
	</header>
);

export default Header;