function hidesections() {
  document.getElementById("section1").style.display = "block";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "none";
  document.getElementById("section8").style.display = "none";
  document.getElementById("section9").style.display = "none";
  document.getElementById("section10").style.display = "none";
  document.getElementById("section11").style.display = "none";
  document.getElementById("section12").style.display = "none";
}

function change1() {
  client = document.getElementById("Client").value;
  projectName = document.getElementById("projectName").value;
  //location = document.getElementById("Location").value;
  city = document.getElementById("city").value;
  country = document.getElementById("country").value;

  //   if (
  //     client !== "" &&
  //     projectName !== "" &&
  //     location !== "" &&
  //     city !== "" &&
  //     country !== ""
  //   ) {
  //     document.getElementById("section1").style.display = "none";
  //     document.getElementById("section2").style.display = "block";
  //   } else {
  //     console.log("Please fill in the fields");
  //   }
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

function revert1() {
  document.getElementById("section1").style.display = "block";
  document.getElementById("section2").style.display = "none";
}

function change2() {
  var val = document.getElementById("radiowarehouse");
  temperature = document.getElementById("temperature").value;
  n50 = document.getElementById("n50").value;

  if (
    val.elements["radioWarehouse"].value == "archive" ||
    val.elements["radioWarehouse"].value == "IT" ||
    val.elements["radioWarehouse"].value == "library"
  ) {
    document.getElementById("section3").style.display = "block";
    document.getElementById("section2").style.display = "none";
  } else if (val.elements["radioWarehouse"].value == "warehouse") {
    if (temperature !== "" && n50 !== "") {
      document.getElementById("section3").style.display = "block";
      document.getElementById("section2").style.display = "none";
    } else {
      console.log("Input values");
    }
  }
}

function revert2() {
  document.getElementById("section2").style.display = "block";
  document.getElementById("section3").style.display = "none";
}

function change3() {
  var val = document.getElementById("radioroom");
  manualSurface = document.getElementById("areaRoom1").value;
  manualVolume = document.getElementById("volumeRoom1").value;
  length = document.getElementById("lengthRoom").value;
  width = document.getElementById("widthRoom").value;
  height = document.getElementById("heightRoom").value;

  if (val.elements["radioRoom"].value == "manually") {
    if (manualSurface !== "" && manualVolume !== "") {
      document.getElementById("section4").style.display = "block";
      document.getElementById("section3").style.display = "none";
    } else {
      console.log("Input Values");
    }
  } else if (val.elements["radioRoom"].value == "compute") {
    if (length !== "" && width !== "" && height !== "") {
      document.getElementById("section4").style.display = "block";
      document.getElementById("section3").style.display = "none";
    } else {
      console.log("Input Values");
    }
  }
  volumeTotal();
}

function revert3() {
  document.getElementById("section4").style.display = "none";
  document.getElementById("section3").style.display = "block";
}

function change4() {
  var val = document.getElementById("radiofloor");
  height = document.getElementById("heightFloor").value;

  if (val.elements["radioFloor"].value == "no") {
    document.getElementById("section5").style.display = "block";
    document.getElementById("section4").style.display = "none";
  } else if (val.elements["radioFloor"].value == "yes") {
    if (height !== "") {
      document.getElementById("section5").style.display = "block";
      document.getElementById("section4").style.display = "none";
    } else {
      console.log("Input values");
    }
  }
  volumeTotal();
}

function revert4() {
  document.getElementById("section5").style.display = "none";
  document.getElementById("section4").style.display = "block";
}

function change5() {
  var val = document.getElementById("radioCeiling");
  height = document.getElementById("heightCeiling").value;

  if (val.elements["radioCeiling"].value == "no") {
    document.getElementById("section6").style.display = "block";
    document.getElementById("section5").style.display = "none";
  } else if (val.elements["radioCeiling"].value == "yes") {
    if (height !== "") {
      document.getElementById("section6").style.display = "block";
      document.getElementById("section5").style.display = "none";
    } else {
      console.log("Input values");
    }
  }
  volumeTotal();
}

function revert5() {
  document.getElementById("section6").style.display = "none";
  document.getElementById("section5").style.display = "block";
}

function change6() {
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "block";
}

function revert6() {
  document.getElementById("section6").style.display = "block";
  document.getElementById("section7").style.display = "none";
}

function change7() {
  val = document.getElementById("radioventilation");
  air = document.getElementById("volAir").value;
  val1 = document.getElementById("radiocirculation");

  if (val.elements["radioVentilation"].value == "no") {
    document.getElementById("section7").style.display = "none";
    document.getElementById("section8").style.display = "block";
  } else if (val.elements["radioVentilation"].value == "yes") {
    if (val1.elements["radioCirculation"].value == "air_circulation") {
      document.getElementById("section7").style.display = "none";
      document.getElementById("section8").style.display = "block";
    } else if (val1.elements["radioCirculation"].value == "fresh_air") {
      if (air !== "") {
        document.getElementById("section7").style.display = "none";
        document.getElementById("section8").style.display = "block";
      } else {
        console.log("Input values");
      }
    }
  }
}

function revert7() {
  document.getElementById("section7").style.display = "block";
  document.getElementById("section8").style.display = "none";
}

function change8() {
  val = document.getElementById("radiowalls");
  val1 = document.getElementById("insulationtype");
  val2 = document.getElementById("windload");

  if (
    val.elements["radioWalls"].value !== "" &&
    val1.elements["insulationType"].value !== "" &&
    val2.elements["windLoad"].value !== ""
  ) {
    document.getElementById("section9").style.display = "block";
    document.getElementById("section8").style.display = "none";
  } else if (val.elements["radioWalls"].value == "0") {
    if (val2.elements["windLoad"].value !== "") {
      document.getElementById("section9").style.display = "block";
      document.getElementById("section8").style.display = "none";
    }
  } else {
    console.log("Input values");
  }
}

function revert8() {
  document.getElementById("section9").style.display = "none";
  document.getElementById("section8").style.display = "block";
}

function change9() {
  var val = document.getElementById("radioopenings");
  var val1 = document.getElementById("sluicevolume");
  openings = document.getElementById("wall-layers").value;
  manuaVolume = document.getElementById("volumeSluice1").value;
  surfaceSluice = document.getElementById("surfaceSluice").value;
  heightSluice = document.getElementById("heightSluice").value;
  widthOpening = document.getElementById("widthOpening").value;
  heightOpening = document.getElementById("heightOpening").value;

  if (val.elements["radioOpenings"].value == "sluice") {
    if (val1.elements["sluiceVolume"].value == "no") {
      if (surfaceSluice !== "" && heightSluice !== "" && openings !== "") {
        document.getElementById("section9").style.display = "none";
        document.getElementById("section10").style.display = "block";
      } else if (val1.elements["sluiceVolume"].value == "yes") {
        if (manualVolume !== "" && openings !== "") {
          document.getElementById("section9").style.display = "none";
          document.getElementById("section10").style.display = "block";
        }
      } else {
        console.log("Input Values");
      }
    } else if (val1.elements["sluiceVolume"].value == "yes") {
      if (manualVolume !== "" && openings !== "") {
        document.getElementById("section9").style.display = "none";
        document.getElementById("section10").style.display = "block";
      }
    } else {
      console.log("Input Values");
    }
  } else if (
    val.elements["radioOpenings"].value == "door" ||
    val.elements["radioOpenings"].value == "doorFast"
  ) {
    if (widthOpening !== "" && heightOpening !== "" && openings !== "") {
      document.getElementById("section9").style.display = "none";
      document.getElementById("section10").style.display = "block";
    } else {
      console.log("Input Values");
    }
  } else {
    console.log("Input Values");
  }
}

function revert9() {
  document.getElementById("section9").style.display = "block";
  document.getElementById("section10").style.display = "none";
}

function change10() {
  var val = document.getElementById("radioequipment");
  length = document.getElementById("length-equipment").value;
  width = document.getElementById("width-equipment").value;
  height = document.getElementById("height-equipment").value;
  temp = document.getElementById("temp-equipment").value;

  if (val.elements["radioEquipment"].value == "no") {
    document.getElementById("section10").style.display = "none";
    document.getElementById("section11").style.display = "block";
  } else if (val.elements["radioEquipment"].value == "yes") {
    if (length !== "" && width !== "" && height !== "" && temp !== "") {
      document.getElementById("section10").style.display = "none";
      document.getElementById("section11").style.display = "block";
    } else {
      console.log("Input Values");
    }
  } else {
    console.log("Input Values");
  }
}

function revert10() {
  document.getElementById("section10").style.display = "block";
  document.getElementById("section11").style.display = "none";
}

function change11() {
  var val = document.getElementById("radiostorage");

  volume = document.getElementById("stockpercentage").value;
  oxyContent = document.getElementById("oxygenContent").value;

  if (val.elements["radioStorage"].value == "no") {
    if (oxyContent !== "") {
      document.getElementById("section11").style.display = "none";
      document.getElementById("section12").style.display = "block";
    } else {
      console.log("Input Values");
    }
  } else if (val.elements["radioStorage"].value == "yes") {
    if (volume !== "" && oxyContent !== "") {
      document.getElementById("section11").style.display = "none";
      document.getElementById("section12").style.display = "block";
    } else {
      console.log("Input Values");
    }
  } else {
    console.log("Input Values");
  }
}

function revert11() {
  document.getElementById("section11").style.display = "block";
  document.getElementById("section12").style.display = "none";
}
