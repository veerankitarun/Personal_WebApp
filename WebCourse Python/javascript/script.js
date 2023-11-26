
const player = new Plyr('#myVideo');
const timestampsDiv = document.getElementById("timestamps");

function addTimestampButton(time, description) {
    var video = document.getElementById("myVideo");

    var timestampButton = document.createElement("button");
    timestampButton.textContent = `#${timestampsDiv.children.length + 1} (${time}) ${description}`;
    timestampButton.classList.add("timestamp-btn");
    timestampButton.addEventListener("click", function () {
        video.currentTime = parseTime(time);
        video.play(); // Start playing from the selected time
        setActiveButton(timestampButton);
    });
    timestampsDiv.appendChild(timestampButton);
}

function setActiveButton(button) {
    // Remove 'active' class from all buttons
    Array.from(timestampsDiv.children).forEach(btn => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    button.classList.add("active");
}

function parseTime(time) {
    var parts = time.split(":");
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
}

const timestampsList = [
    "00:00:00",
    "00:05:57",
    "00:17:38",
    "00:20:27",
    "00:25:13",
    "00:30:14",
    "00:36:50",
    "00:40:58",
    "00:51:52",
    "00:58:19",
    "01:04:03",
    "01:07:31",
    "01:13:04",
    "01:17:08",
    "01:21:06",
    "01:26:58",
    "01:30:47",
    "01:33:47",
    "01:40:03",
    "01:47:20",
    "01:53:23",
    "02:02:03",
    "02:04:51",
    "02:07:09",
    "02:09:40",
    "02:13:23",
    "02:16:58",
    "02:21:17",
    "02:33:22",
    "02:36:43",
    "02:43:40",
    "02:47:28",
    "02:51:00",
    "02:53:45",
    "02:57:05",
    "03:01:20",
    "03:06:15",
    "03:10:26",
    "03:18:32",
    "03:35:45",
    "03:45:06",
    "03:48:54",
    "03:55:30",
    "03:58:32",
    "04:01:49",
    "04:04:14",
    "04:08:08",
    "04:12:09",
    "04:19:12",
    "04:23:20",
    "04:27:38",
    "04:31:45",
    "04:35:21",
    "04:41:06",
    "04:45:44",
    "04:53:22",
    "04:57:17",
    "05:00:10",
    "05:04:54",
    "05:10:54",
    "05:18:59",
    "05:23:41",
    "05:29:21",
    "05:39:58",
    "05:53:31",
    "05:58:19",
    "06:07:15",
    "06:14:38",
    "06:24:24",
    "06:30:44",
    "06:40:15",
    "06:49:08",
    "07:00:47",
    "07:10:24",
    "07:24:41",
    "07:37:17",
    "07:43:10",
    "07:48:38",
    "07:55:33",
    "08:05:17",
    "08:15:23",
    "08:21:30",
    "08:25:32",
    "08:30:52",
    "08:39:52",
    "08:49:48",
    "09:01:18",
    "09:05:54",
    "09:11:00",
    "09:18:18",
    "09:29:13",
    "09:41:31",
    "09:53:04",
    "10:01:03",
    "10:07:37",
    "10:09:53",
    "10:13:30",
    "10:17:13",
    "10:31:38",
    "11:05:51",
    "11:26:25"
    // ... (rest of the timestamps)
];

const descriptionsList = [
"Python tutorial for beginners 🐍",
    "variables ✘",
    "multiple assignment 🔠",
    "string methods 〰️",
    "type cast 💱",
    "user input ⌨️",
    "math functions 🧮",
    "string slicing ✂️",
    "if statements 🤔",
    "logical operators 🔣",
    "while loops 🔄",
    "for loops ➰",
    "nested loops ➿",
    "break continue pass ⛔",
    "lists 🧾",
    "2D lists 📜",
    "tuples 📄",
    "sets 🍴",
    "dictionaries 📖",
    "indexing 📑",
    "functions 📞",
    "return statement 🔙",
    "keyword arguments 🔑",
    "nested function calls 🖇️",
    "variable scope 🔬",
    "*args 📦",
    "**kwargs 🎁",
    "string format 💬",
    "random numbers 🎲",
    "exception handling ⚠️",
    "file detection 📁",
    "read a file 🔍",
    "write a file 📝",
    "copy a file 🖨️",
    "move a file 🗃️",
    "delete a file 🗑️",
    "modules 💌",
    "rock, paper, scissors game 🗿",
    "quiz game 💯",
    "Object Oriented Programming (OOP) 🐍",
    "class variables 🚗",
    "inheritance 👪",
    "multilevel inheritance 👴",
    "multiple inheritance 👨‍👩‍👧‍👦",
    "method overriding 🙅",
    "method chaining ⛓️",
    "super function 🦸",
    "abstract classes 👻",
    "objects as arguments 🏍️",
    "duck typing 🦆",
    "walrus operator 🦦",
    "functions to variables 📛",
    "higher order functions 👑",
    "lambda λ",
    "sort 🗄️",
    "map 🗺️",
    "filter 🍺",
    "reduce ♻️",
    "list comprehensions 📰",
    "dictionary comprehensions 🕮",
    "zip function 🤐",
    "if _name_ == '__main__' ❓",
    "time module ⌚",
    "threading 🧵",
    "daemon threads 😈",
    "multiprocessing ⚡",
    "GUI windows 🖼️",
    "labels 🏷️",
    "buttons 🛎️",
    "entrybox ⌨️",
    "checkbox ✔️",
    "radio buttons 🔘",
    "scale 🌡️",
    "listbox 📋",
    "messagebox 💭",
    "colorchooser 🎨",
    "text area 📒",
    "open a file (file dialog) 📁",
    "save a file (file dialog) 💾",
    "menubar 🧾",
    "frames ⚰️",
    "new windows 🗔",
    "window tabs 📑",
    "grid 🏢",
    "progress bar 📊",
    "canvas 🖍️",
    "keyboard events ⌨️",
    "mouse events 🖱️",
    "drag & drop 👈",
    "move images w/ keys 🏎️",
    "animations 🛸",
    "multiple animations 🎞️",
    "clock program 🕒",
    "send an email 📧",
    "run with command prompt 👨‍💻",
    "pip 🏗️",
    "py to exe 🏃",
    "calculator program 🖩",
    "text editor program ✏️",
    "tic tac toe game ⭕",
    "snake game 🐍"
    // ... (rest of the descriptions)
];

for (let i = 0; i < timestampsList.length; i++) {
    addTimestampButton(timestampsList[i], descriptionsList[i]);
}

// Update active button based on video time
player.on('timeupdate', function () {
    const currentVideoTime = player.currentTime;
    Array.from(timestampsDiv.children).forEach((btn, index) => {
        const timestampTime = parseTime(timestampsList[index]);
        if (currentVideoTime >= timestampTime && currentVideoTime < parseTime(timestampsList[index + 1] || '99:99:99')) {
            setActiveButton(btn);
        }
    });
});
