import React from "react";
import { UserType } from "../Types/UsersType";

const Users = ({ users, value }: {
	users: UserType[],
	value: string
}) => {
	const filterUsers = (user: UserType) => {
		if(value === '') return user;
		return user.login.toLowerCase().includes(value.toLowerCase());
	}
	return (
		<section className="cards">
			{users?.filter(filterUsers)
				.map(({ id, login, avatar_url, type }) => {
				return (
					<div className="card" key={id}>
						<div className="card-body">
							<img className="card-avatar" src={avatar_url} alt={login} />
							<div className="card-content">
								<h3>{login}</h3>
								<p>{type}</p>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	)
};

export default Users;