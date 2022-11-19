// Custom select
// Choose all selects
const selects = document.querySelectorAll("select");

// Loop over them
for (let i = 0; i < selects.length; i++) {
  const select = selects[i];
  // Select options
  const options = select.querySelectorAll("option");
  const selectClass = select.className;

  // Create custom select
  const customSelect = document.createElement("div");
  const customSelectList = document.createElement("div");
  const customSelectCurrent = document.createElement("div");

  // Set className
  customSelect.className = `${selectClass} form__select--custom custom-select`;
  customSelectList.className = "custom-select__list custom-scrollbar";
  customSelectCurrent.className = "custom-select__current";

  // Put List inside
  customSelect.append(customSelectCurrent, customSelectList);

  // Set customSelect after original select
  select.after(customSelect);

  // Get "option" values ​​from "select", then create custom "option" for custom "select"
  const createCustomDom = (x, y) => {
    let selectItems = "";
    for (var i = 0; i < options.length; i++) {
      selectItems += `<div class="custom-select__item" data-value="${options[i].value}">${options[i].text}</div>`;
    }
    customSelectList.innerHTML = selectItems;
    x(), y();
  };

  // Open and close select
  const toggleClass = () => {
    customSelect.classList.toggle("custom-select--show");
  };

  // Placeholders for custom select
  const placeholder = [
    "Practice / Institution*",
    "Medical Profession*",
    "Type of Inquiry*",
  ];
  const currentTextValue = () =>
    (customSelectCurrent.textContent = placeholder[i]);

  // Get and set text/value
  const currentValue = () => {
    const items = customSelectList.children;

    for (var el = 0; el < items.length; el++) {
      let selectValue = items[el].getAttribute("data-value");
      let selectText = items[el].textContent;

      items[el].addEventListener("click", () => {
        customSelect.classList.remove("custom-select--show");
        customSelectCurrent.style.color = "#000";
        customSelectCurrent.textContent = selectText;
        select.value = selectValue;
      });
    }
  };

  customSelectCurrent.addEventListener("click", toggleClass);

  createCustomDom(currentTextValue, currentValue);

  // Close the dropdown list on click outside select area
  document.addEventListener("mouseup", (e) => {
    if (!customSelect.contains(e.target))
      customSelect.classList.remove("custom-select--show");
  });
}

// Google Map
function initMap() {
  // Styling map
  const styledMapType = new google.maps.StyledMapType([
    {
      featureType: "landscape.man_made",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      stylers: [
        {
          color: "#fffbf5",
        },
        {
          saturation: 100,
        },
      ],
    },
    {
      featureType: "landscape.natural.landcover",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape.natural.terrain",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.government",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.medical",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.place_of_worship",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.school",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ]);
  // Coordinates
  const coords = { lat: 43.4531067, lng: -80.5144142 };

  // Information window
  const infoString =
    '<div class="info-window">' +
    '<p class="info-window__heading">Voodoo</p>' +
    '<p class="info-window__address">' +
    "137 Glasgow St., Unit 115 </br> Kitchener, ON N2G 4X8 </br> Ukraine" +
    "</p>" +
    '<div class="info-window__contact">' +
    "<svg " +
    'width="18" ' +
    'height="18" ' +
    'viewBox="0 0 13 13" ' +
    'fill="none" ' +
    'xmlns="http://www.w3.org/2000/svg" ' +
    ">" +
    "<path " +
    'fill-rule="evenodd" ' +
    'clip-rule="evenodd" ' +
    'd="M11.375 9.16497V10.79C11.3762 11.095 11.2488 11.3864 11.024 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.52737 11.6922 6.92629 11.1226 5.51958 10.2104C4.21082 9.37875 3.10122 8.26915 2.26958 6.96039C1.35415 5.54729 0.784463 3.93843 0.606665 2.26414C0.579296 1.96128 0.680479 1.66086 0.885496 1.43627C1.09051 1.21167 1.38049 1.08359 1.68458 1.08331H3.30958C3.85334 1.07795 4.31681 1.47654 4.39291 2.01497C4.4615 2.53501 4.5887 3.04562 4.77208 3.53706C4.9209 3.93295 4.82571 4.37924 4.52833 4.67997L3.84041 5.36789C4.61151 6.72398 5.73433 7.8468 7.09041 8.61789L7.77833 7.92997C8.07906 7.63259 8.52536 7.53741 8.92125 7.68622C9.41269 7.8696 9.9233 7.9968 10.4433 8.06539C10.988 8.14223 11.3886 8.61507 11.375 9.16497Z" ' +
    'stroke="#52514F" ' +
    'stroke-linecap="round" ' +
    'stroke-linejoin="round" ' +
    "/>" +
    "</svg> " +
    "<p>1-800-480-9597</p>" +
    "</div>" +
    '<div class="info-window__contact">' +
    "<svg " +
    'width="18" ' +
    'height="18" ' +
    'viewBox="0 0 12 12" ' +
    'fill="none" ' +
    'xmlns="http://www.w3.org/2000/svg" ' +
    ">" +
    "<path " +
    'fill-rule="evenodd" ' +
    'clip-rule="evenodd" ' +
    'd="M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z" ' +
    'stroke="#52514F" ' +
    'stroke-linecap="round" ' +
    'stroke-linejoin="round" ' +
    "/>" +
    "<path " +
    'd="M11 3L6 6.5L1 3" ' +
    'stroke="#52514F" ' +
    'stroke-linecap="round" ' +
    'stroke-linejoin="round" ' +
    "/>" +
    "</svg>" +
    "<p>info@voodoo.com</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: infoString,
    ariaLabel: "Voodoo",
  });

  // Create map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: coords,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: ["styled_map"],
    },
  });
  // Set style
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  // Set marker
  const image = "./marker.svg";
  const marker = new google.maps.Marker({
    position: coords,
    icon: image,
    map: map,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}
window.initMap = initMap;
