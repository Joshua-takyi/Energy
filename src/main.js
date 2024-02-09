let btn = document.getElementById("btn");
let main = document.getElementById("main");

btn.addEventListener("click", () => {
	main.classList.toggle("class");
	console.log(main.className);
});
