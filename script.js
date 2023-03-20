// Get references to HTML elements
const dataTable = document.getElementById("dataTable");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const intervalInput = document.getElementById("interval");

let timerId = null; //Get id for setInterval func
let rowCount = 0; //For coloring even and odd columns of a table

// Generate a new row of data and add it to the table
const addDataRow = () => {
    let row = dataTable.insertRow(1);
    row.classList.add(rowCount % 2 === 0 ? "even" : "odd");
    let randomNumber = Math.floor(Math.random() * 1000);
    let dateTime = new Date().toLocaleString();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerText = randomNumber;
    cell2.innerText = dateTime;
    rowCount++;
};

// Start generating new rows of data at the specified interval
const startGenerating = () => {
    let interval = parseInt(intervalInput.value) * 1000;
    timerId = setInterval(addDataRow, interval);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

// Stop generating new rows of data
const stopGenerating = () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

// Attach event listeners
startBtn.addEventListener("click", startGenerating);
stopBtn.addEventListener("click", stopGenerating);
