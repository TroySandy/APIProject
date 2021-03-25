let baseURL = "https://ergast.com/api/f1/";
const searchForm = document.querySelector("form");
const season = document.querySelector(".season");
const driverName = document.querySelector(".driverName");
const constructors = document.querySelector(".constructors");
const circuits = document.querySelector(".circuits");
const section = document.querySelector("section");
const nav = document.querySelector("nav");
const heading = document.createElement("h1");
const article = document.createElement("article");
const table = document.createElement("table");
const para = document.createElement("p");
para.classList.add("text-center", "font-monospace", "fw-bold", "fs-1", "text-light")
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");

let pageNumber = "?limit=20&offset=";
let url;
let thNum = document.createElement("th");
let thPos = document.createElement("th");
let thName = document.createElement("th");
let thConstruct = document.createElement("th");
let thTime = document.createElement("th");
let thLap = document.createElement("th");
let carNumberH = "Car #";
let finishH = "Finish";
let fullNameH = "Driver Name";
let constructorNameH = "Constructor";
let raceTimeH = "Time";
let fastLapH = "Fastest Lap";
let thead = table.createTHead();
let div = document.createElement("div");
let rBtn = document.getElementById("resetBtn");

thNum.textContent = carNumberH;
thPos.textContent = finishH;
thName.textContent = fullNameH;
thConstruct.textContent = constructorNameH;
thTime.textContent = raceTimeH;
thLap.textContent = fastLapH;

table.classList.add("text-center", "font-monospace", "table", "table-striped")
table.appendChild(thead);
thead.appendChild(thPos);
thead.appendChild(thNum);
thead.appendChild(thName);
thead.appendChild(thConstruct);
thead.appendChild(thTime);
thead.appendChild(thLap);
section.appendChild(table);
section.style.display = "none";
nav.style.display = "none";

searchForm.addEventListener("submit", submitSearch);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function submitSearch(e) {
  fetchResults(e);
  // console.log(e);
}

function fetchResults(e) {
  e.preventDefault();

  url = `${baseURL}`;

  if (
    season.value !== "" &&
    driverName.value === "" &&
    constructors.value === "" &&
    circuits.value === ""
  ) {
    url += season.value + "/results.json" + pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value !== "" &&
    constructors.value === "" &&
    circuits.value === ""
  ) {
    url +=
      season.value +
      "/drivers/" +
      driverName.value +
      "/results.json" +
      pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value === "" &&
    constructors.value !== "" &&
    circuits.value === ""
  ) {
    url +=
      season.value +
      "/constructors/" +
      constructors.value +
      "/results.json" +
      pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value !== "" &&
    constructors.value !== "" &&
    circuits.value === ""
  ) {
    url +=
      season.value +
      "/drivers/" +
      driverName.value +
      "/constructors/" +
      constructors.value +
      "/results.json" +
      pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value === "" &&
    constructors.value !== "" &&
    circuits.value !== ""
  ) {
    url +=
      season.value +
      "/constructors/" +
      constructors.value +
      "/circuits/" +
      circuits.value +
      "/results.json" +
      pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value === "" &&
    constructors.value === "" &&
    circuits.value !== ""
  ) {
    url +=
      season.value +
      "/circuits/" +
      circuits.value +
      "/results.json" +
      pageNumber;
    console.log(url);
  } else if (
    season.value === "" &&
    driverName.value !== "" &&
    constructors.value === "" &&
    circuits.value === ""
  ) {
    url += "drivers/" + driverName.value + "/results.json" + pageNumber;
    console.log(url);
  } else if (
    season.value === "" &&
    driverName.value === "" &&
    constructors.value !== "" &&
    circuits.value === ""
  ) {
    url += "constructors/" + constructors.value + "/results.json" + pageNumber;
    console.log(url);
  } else if (
    season.value === "" &&
    driverName.value === "" &&
    constructors.value === "" &&
    circuits.value !== ""
  ) {
    url += "circuits/" + circuits.value + "/results.json" + pageNumber;
    console.log(url);
  } else if (
    season.value !== "" &&
    driverName.value !== "" &&
    constructors.value === "" &&
    circuits.value !== ""
  ) {
    url +=
      season.value +
      "/drivers/" +
      driverName.value +
      "/circuits/" +
      circuits.value +
      "/results.json" +
      pageNumber;

    console.log(url);
  } else {
    url +=
      season.value +
      "/drivers/" +
      driverName.value +
      "/constructors/" +
      constructors.value +
      "/circuits/" +
      circuits.value +
      "/results.json" +
      pageNumber;

    console.log(url);
  }
  console.log("url", url);
  fetch(url, {
    method: "GET",
  })
    .then(function (result) {
      // console.log(result);
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      displayResults(json);
    });

  function displayResults(json) {
    // console.log(json.MRData.RaceTable.Races[0]);
    console.log(section);
    while (section.hasChildNodes()) {
      console.log("while Loop");
      section.removeChild(section.firstChild);
    }

    while (table.childElementCount > 1) {
      table.removeChild(table.lastChild);
    }

    const searchResults = json.MRData.RaceTable;

    if (searchResults.length !== "") {
      nav.style.display = "block";
      section.style.display = "block";
    } else {
      nav.style.display = "none";
    }

    // console.log(searchResults.raceName);
      try{
    if (
      (season.value !== "" &&
        driverName.value === "" &&
        constructors.value === "" &&
        circuits.value === "") ||
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value === "" &&
        circuits.value !== "") ||
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value !== "" &&
        circuits.value !== "") ||
      (season.value !== "" &&
        driverName.value === "" &&
        constructors.value === "" &&
        circuits.value !== "")
    ) {
      if (searchResults.Races[0].Results.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        heading.textContent =
          searchResults.Races[0].season +
          " " +
          searchResults.Races[0].raceName;
        article.appendChild(heading);
        section.appendChild(article);
      }

      if (searchResults.Races[0].Results.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (let x = 0; x < 20; x++) {
          let carNumber = searchResults.Races[0].Results[x]
            ? searchResults.Races[0].Results[x].number
            : " ";
          let finish = searchResults.Races[0].Results[x]
            ? searchResults.Races[0].Results[x].positionText
            : " ";
          let fullName = searchResults.Races[0].Results[x].Driver
            ? searchResults.Races[0].Results[x].Driver.givenName +
              " " +
              searchResults.Races[0].Results[x].Driver.familyName
            : " ";
          let constructorName = searchResults.Races[0].Results[x].Constructor
            ? searchResults.Races[0].Results[x].Constructor.name
            : " ";
          let raceTime = searchResults.Races[0].Results[x].Time
            ? searchResults.Races[0].Results[x].Time.time
            : searchResults.Races[0].Results[x].status;
          let fastLap = searchResults.Races[0].Results[x].FastestLap
            ? searchResults.Races[0].Results[x].FastestLap.Time.time
            : "DNS";

          let tr = document.createElement("tr");
          let tdNum = document.createElement("td");
          let tdPos = document.createElement("td");
          let tdName = document.createElement("td");
          let tdConstruct = document.createElement("td");
          let tdTime = document.createElement("td");
          let tdLap = document.createElement("td");

          tdNum.textContent = carNumber;
          tdPos.textContent = finish;
          tdName.textContent = fullName;
          tdConstruct.textContent = constructorName;
          tdTime.textContent = raceTime;
          tdLap.textContent = fastLap;

          table.appendChild(tr);
          // tr.classList.add("border", "border-danger" )
          tr.appendChild(tdPos);
          tr.appendChild(tdNum);
          tr.appendChild(tdName);
          tr.appendChild(tdConstruct);
          tr.appendChild(tdTime);
          tr.appendChild(tdLap);
          section.appendChild(table);
        }
      }
    } else if (
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value === "" &&
        circuits.value === "") ||
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value !== "" &&
        circuits.value === "")
    ) {
      if (searchResults.Races.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++)
          heading.textContent =
            searchResults.Races[x].season +
            " " +
            searchResults.Races[x].raceName;
        article.appendChild(heading);
        section.appendChild(article);
      }

      if (searchResults.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++) {
          let carNumber = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].number
            : " ";
          let finish = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].positionText
            : " ";
          let fullName = searchResults.Races[x].Results[0].Driver
            ? searchResults.Races[x].Results[0].Driver.givenName +
              " " +
              searchResults.Races[x].Results[0].Driver.familyName
            : " ";
          let constructorName = searchResults.Races[x].Results[0].Constructor
            ? searchResults.Races[x].Results[0].Constructor.name
            : " ";
          let raceTime = searchResults.Races[x].Results[0].Time
            ? searchResults.Races[x].Results[0].Time.time
            : searchResults.Races[x].Results[0].status;
          let fastLap = searchResults.Races[x].Results[0].FastestLap
            ? searchResults.Races[x].Results[0].FastestLap.Time.time
            : "DNS";

          let tr = document.createElement("tr");
          let tdNum = document.createElement("td");
          let tdPos = document.createElement("td");
          let tdName = document.createElement("td");
          let tdConstruct = document.createElement("td");
          let tdTime = document.createElement("td");
          let tdLap = document.createElement("td");

          tdNum.textContent = carNumber;
          tdPos.textContent = finish;
          tdName.textContent = fullName;
          tdConstruct.textContent = constructorName;
          tdTime.textContent = raceTime;
          tdLap.textContent = fastLap;

          table.appendChild(tr);
          // tr.classList.add("border", "border-danger" )
          tr.appendChild(tdPos);
          tr.appendChild(tdNum);
          tr.appendChild(tdName);
          tr.appendChild(tdConstruct);
          tr.appendChild(tdTime);
          tr.appendChild(tdLap);
          section.appendChild(table);
        }
      }
    } else if (
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value !== "" &&
        circuits.value !== "") ||
      (season.value !== "" &&
        driverName.value !== "" &&
        constructors.value === "" &&
        circuits.value !== "")
    ) {
      if (searchResults.Races.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++)
          heading.textContent =
            searchResults.Races[x].season +
            " " +
            searchResults.Races[x].raceName;
        article.appendChild(heading);
        section.appendChild(article);
      }

      if (searchResults.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++) {
          let carNumber = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].number
            : " ";
          let finish = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].positionText
            : " ";
          let fullName = searchResults.Races[x].Results[0].Driver
            ? searchResults.Races[x].Results[0].Driver.givenName +
              " " +
              searchResults.Races[x].Results[0].Driver.familyName
            : " ";
          let constructorName = searchResults.Races[x].Results[0].Constructor
            ? searchResults.Races[x].Results[0].Constructor.name
            : " ";
          let raceTime = searchResults.Races[x].Results[0].Time
            ? searchResults.Races[x].Results[0].Time.time
            : searchResults.Races[x].Results[0].status;
          let fastLap = searchResults.Races[x].Results[0].FastestLap
            ? searchResults.Races[x].Results[0].FastestLap.Time.time
            : "DNS";

          let tr = document.createElement("tr");
          let tdNum = document.createElement("td");
          let tdPos = document.createElement("td");
          let tdName = document.createElement("td");
          let tdConstruct = document.createElement("td");
          let tdTime = document.createElement("td");
          let tdLap = document.createElement("td");

          tdNum.textContent = carNumber;
          tdPos.textContent = finish;
          tdName.textContent = fullName;
          tdConstruct.textContent = constructorName;
          tdTime.textContent = raceTime;
          tdLap.textContent = fastLap;

          table.appendChild(tr);
          // tr.classList.add("border", "border-danger" )
          tr.appendChild(tdPos);
          tr.appendChild(tdNum);
          tr.appendChild(tdName);
          tr.appendChild(tdConstruct);
          tr.appendChild(tdTime);
          tr.appendChild(tdLap);
          section.appendChild(table);
        }
      }
    } else {
      if (searchResults.Races[0].length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++)
          heading.textContent =
            searchResults.Races[0].season +
            " " +
            searchResults.Races[0].raceName;
        article.appendChild(heading);
        section.appendChild(article);
      }

      if (searchResults.Races.length === 0) {
        para.textContent = "No results returned.";
        section.appendChild(para);
      } else {
        for (x = 0; x < searchResults.Races.length; x++) {
          let carNumber = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].number
            : " ";
          let finish = searchResults.Races[x].Results[0]
            ? searchResults.Races[x].Results[0].positionText
            : " ";
          let fullName = searchResults.Races[x].Results[0].Driver
            ? searchResults.Races[x].Results[0].Driver.givenName +
              " " +
              searchResults.Races[x].Results[0].Driver.familyName
            : " ";
          let constructorName = searchResults.Races[x].Results[0].Constructor
            ? searchResults.Races[x].Results[0].Constructor.name
            : " ";
          let raceTime = searchResults.Races[x].Results[0].Time
            ? searchResults.Races[x].Results[0].Time.time
            : searchResults.Races[x].Results[0].status;
          let fastLap = searchResults.Races[x].Results[0].FastestLap
            ? searchResults.Races[x].Results[0].FastestLap.Time.time
            : "DNS";

          let carNumber2 = searchResults.Races[x].Results[1]
            ? searchResults.Races[x].Results[1].number
            : " ";
          let finish2 = searchResults.Races[x].Results[1]
            ? searchResults.Races[x].Results[1].positionText
            : " ";
          let fullName2 = searchResults.Races[x].Results[1].Driver
            ? searchResults.Races[x].Results[1].Driver.givenName +
              " " +
              searchResults.Races[x].Results[1].Driver.familyName
            : " ";
          let constructorName2 = searchResults.Races[x].Results[1].Constructor
            ? searchResults.Races[x].Results[1].Constructor.name
            : " ";
          let raceTime2 = searchResults.Races[x].Results[1].Time
            ? searchResults.Races[x].Results[1].Time.time
            : searchResults.Races[x].Results[1].status;
          let fastLap2 = searchResults.Races[x].Results[1].FastestLap
            ? searchResults.Races[x].Results[1].FastestLap.Time.time
            : "DNS";

          let tr = document.createElement("tr");
          let tdNum = document.createElement("td");
          let tdPos = document.createElement("td");
          let tdName = document.createElement("td");
          let tdConstruct = document.createElement("td");
          let tdTime = document.createElement("td");
          let tdLap = document.createElement("td");

          tdNum.textContent = carNumber;
          tdPos.textContent = finish;
          tdName.textContent = fullName;
          tdConstruct.textContent = constructorName;
          tdTime.textContent = raceTime;
          tdLap.textContent = fastLap;

          tdNum.textContent = carNumber2;
          tdPos.textContent = finish2;
          tdName.textContent = fullName2;
          tdConstruct.textContent = constructorName2;
          tdTime.textContent = raceTime2;
          tdLap.textContent = fastLap2;

          table.appendChild(tr);
          // tr.classList.add("border", "border-danger" )
          tr.appendChild(tdPos);
          tr.appendChild(tdNum);
          tr.appendChild(tdName);
          tr.appendChild(tdConstruct);
          tr.appendChild(tdTime);
          tr.appendChild(tdLap);
          section.appendChild(table);
        }
      }
    }
  }catch(err){
    para.textContent = "No results returned.";
        section.appendChild(para);
  }
  }
}

let x = 1;

function nextPage(e) {
  // if (y != 0){
  //   x = x - y;
  //   pageNumber = pageNumber.slice(0, 17) + 20 * x++;
  //   console.log(pageNumber);
  //   console.log("x,y, if",x,y);
  // }else{
  //   pageNumber = pageNumber.slice(0, 17) + 20 * x++;
  //   console.log(pageNumber);
  //   console.log("x,y, else",x,y);
  // }

  pageNumber = pageNumber.slice(0, 17) + 20 * x++;
  // console.log(pageNumber);
  // console.log("x,y",x,y);

  // if(pageNumber !== "?limit=20&offset=") {
  //   pageNumber = "?limit=20&offset=" + (pageNumber.substring(17, 19) + 20);
  //   } else {
  //     return;
  //   }
  fetchResults(e);
}

function previousPage(e) {
  if (pageNumber !== "?limit=20&offset=0") {
    pageNumber = "?limit=20&offset=" + (pageNumber.substring(17) - 20);
    x--;
  } else {
    return;
  }
  fetchResults(e);
}
