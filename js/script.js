const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// flights, hotels tab handler
const flightBtn = document.querySelector("#flightBtn");
const hotelBtn = document.querySelector("#hotelBtn");
const flights = document.querySelector("#flights");
const hotels = document.querySelector("#hotels");

flightBtn.addEventListener("click", () => {
  flightBtn.classList.add("active");
  hotelBtn.classList.remove("active");

  flights.classList.add("d-block");
  flights.classList.remove("d-none");
  hotels.classList.remove("d-block");
  hotels.classList.add("d-none");
});

hotelBtn.addEventListener("click", () => {
  flightBtn.classList.remove("active");
  hotelBtn.classList.add("active");

  flights.classList.remove("d-block");
  flights.classList.add("d-none");
  hotels.classList.add("d-block");
  hotels.classList.remove("d-none");
});

// one way, round-trip, multi-city tab handler
const tab2Selector = document.querySelector("#tab2-selector");
const oneWay = document.querySelector("#one-way");
const roundTrip = document.querySelector("#round-trip");
const multiCity = document.querySelector("#multi-city");
const addFlightBtn = document.querySelector("#add-flight");

tab2Selector.addEventListener("click", (e) => {
  const tabName = e.target.innerText.toLowerCase();
  const children = tab2Selector.querySelectorAll("li");

  children.forEach((child) => {
    if (child.innerText.toLowerCase() === tabName) {
      child.classList.add("active");
    } else child.classList.remove("active");
  });

  switch (tabName) {
    case "one-way": {
      oneWay.classList.add("d-block");
      oneWay.classList.remove("d-none");
      roundTrip.classList.add("d-none");
      roundTrip.classList.remove("d-block");
      multiCity.classList.add("d-none");
      multiCity.classList.remove("d-block");
      addFlightBtn.style.display = "none";
      break;
    }
    case "round-trip": {
      oneWay.classList.remove("d-block");
      oneWay.classList.add("d-none");
      roundTrip.classList.remove("d-none");
      roundTrip.classList.add("d-block");
      multiCity.classList.add("d-none");
      multiCity.classList.remove("d-block");
      addFlightBtn.style.display = "none";
      break;
    }
    case "multi-city": {
      oneWay.classList.remove("d-block");
      oneWay.classList.add("d-none");
      roundTrip.classList.add("d-none");
      roundTrip.classList.remove("d-block");
      multiCity.classList.remove("d-none");
      multiCity.classList.add("d-block");
      addFlightBtn.style.display = "block";
      break;
    }
  }
});

// seat selector
const seatSelector = document.querySelector("#seatSelector");
const seatContainer = document.querySelector("#seatContainer");
const seatApplyBtn = document.querySelector("#seatApplyBtn");

// type selector
const typeSelector = document.querySelector("#typeSelector");
const typeContainer = document.querySelector("#typeContainer");

// guest selector
const guestSelector = document.querySelector("#guestSelector");
const guestContainer = document.querySelector("#guestContainer");
const guestApplyBtn = document.querySelector("#guestApplyBtn");

//

document.addEventListener("click", (e) => {
  // for seat
  if (seatSelector.contains(e.target)) {
    seatSelector.nextElementSibling.style.transform = "scale(100%)";
  }

  if (!seatContainer.contains(e.target)) {
    seatSelector.nextElementSibling.style.transform = "scale(0%)";
  }

  if (seatApplyBtn.contains(e.target)) {
    let value = 0;
    seatContainer.querySelectorAll(".value").forEach((el) => {
      value += Number(el.innerText);
    });
    seatSelector.querySelector("#seats").innerText = `${value} ${value > 1 ? "Passengers" : "Passenger"
      }`;
    seatSelector.nextElementSibling.style.transform = "scale(0%)";
  }

  // for type
  if (typeSelector.contains(e.target)) {
    typeSelector.nextElementSibling.style.transform = "scale(100%)";
  }

  if (!typeContainer.contains(e.target)) {
    typeSelector.nextElementSibling.style.transform = "scale(0%)";
  }

  // for guest
  if (guestSelector.contains(e.target)) {
    guestSelector.nextElementSibling.style.transform = "scale(100%)";
  }

  if (!guestContainer.contains(e.target)) {
    guestSelector.nextElementSibling.style.transform = "scale(0%)";
  }

  if (guestApplyBtn.contains(e.target)) {
    let value = 0;
    guestContainer.querySelectorAll(".value").forEach((el) => {
      value += Number(el.innerText);
    });
    guestContainer.querySelector("#guests").innerText = `${value} ${value > 1 ? "Guests" : "Guest"
      } in 1 Room`;
    guestSelector.nextElementSibling.style.transform = "scale(0%)";
  }
});

const plusBtn = document.querySelectorAll(".plusBtn");
const minusBtn = document.querySelectorAll(".minusBtn");

plusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.previousElementSibling.innerText =
      Number(btn.previousElementSibling.innerText) + 1;
  });
});

minusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(btn.nextElementSibling.innerText) > 0) {
      btn.nextElementSibling.innerText =
        Number(btn.nextElementSibling.innerText) - 1;
    }
  });
});

const typeLists = document.querySelector("#typeLists");
const types = document.querySelector("#types");

typeLists.addEventListener("click", (e) => {
  typeLists.querySelectorAll("li").forEach((list) => {
    if (list === e.target) {
      list.style.color = "#188920";
      types.innerText = e.target.innerText;
      typeSelector.nextElementSibling.style.transform = "scale(0%)";
    } else {
      list.style.color = "inherit";
    }
  });
});

// flights add and remove in multi-city tab
// remove
const removeFlightField = (btn) => {
  const flights = multiCity.children;
  if (flights.length > 2) {
    multiCity.removeChild(btn.parentElement);
    if (flights.length === 2) {
      const closeBtns = multiCity.querySelectorAll(".closeBtn");
      closeBtns.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
    }
  }
};

// add
addFlightBtn.addEventListener("click", () => {
  const flight = document.createElement("div");
  flight.setAttribute(
    "class",
    "search-input d-flex flex-column flex-lg-row gap-3 mb-3"
  );
  flight.innerHTML = `
    <div class="input-group">
    <input onfocus="inputFocus(this, 'suggestion-from')"
    onblur="inputFocusLose(this, 'suggestion-from')"
    onkeyup="inputKeyUp(this, 'suggestion-from')" type="text" class="form-control py-3 px-2 from" placeholder="From" aria-label="From" autocomplete="off">
    <span class="input-group-text"><i class="fa-solid fa-right-left"></i></span>
    <input onfocus="inputFocus(this, 'suggestion-to')"
    onblur="inputFocusLose(this, 'suggestion-to')"
    onkeyup="inputKeyUp(this, 'suggestion-to')" type="text" class="form-control py-3 px-2 to" placeholder="To" aria-label="To" autocomplete="off">
</div>
<input type="text" class="form-control py-3 px-2 dateSelector" placeholder="Depart" aria-label="Depart" autocomplete="off">
<button onclick="removeFlightField(this)" class="closeBtn"><i class="fa-solid fa-circle-xmark"></i></button>
    `;
  multiCity.appendChild(flight);

  flatpickr(flight.querySelector(".dateSelector"), {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  });

  const closeBtns = multiCity.querySelectorAll(".closeBtn");
  closeBtns.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
});


// auto suggestion feature

const inputFocus = (el, field) => {
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    `position-absolute start-0 top-100 end-0 bg-white rounded-bottom-3 shadow-lg z-2 list-unstyled d-flex flex-column auto-suggestions ${field}`
  );
  el.parentElement.appendChild(ul);
};

const inputFocusLose = (el, field) => {
  setTimeout(() => {
    const ul = el.parentElement.querySelector(`.${field}`);
    if (ul) {
      el.parentElement.removeChild(ul);
    }
  }, 200);
};

const inputKeyUp = async (el, field) => {
  const userInput = el.value.toLowerCase();
  const suggestionField = el.parentElement.querySelector(`.${field}`);
  if (userInput.trim().length > 2) {
    const data = await fetch("airport_autosuggestion.json").then((res) =>
      res.json()
    );
    const filteredData = data.some(
      (airport) => airport.code.toLowerCase() === userInput
    )
      ? data.filter((airport) => airport.code.toLowerCase() === userInput)
      : data.filter((airport) =>
        airport.city_name.toLowerCase().includes(userInput)
      );

    suggestionField.innerHTML = "";
    filteredData.slice(0, 12).forEach((airport) => {
      const li = document.createElement("li");
      const text = `${airport.airport_name}, ${airport.country_name} (${airport.code})`;
      li.onclick = () => {
        el.value = text;
      };
      li.innerText = text;
      suggestionField.appendChild(li);
    });
  } else {
    suggestionField.innerHTML = "";
  }
};

document.querySelectorAll(".search-input .from").forEach((el) => {
  el.setAttribute("onfocus", "inputFocus(this, 'suggestion-from')");
  el.setAttribute("onblur", "inputFocusLose(this, 'suggestion-from')");
  el.setAttribute("onkeyup", "inputKeyUp(this, 'suggestion-from')");
});

document.querySelectorAll(".search-input .to").forEach((el) => {
  el.setAttribute("onfocus", "inputFocus(this, 'suggestion-to')");
  el.setAttribute("onblur", "inputFocusLose(this, 'suggestion-to')");
  el.setAttribute("onkeyup", "inputKeyUp(this, 'suggestion-to')");
});

flatpickr(".dateSelector", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});


// toggle location

let location1Value;
let location2Value;

let toggleCount = 0;

const toggleValues = (sectionNumber) => {

  const location1 = document.getElementById("input1-" + sectionNumber);
  const location2 = document.getElementById("input2-" + sectionNumber);
  var toggleButton = document.querySelector(".toggle-button-" + sectionNumber);

  const temp = location1.value;
  toggleCount++;

  if (!location1.value || !location2.value) {
    return;
  } else {
    location1.value = location2.value;
    location2.value = temp;

    if (toggleCount % 2 === 1) {
      toggleButton.classList.add("rotate-90");
      toggleButton.classList.remove("rotate-0");
    } else {
      toggleButton.classList.add("rotate-0");
      toggleButton.classList.remove("rotate-90");
    }
  }
}

// color added

location1.addEventListener('keyup', () => {
  location1Value = location1.value;
  handleToggleBtnColor();


});

location2.addEventListener('keyup', () => {
  location2Value = location2.value
  handleToggleBtnColor();
});

function handleToggleBtnColor() {
  if (location1Value && location2Value) {
    toggleButton.style.color = '#198754';
  } else {
    toggleButton.style.color = '#aeaeae';
    return;
  }
}