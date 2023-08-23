// function hidefield() {
//   document.getElementById("volumeAir").style.display = "none";
//   document.getElementById("radiocirculation").style.display = "none";
//   document.getElementById("insulation").style.display = "none";
//   document.getElementById("wallData1").style.display = "none";
//   document.getElementById("wallData2").style.display = "none";
//   document.getElementById("wallData3").style.display = "none";
//   document.getElementById("wallData4").style.display = "none";
//   document.getElementById("wallData5").style.display = "none";
//   document.getElementById("wallData6").style.display = "none";
//   document.getElementById("warehouse-temperature").style.display = "none";
//   document.getElementById("temperatureWarehouse").style.display = "none";
//   document.getElementById("N50").style.display = "none";
//   document.getElementById("manualSluice").style.display = "none";
//   document.getElementById("doorFastVolume").style.display = "none";
//   document.getElementById("doorOpeningVolume").style.display = "none";
//   hidesections();
// }

let tempType = () => {
  var val2 = document.getElementById("tempType");

  if (val2.elements["options"].value == "freeze") {
    document.getElementById("temperatureWarehouse").style.display = "block";
    document.getElementById("N50").style.display = "block";
  } else {
    document.getElementById("temperatureWarehouse").style.display = "none";
    document.getElementById("N50").style.display = "block";
  }
};
let selectTemp = () => {
  var val = document.getElementById("radiowarehouse");
  var radioText = document.getElementById("selectTemp");

  if (val.elements["radioWarehouse"].value == "warehouse") {
    radioText.innerHTML = "Select the warehouse temperature type";
  } else if (val.elements["radioWarehouse"].value == "IT") {
    radioText.innerHTML = "Select the IT-Center temperature type";
  } else if (val.elements["radioWarehouse"].value == "archive") {
    radioText.innerHTML = "Select the archive temperature type";
  } else if (val.elements["radioWarehouse"].value == "library") {
    radioText.innerHTML = "Select the library temperature type";
  }
};
function displayCirculation() {
  var val = document.getElementById("radioventilation");

  console.log(val.elements["radioVentilation"].value);

  if (val.elements["radioVentilation"].value == "yes") {
    document.getElementById("radiocirculation").style.display = "block";
  } else {
    document.getElementById("radiocirculation").style.display = "none";
    document.getElementById("volumeAir").style.display = "none";
  }
}

function displayVolume() {
  var val = document.getElementById("radiocirculation");

  console.log(val.elements["radioCirculation"].value);

  if (val.elements["radioCirculation"].value == "fresh_air") {
    document.getElementById("volumeAir").style.display = "block";
  } else {
    document.getElementById("volumeAir").style.display = "none";
  }
}

function displayInsulation() {
  var val = document.getElementById("radiowalls");

  console.log(val.elements["radioWalls"].value);

  if (val.elements["radioWalls"].value != "0") {
    document.getElementById("insulation").style.display = "block";
  } else {
    document.getElementById("insulation").style.display = "none";
  }
}

function displayLayers() {
  var val = parseInt(document.getElementById("wall-layers").value);

  console.log(val);

  if (val == 0) {
    document.getElementById("wallData1").style.display = "none";
    document.getElementById("wallData2").style.display = "none";
    document.getElementById("wallData3").style.display = "none";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  }

  if (val == 1) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "none";
    document.getElementById("wallData3").style.display = "none";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 2) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "none";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 3) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 4) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 5) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "block";
    document.getElementById("wallData6").style.display = "none";
  } else if (val >= 6) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "block";
    document.getElementById("wallData6").style.display = "block";
  }
}

function displayWarehouse() {
  var val = document.getElementById("radiowarehouse");
  selectTemp();

  if (
    val.elements["radioWarehouse"].value == "warehouse" ||
    val.elements["radioWarehouse"].value == "archive" ||
    val.elements["radioWarehouse"].value == "IT" ||
    val.elements["radioWarehouse"].value == "library"
  ) {
    document.getElementById("warehouse-temperature").style.display = "block";
  } else {
    document.getElementById("warehouse-temperature").style.display = "none";
    document.getElementById("temperatureWarehouse").style.display = "none";
  }
}

function displayStorage() {
  var val = document.getElementById("radiostorage");

  console.log(val.elements["radioStorage"].value);

  if (val.elements["radioStorage"].value == "yes") {
    document.getElementById("storageType").style.display = "block";
  } else {
    document.getElementById("storageType").style.display = "none";
  }
}

function displayOpenings() {
  var val = document.getElementById("radioopenings");
  var doorFastVolume = document.getElementById("doorFastVolume");
  var doorVolume = document.getElementById("doorOpeningVolume");

  if (val.elements["radioOpenings"].value == "door") {
    doorVolume.style.display = "block";
    doorFastVolume.style.display = "none";
    document.getElementById("manualSluice").style.display = "none";
  } else if (val.elements["radioOpenings"].value == "sluice") {
    document.getElementById("manualSluice").style.display = "block";
    doorVolume.style.display = "none";
    doorFastVolume.style.display = "none";
  } else if (val.elements["radioOpenings"].value == "doorFast") {
    doorFastVolume.style.display = "block";
    document.getElementById("manualSluice").style.display = "none";
    doorVolume.style.display = "none";
  }
}
