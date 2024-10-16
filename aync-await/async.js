function wait(timeInSecond) {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (timeInSecond <= 1) {
				console.log(`Waiting time for ${timeInSecond} second is finished`);
			} else {
				console.log(`Waiting time for ${timeInSecond} second(s) is finished`);
			}

			resolve();
		}, timeInSecond * 1000);
	});
}

class UserNotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = constructor.name;
	}
}

async function getUser(id) {
	await wait(1);

	if (id === 10) {
		throw new UserNotFoundError(`User not found for id ${id}`);
	}

	return {
		id: 12,
		name: "Chandan",
		age: 22,
	};
}

// let user = getUser(1).then(user=>console.log(user)).catch(error=>console.log("Error occured"));

let user
try {
	user = await getUser(1)
	
} catch (error) {
	console.log("Error occured")
}

console.log(user);