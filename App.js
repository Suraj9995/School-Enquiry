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

  //   console.log(newData);

  //   const newData = JSON.stringify(data);
  //   let axiosConfig = {
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   };

  axios
    .post("http://103.164.54.202:8010/api/Adm/SaveEnquiry", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}

// const getUsers = () => {
//   axios
//     .get("http://103.164.54.202:8009/api/Master/GetAcademicYear/1")
//     .then((response) => {
//       const users = response.data;
//       console.log(`GET users`, users);
//     })
//     .catch((error) => console.error(error));
// };
// getUsers();

// const postData = (data) => {
//   axios
//     .post(
//       "http://103.164.54.202:8010/api/Adm/SaveEnquiry",
//       JSON.stringify(data)
//     )
//     .then((response) => {
//       const addedUser = response.data;
//       console.log(`POST: user is added`, addedUser);
//     })
//     .catch((error) => console.error(error));
// };
