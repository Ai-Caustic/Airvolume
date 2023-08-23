//Creating a downloadable excel sheet containing all the data

document.getElementById("demo").onclick = () => {
  //General Data
  var owner = document.getElementById("projectOwner").value;
  var client = document.getElementById("Client").value;
  var projectName = document.getElementById("projectName").value;
  var projectDate = document.getElementById("projectDate").value;
  var projectAddress = document.getElementById("address").value;
  var projectStreet = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;

  //Warehouse

  var radioWarehouse = document.getElementById("radiowarehouse");
  var radioWarehouseValue = radioWarehouse.elements["radioWarehouse"].value;
  var temperatureWarehouse = document.getElementById("temperature").value;
  var n50 = document.getElementById("n50").value;

  //Room

  var manualVolumeRoom = document.getElementById("manualRoomVolume").value;
  var lengthRoom = document.getElementById("lengthRoom").value;
  var widthRoom = document.getElementById("widthRoom").value;
  var heightRoom = document.getElementById("heightRoom").value;
  var surfaceRoom = document.getElementById("areaRoom").value;
  var roomvolume = document.getElementById("volumeRoom").value;

  //False Floor

  var heightFalseFloor = document.getElementById("heightFloor").value;
  var floorVolume = document.getElementById("volumeFloor").value;

  //False Ceiling

  var heightFalseCeiling = document.getElementById("heightCeiling").value;
  var ceilingVolume = document.getElementById("volumeCeiling").value;

  //Ventilation

  var radioVentilation = document.getElementById("radioventilation");
  var radioVentilationValue =
    radioVentilation.elements["radioVentilation"].value;
  var airVolume = document.getElementById("volAir").value;
  var radioCirculation = document.getElementById("radiocirculation");
  var radioCirculationValue =
    radioCirculation.elements["radioCirculation"].value;

  //Walls

  var radioWalls = document.getElementById("radiowalls");
  var radioWallsValue = radioWalls.elements["radioWalls"].value;
  var insulationType = document.getElementById("insulationtype");
  var insulationTypeValue = insulationType.elements["insulationType"].value;
  var windLoad = document.getElementById("windload");
  var radioWindLoadValue = windLoad.elements["windLoad"].value;

  //Openings

  var radioOpenings = document.getElementById("radioopenings");
  var radioOpeningsValue = radioOpenings.elements["radioOpenings"].value;
  var openings = document.getElementById("wall-layers").value;
  var manuaVolumeSluice = document.getElementById("volumeSluice1").value;
  var radioStorage = document.getElementById("radiostorage");
  var radioStorageValue = radioStorage.elements["radioStorage"].value;
  var oxyContentStorage = document.getElementById("oxygenContent").value;

  //GENERATE EXCEL FILE
  var data = [
    ["GENERAL DATA"],
    [],
    ["Project Owner", owner],
    ["Client", client],
    ["Project Name", projectName],
    ["Date", projectDate],
    ["Address", projectAddress],
    ["Street", projectStreet],
    ["City", city],
    ["Country", country],
    [],
    ["WAREHOUSE"],
    ["Type", radioWarehouseValue],
    ["Warehouse Temperature", temperatureWarehouse],
    ["N-50 value", n50],
    [],
    ["ROOM"],
    [],
    ["Length", lengthRoom],
    ["Width", widthRoom],
    ["Height", heightRoom],
    ["Surface Area", surfaceRoom],
    ["Manual Volume", manualVolumeRoom],
    ["Volume Room", roomvolume],
    [],
    ["FALSE FLOOR"],
    ["Height", heightFalseFloor],
    ["Volume Floor", floorVolume],
    [],
    ["FALSE CEILING"],
    ["Height", heightFalseCeiling],
    ["Ceiling volume", ceilingVolume],
    [],
    ["VENTILATION"],
    ["Ventilation present?", radioVentilationValue],
    [],
    ["Air Volume", airVolume],
    ["Ventilation type", radioCirculationValue],
    [],
    ["OUTSIDE WALLS"],
    [],
    ["Outside walls", radioWallsValue],
    ["Insulation type", insulationTypeValue],
    ["Wind load", radioWindLoadValue],
    [],
    ["OPENINGS"],
    [],
    ["Opening", radioOpeningsValue],
    [],
    ["Openings present", openings],
    ["Manual Sluice Volume", manuaVolumeSluice],
    [],
    [],
    ["PROTECTED MATERIAL"],
    [],
    ["Protected material present?", radioStorageValue],
    ["Oxygen Content", oxyContentStorage],
  ];

  var workbook = XLSX.utils.book_new(),
    worksheet = XLSX.utils.aoa_to_sheet(data);
  workbook.SheetNames.push("First");
  workbook.Sheets["First"] = worksheet;

  //TO BINARY STRING
  var xlsbin = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "binary",
  });

  //TO BLOB OBJECT
  var buffer = new ArrayBuffer(xlsbin.length),
    array = new Uint8Array(buffer);
  for (var i = 0; i < xlsbin.length; i++) {
    array[i] = xlsbin.charCodeAt(i) & 0xff;
  }
  var xlsblob = new Blob([buffer], { type: "application/octet-stream" });
  delete array;
  delete buffer;
  delete xlsbin;

  //"FORCE DOWNLOAD"
  var url = window.URL.createObjectURL(xlsblob),
    anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "excel.xlsx";
  anchor.click();
  window.URL.revokeObjectURL(url);
  delete anchor;
};
