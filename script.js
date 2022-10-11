// sticky second top header nav

// let nav = document.getElementById("second-Subnav");
// let sticky = nav.offsetTop;
// window.onscroll = function () {
// 	sticker();
// };
// function sticker() {
// 	if (window.pageYOffset >= sticky) {
// 		nav.classList.add("is-sticky");
// 	} else {
// 		nav.classList.remove("is-sticky");
// 	}
// }

// scroll to top funcion
// async function scrollToTop() {
// 	window.scrollTo(0, 0);
// 	window.scroll({
// 	top: 0,
// 	left: 0,
// 	behavior: 'smooth'
// 	});
// 	window.scrollTo({ top: 0, behavior: "smooth" });
// 	await new Promise(res => setTimeout(res, 10000));
// }

async function scrollTime() {
	// var time = 5; //seconds
	// var y = document.documentElement.scrollTop; //get y position of scroll
	// var duration = y/time; //calcule duration steps
	window.scrollTo({ top: 0, behavior: "smooth" }); //move to position y
	await new Promise((res) => setTimeout(res, 5000));
	// while(y>0)
	// {
	//    // y = y-duration; //subtract by duration
	//     window.scrollTo({top: 0, behavior: 'smooth'}); //move to position y
	//     await new Promise(res => setTimeout(res, 5000)); //await function with 1000 ms by steps
	// }
}

// Flashing title
let activeAlert = false;
const title = "LinkHasDie";
const msg = "(47) New Messages";
const changeTitle = setInterval(() => {
	if (activeAlert == false) {
		document.title = title;
		activeAlert = !activeAlert;
	} else {
		document.title = msg;
		activeAlert = !activeAlert;
	}
}, 1000);

// const whiteColor = document.querySelector("._50f7");
// console.log(whiteColor);

// const changeTitle = setInterval(() => {
// 	document.title = activeAlert ? title : msg;
// 	activeAlert != activeAlert;
// },1000);
