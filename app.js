// FeegeoIP URL 
const ipURL = "https://api.freegeoip.app/json?apikey=";

// FreegeoIP API Key 
const apiKey = "f9a77030-2a82-11ec-8f4b-cfe5391fc257";

const ipData = fetch(ipURL + apiKey)
    .then((response) => response.json())
    .then((response) => {
        return response;
    });

const printIP = async () => {
    let ip = await ipData;
    
    // Setting Location 
    const location = document.getElementById('location');
    let city = ip.city;
    let countryCode = ip.country_code;
    location.innerHTML = "in " + city + ", " + countryCode
}

printIP();
 


// Setting Information based on returned IP 

const locationData = fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then ((response) => {
        return response;
    });

    

const printData = async () => {
    let data = await locationData;

    // Getting full date and time
    const time = document.getElementById('time');
    let currentTime = data.datetime;
    currentTime = currentTime.slice(11, 16); // slicing response to just show current time. 
    time.innerHTML = currentTime

    // Getting timezone abbreviation
    const abbrev = document.getElementById('abbrev');
    let abbreviation = data.abbreviation;
    abbrev.innerHTML = abbreviation;

    // Getting and setting timezone
    const timearea = document.getElementById('timezone');
    let zone = data.timezone;
    timearea.innerHTML = zone;

    // Getting and setting day of year
    const dayOfYear = document.getElementById ('day-of-year');
    let yearDay = data.day_of_year;
    dayOfYear.innerHTML = yearDay;

    // Getting and setting day of week 
    const dayOfWeek = document.getElementById('day-of-week');
    let weekDay = data.day_of_week;
    dayOfWeek.innerHTML = weekDay;

    // Getting and setting week number 
    const numberOfWeek = document.getElementById('week-number');
    let weekNumber = data.week_number;
    numberOfWeek.innerHTML = weekNumber;

    // Changing Greeting depending on time of day
    const greeting = document.getElementById("greeting");
    if (currentTime > "12:00" && currentTime < "18:00") {
        greeting.innerHTML = "good afternoon";
    };
    if ( currentTime > "18:00" && currentTime < "04:59") {
        greeting.innerHTML = "good evening";
    };

    // Changing greeting icon (sun or moon) and background image 
    const greetingIcon = document.getElementById("greeting-icon");
    const backgroundImg = document.getElementById("body");

    if (currentTime > "18:00" && currentTime < "05:00") {
        greetingIcon.src = "./assets/desktop/icon-moon.svg";
        backgroundImg.style.backgroundImage = "url('./assets/mobile/bg-image-nighttime.jpg')";
        section.style.backgroundColor = "#00000050";
    }

    
}

printData();



// Fetch random quotes 
const getRandomQuote = fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then ((response) => {
        return response
    });

// Accessing response to grab the quote text and it's author from the JSON object
const printRandomQuote = async () => {
    // Getting random quote from fetch API above 
    
    const quote = document.getElementById('quote');
    let randomQuote = await getRandomQuote;
    randomQuote = randomQuote.content;
    quote.innerHTML = randomQuote;

    // Getting author of the quote
    const author = document.getElementById('author');
    let randomAuthor = await getRandomQuote;
    randomAuthor = randomAuthor.author;
    author.innerHTML = randomAuthor;  

}

printRandomQuote();



const testBtn = document.getElementById("btn");
const section = document.getElementById("pop");
const main = document.getElementById("main");
const header = document.getElementById("header");
const btnText = document.getElementById("btn-text");
const btnImg = document.getElementById("btn-img");

// toggle the word on button. else is less because initial text is "more"
function toggleButtonText() {
    if (btnText.innerHTML === "less") {
        btnText.innerHTML = "more";
    } else {
        btnText.innerHTML = "less";
    }
}

function onClick() {
    section.classList.toggle("section-active");
    header.classList.toggle("header-closed");
    main.classList.toggle("main-active");
    btnImg.classList.toggle("btn-img-invert");
    toggleButtonText();
}


testBtn.addEventListener("click", onClick);

// getting a new quote on click
const refreshBtn = document.getElementById('refresh-button');
