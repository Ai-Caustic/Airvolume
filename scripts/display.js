function hidefield() {
  document.getElementById("falsefloor").style.display = "none";
  document.getElementById("falseceiling").style.display = "none";
  document.getElementById("volumeAir").style.display = "none";
  document.getElementById("radiocirculation").style.display = "none";
  document.getElementById("insulation").style.display = "none";
  document.getElementById("wallData1").style.display = "none";
  document.getElementById("wallData2").style.display = "none";
  document.getElementById("wallData3").style.display = "none";
  document.getElementById("wallData4").style.display = "none";
  document.getElementById("wallData5").style.display = "none";
  document.getElementById("wallData6").style.display = "none";
  document.getElementById("warehouse-temperature").style.display = "none";
  document.getElementById("temperatureWarehouse").style.display = "none";
  document.getElementById("N50").style.display = "none";
  document.getElementById("storageType").style.display = "none";
  document.getElementById("tableOpenings").style.display = "none";
  document.getElementById("manualSluice").style.display = "none";
  hidesections();
}

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

function displayFloor() {
  var val = document.getElementById("radiofloor");

  console.log(val.elements["radioFloor"].value);

  if (val.elements["radioFloor"].value == "yes") {
    document.getElementById("falsefloor").style.display = "block";
    document.getElementById("volumeFloor").innerHTML = "";
  } else {
    document.getElementById("falsefloor").style.display = "none";
    document.getElementById("heightFloor").value = "";
    floorVolume = 0;
    document.getElementById("volumeFloor").innerHTML = 0;
  }
}

function displayCeiling() {
  var val = document.getElementById("radioCeiling");

  console.log(val.elements["radioCeiling"].value);

  if (val.elements["radioCeiling"].value == "yes") {
    document.getElementById("falseceiling").style.display = "block";
  } else {
    document.getElementById("falseceiling").style.display = "none";
    document.getElementById("heightCeiling").value = "";
    ceilingVolume = 0;
    document.getElementById("volumeCeiling").innerHTML = 0;
  }
}

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

  if (
    val.elements["radioOpenings"].value == "door" ||
    val.elements["radioOpenings"].value == "doorFast"
  ) {
    document.getElementById("tableOpenings").style.display = "block";
    document.getElementById("manualSluice").style.display = "none";
  } else if (val.elements["radioOpenings"].value == "sluice") {
    document.getElementById("tableOpenings").style.display = "none";
    document.getElementById("manualSluice").style.display = "block";
  }
}
