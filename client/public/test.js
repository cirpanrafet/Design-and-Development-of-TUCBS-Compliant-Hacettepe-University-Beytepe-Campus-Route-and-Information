var buildingLocations = {}

var libraryLocations = {

}

var disabledLibraries = ["Gowen Library"];

var busLocations = {
    //"Stevens Way and Okanogan Ln": [47.652027, -122.308655], //

}

var locationsMap;

var navigableLocationsMap;

// Stores the building/library/bus-stop marker currently on the map.
var mapMarkers = [];

// Stores the "current location" marker on the map.
var locationMarkers = [];

// Stores the current path on the map.
var geoJSONPaths = [];

// Maps content section id's (for Navigation, Buildings, etc.) to pixel heights.
var dropDownLengths = {
    "navSection": "160px",
    "buildingsSection": "200px",
    "stopSection": "200px",
    "aboutSection": "130px",
    "librariesSection": "200px",
    "feedbackSection": "120px"
}

// Maps search bar id's to the class of items being searched.
var searchItemsClass = {
    "buildingsSearch": "building",
    "busStopSearch": "bus-stop",
    "librariesSearch": "library"
}

// Maps search bar ids to the container id of the items being searched.
var searchItemsContainer = {
    "buildingsSearch": "building-container",
    "busStopSearch": "bus-stop-container",
    "librariesSearch": "library-container"
}




// Adds event listeners.
logo.addEventListener("click", toggleContent);

// Adds click listeners to each dropdown header.
document.getElementById("navHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("navSection"));
});
document.getElementById("buildingsHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("buildingsSection"));
});
document.getElementById("stopHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("stopSection"));
});
document.getElementById("aboutHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("aboutSection"));
});
document.getElementById("librariesHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("librariesSection"));
});
document.getElementById("feedbackHeader").addEventListener("click", () => {
    toggleDropdown(document.getElementById("feedbackSection"));
});






// Toggles visibility of dropdown represented by each left sidebar header.
function toggleDropdown(sec) {
    var size = dropDownLengths[sec.id];
    if (sec.style.height == "0px") {
        sec.style.height = size;
        // hide all other sections if small screen
        if (window.innerWidth <= 600) {
            for (var i = 0; i < contentSections.length; i++) {
                const curSec = contentSections[i];
                if (curSec != sec) {
                    curSec.style.height = "0px";
                }
            }
        }
    } else {
        sec.style.height = "0px";
    }
    console.log(window.innerWidth);

}

// SOL NAVİGASYON BARININ AÇILIP KAPANMA ANİMASYONU
function toggleContent() {
    var sidebarLeft = document.getElementById("sidebarLeft");
    var horizontalBar = document.getElementById("horizontalBarId");
    if (sidebarLeft.style.width == "0px") {
        sidebarLeft.style.opacity = 1;
        sidebarLeft.style.width = "288px";
        horizontalBar.style.width = "calc(100% - 398px)";
    } else {
        sidebarLeft.style.opacity = 0;
        sidebarLeft.style.width = "0px";
        horizontalBar.style.width = "calc(100% - 90px)";
    }
}
