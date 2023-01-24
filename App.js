function postData() {
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let enquiryType = document.getElementById("enquiryType").value;
  let fatherName = document.getElementById("fatherName").value;
  let fatherContact = document.getElementById("fatherContact").value;
  let fatherMailId = document.getElementById("fatherMailId").value;
  let motherName = document.getElementById("motherName").value;
  let motherCotact = document.getElementById("motherCotact").value;
  let motherMailId = document.getElementById("motherMailId").value;
  let societyName = document.getElementById("societyName").value;
  let area = document.getElementById("area").value;
  let pinCode = document.getElementById("pinCode").value;
  let siblingDetails = document.getElementById("siblingDetails").value;
  let lastSchool = document.getElementById("lastSchool").value;
  let lastBoard = document.getElementById("lastBoard").value;
  let lastClass = document.getElementById("lastClass").value;
  let remark = document.getElementById("remark").value;

  let data = {
    id: 5,
    enquiryCode: "003",
    academicYearId: 2,
    tenantBoardId: 2,
    tenantClassId: 2,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    enquiryType: enquiryType,
    fatherName: fatherName,
    fatherContact: fatherContact,
    fatherMailId: fatherMailId,
    motherName: motherName,
    motherCotact: motherCotact,
    motherMailId: motherMailId,
    societyName: societyName,
    area: area,
    pinCode: pinCode,
    siblingDetails: siblingDetails,
    lastSchool: lastSchool,
    lastBoard: lastBoard,
    lastClass: lastClass,
    remark: remark,
    intractionStatus: "-",
    enquireDate: new Date(),
    IntrDate: new Date(),
    tenantId: 1,
    status: "Pending",
  };
  
}
