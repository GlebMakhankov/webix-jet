import getRandomIntInclusive from "./GetRandomInt";

export default function getRandomUser() {
	const users = [
		{
			Name: "John Smith",
			Email: "john@gmail.com",
			Status: 1,
			Country: 2,
		},
		{
			Name: "Albert Huji",
			Email: "ah@gmail.com",
			Status: 2,
			Country: 1,
		},
		{
			Name: "Jan Lewandowski",
			Email: "kingJan@gmail.com",
			Status: 1,
			Country: 1,
		},
		{
			Name: "Sam Smith",
			Email: "onlyOne@gmail.com",
			Status: 2,
			Country: 2,
		},
		{
			Name: "Frank Pinata",
			Email: "stranger@gmail.com",
			Status: 1,
			Country: 2,
		},
	];
	return users[getRandomIntInclusive(0, users.length - 1)];
}
