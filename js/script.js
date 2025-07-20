var copyToClipBoardLinks = document.querySelectorAll(".clipboard-card .card-body>a");
var copyToClipBoardSpans = document.querySelectorAll(".clipboard-card .card-body>a span");

copyToClipBoardLinks.forEach(function (copyToClipBoardLink) {
    copyToClipBoardLink.onclick = function (event) {
        event.preventDefault();
        for (let i = 0; i < copyToClipBoardSpans.length; i++) {
            copyToClipBoardSpans[i].innerHTML = "Copied";
        }
        // Show the alert after very tiny interval
        setTimeout(function () {
            alert("Text successfully copied");
        }, 100)
        // Reset the text to "Copy to Clipboard" After 2 [seconds]
        setTimeout(function () {
            for (let j = 0; j < copyToClipBoardSpans.length; j++) {
                copyToClipBoardSpans[j].innerHTML = "Copy to Clipboard";
            }
        }, 2000);
    }
});

