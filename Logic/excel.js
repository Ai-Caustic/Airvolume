//Creating a downloadable excel sheet containing all the data

//Function for testing on the General data section

//General Data (Data)

//Generate Excel File

document.getElementById("demo").onclick = () => {
  // General Data
  var client = document.getElementById("Client").value;
  var projectName = document.getElementById("projectName").value;
  var projectLo = document.getElementById("projectLo").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;

  // GENERATE DEMO EXCEL FILE
  var data = [
    ["Client", client],
    ["Project Name", projectName],
    ["Location", projectLo],
    ["City", city],
    ["Country", country],
  ];

  var workbook = XLSX.utils.book_new(),
    worksheet = XLSX.utils.aoa_to_sheet(data);
  workbook.SheetNames.push("First");
  workbook.Sheets["First"] = worksheet;

  // (C3) TO BINARY STRING
  var xlsbin = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "binary",
  });

  // (C4) TO BLOB OBJECT
  var buffer = new ArrayBuffer(xlsbin.length),
    array = new Uint8Array(buffer);
  for (var i = 0; i < xlsbin.length; i++) {
    array[i] = xlsbin.charCodeAt(i) & 0xff;
  }
  var xlsblob = new Blob([buffer], { type: "application/octet-stream" });
  delete array;
  delete buffer;
  delete xlsbin;

  // (C5) "FORCE DOWNLOAD"
  var url = window.URL.createObjectURL(xlsblob),
    anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "excel.xlsx";
  anchor.click();
  window.URL.revokeObjectURL(url);
  delete anchor;
};
