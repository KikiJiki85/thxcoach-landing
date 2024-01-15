import setHeaderHandlers from "./header.js";
import setDashboardHandlers from "./dashboard.js";

function init() {
    setHeaderHandlers();
    setDashboardHandlers();
}


document.addEventListener('DOMContentLoaded', init);
