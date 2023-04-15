let today = moment().format("dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = `Todays ${today}`;

let tomorrowElement = document.querySelector("#future-date");
let tomorrow = moment().add(10, "year").format("dddd, MMMM D, YYYY HH:mm:ss");
tomorrowElement.innerHTML = `In 10 years it will be ${tomorrow}`;
