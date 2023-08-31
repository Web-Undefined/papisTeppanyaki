function partyTrays() {
    const party = document.getElementById("partyTrays");
    const buffet = document.getElementById("buffetStyle");
    const vip = document.getElementById("VIPDinner");
    if (party.classList.contains("hidden") == true) {
        party.classList.remove("hidden");
    }
    if (buffet.classList.contains("hidden") == false) {
        buffet.classList.add("hidden");
    }
    if (vip.classList.contains("hidden") == false) {
        vip.classList.add("hidden");
    }
}

function buffetStyle() {
    const party = document.getElementById("partyTrays");
    const buffet = document.getElementById("buffetStyle");
    const vip = document.getElementById("VIPDinner");
    if (buffet.classList.contains("hidden") == true) {
        buffet.classList.remove("hidden");
    }
    if (party.classList.contains("hidden") == false) {
        party.classList.add("hidden");
    }
    if (vip.classList.contains("hidden") == false) {
        vip.classList.add("hidden");
    }
}

function vipDinner() {
    const party = document.getElementById("partyTrays");
    const buffet = document.getElementById("buffetStyle");
    const vip = document.getElementById("VIPDinner");
    if (vip.classList.contains("hidden") == true) {
        vip.classList.remove("hidden");
    }
    if (buffet.classList.contains("hidden") == false) {
        buffet.classList.add("hidden");
    }
    if (party.classList.contains("hidden") == false) {
        party.classList.add("hidden");
    }
}
