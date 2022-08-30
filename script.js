const root = document.documentElement;
const features = document.querySelector("#features");
const company = document.querySelector("#company");
const featuresDropDown = document.querySelector(".featuresDropDown");
const companyDropDown = document.querySelector(".companyDropDown");
const menu = document.querySelector("#menu");
const account = document.querySelector(".account > ul");

function dropDown() {
  var featuresDropDownActive = false;
  var companyDropDownActive = false;
  features.addEventListener("click", (e) => {
    if (featuresDropDownActive == false) {
      featuresDropDownActive = true;
      features.querySelector(".arrow").style.backgroundImage =
        "url(images/icon-arrow-up.svg)";
      featuresDropDown.style.opacity = "1";
      if (window.matchMedia("(max-width: 1000px)").matches) {
        featuresDropDown.style.position = "static";
        account.style.transform = "translateY(420px)";
      }
    } else if (featuresDropDownActive) {
      featuresDropDownActive = false;
      features.querySelector(".arrow").style.backgroundImage =
        "url(images/icon-arrow-down.svg)";
      featuresDropDown.style.opacity = "0";
      if (window.matchMedia("(max-width: 1000px)").matches) {
        featuresDropDown.style.position = "absolute";
      }
    }
    if (
      window.matchMedia("(max-width: 1000px)").matches &&
      featuresDropDownActive == false &&
      companyDropDownActive == false
    ) {
      account.style.transform = "translateY(200px)";
    }
  });

  company.addEventListener("click", (e) => {
    if (companyDropDownActive == false) {
      companyDropDownActive = true;
      company.querySelector(".arrow").style.backgroundImage =
        "url(images/icon-arrow-up.svg)";
      companyDropDown.style.opacity = "1";
      if (window.matchMedia("(max-width: 1000px)").matches) {
        companyDropDown.style.position = "static";
        account.style.transform = "translateY(420px)";
      }
    } else if (companyDropDownActive) {
      companyDropDownActive = false;
      company.querySelector(".arrow").style.backgroundImage =
        "url(images/icon-arrow-down.svg)";
      companyDropDown.style.opacity = "0";
      if (window.matchMedia("(max-width: 1000px)").matches) {
        companyDropDown.style.position = "absolute";
      }
    }
    if (
      window.matchMedia("(max-width: 1000px)").matches &&
      featuresDropDownActive == false &&
      companyDropDownActive == false
    ) {
      account.style.transform = "translateY(200px)";
    }
  });
}

dropDown();
menu.addEventListener("click", (e) => {
  var dropDownActive = false;
  if (dropDownActive == false) {
    dropDownActive = true;
    menu.src = "images/icon-close-menu.svg";
    root.style.setProperty("--menu-opacity", "1");
  } else {
    dropDownActive = false;
    menu.src = "images/icon-menu.svg";
    root.style.setProperty("--menu-opacity", "0");
  }
});
