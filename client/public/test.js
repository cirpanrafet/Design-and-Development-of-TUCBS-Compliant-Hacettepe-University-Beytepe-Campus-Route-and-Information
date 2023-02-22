
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
