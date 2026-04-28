// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
});


// CONTACT FORM + STATUS TOAST
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form && status) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                status.className = "show success";
                status.innerHTML = "Message sent successfully ✅";
                form.reset();
            } else {
                status.className = "show error";
                status.innerHTML = "Something went wrong ❌";
            }

            autoHideStatus();
        })
        .catch(() => {
            status.className = "show error";
            status.innerHTML = "Network error ❌";

            autoHideStatus();
        });
    });
}


// AUTO HIDE NOTIFICATION
function autoHideStatus() {
    setTimeout(() => {
        status.className = "";
        status.innerHTML = "";
    }, 3000);
}









// CONTACT FORM + STATUS TOAST for contact page
const fom = document.getElementById("con-form");
const result = document.getElementById("result");

if (fom && result) {
    fom.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(fom);

        fetch(fom.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                result.className = "show success";
                result.innerHTML = "Message sent successfully ✅";
                fom.reset(); // FIXED HERE
            } else {
                result.className = "show error";
                result.innerHTML = "Something went wrong ❌";
            }

            autoHideStatus();
        })
        .catch(() => {
            result.className = "show error";
            result.innerHTML = "Network error ❌";

            autoHideStatus();
        });
    });
}

// AUTO HIDE
function autoHideStatus() {
    setTimeout(() => {
        result.className = "";
        result.innerHTML = "";
    }, 3000);
}