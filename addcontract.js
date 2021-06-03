
let contractAddress = "0x106af66dEa314479B964F840EC756985be727308";

let admin;


const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)
contract.methods.admin().call().then((e) => {
  admin = e;
})


const checkadmin = () => {
  var ch = document.getElementById("aid").value;
  if (ch == admin) {
    window.location = "/home.html";
  } else {
    document.getElementById("adm_mat").innerHTML = "Admin Address not Matching";
  }
}

const addPassenger = async () => {
  let _passengerId = document.getElementById("ano").value;
  let _flightno = document.getElementById("fno").value;
  let _from = document.getElementById("from").value;
  let _to = document.getElementById("to").value;
  let _date = document.getElementById("date").value;
  let _pnrno = document.getElementById("pnrno").value;
  let _email = document.getElementById("email").value;
  var res;

  await contract.methods.addPassenger(_passengerId, _flightno, _from, _to, _date, _pnrno, _email).send({ from: admin, gas: 3000000 }).then(e => res = e)
  if (res)
    alert("New Travel Registered Successfully");
  else
    alert("Couldn't Add!..");

}
var mailid;
const passdetail = async () => {
  let _passId = document.getElementById("passadr").value;
  mail();
  var res;
  await contract.methods.getPassenger(_passId).call().then(e => res = e)
  let det = res.split("$");
  let travelList = "";
  for (let i = 0; i < det.length; i++) {
    let inside = det[i].split("-");
    travelList += "<tr><th scope='row'>" + i + "</th><td>" + inside[0] + "</td><td>" + inside[1] + "</td><td>" + inside[4] + "/" + inside[3] + "/" + inside[2] + "</td></tr>";
  }

  document.getElementById("table_body_id").innerHTML = travelList;
}

const mail = async () => {
  let _passId = document.getElementById("passadr").value;
  var res;
  await contract.methods.getmailid(_passId).call().then(e => res = e)
  mailid = res;
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sampproj12@gmail.com",
    Password: "project@12",
    To: String(mailid),
    From: "sampproj12@gmail.com",
    Subject: "Enquiry regarding Symptoms of COVID-19",
    Body: "This is just to ask you whether you have any symptoms of COVID-19 like dry cough,sore throat,nausea,fatigue,cold etc.If its there, please don't panic we are there to help you so that we can come to your house and take you for test.If its not there,we strongly suggest you to be home quarantined for atleast 14 days.",
  })
    .then(function (message) {
      alert("mail sent successfully")
    });
}

