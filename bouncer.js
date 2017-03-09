var age = prompt("Enter your age in years!");

if(age < 0){
	alert("Error, age can't be negative");
}

else if(age < 18){
	alert("You are not old enough to enter our venue!");
}

else if(age === 21){
	alert("Go shawty! It's your birthday, we gon' party like It's your birthday!");
}

else if(age < 21){
	alert("You may enter our venue, but are not permitted to drink alcohol");
}
else if(age % 2 !== 0){
	alert("Your age is odd!");
}
else if(Math.sqrt(age) * Math.sqrt(age) === age ){
	alert("perfect square!");
}
else{
	alert("You may enter our venue, and you may also drink alcoholic beverages");
}

