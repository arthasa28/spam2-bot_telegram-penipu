const axios = require("axios");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.telegram.org/bot6712848372:AAGNwQSSjWjh77wLCQXcR_iFwmvUplZFkS8/sendMessage?chat_id=5658697363&text=NGOCOK MULU",
  Headers: {},
};
const gasSpam = (no) => {
  axios.request(config).then((response) => {
    console.log(no, "Bom Di Kirim!!");
    let x = no + 1;
    gasSpam(x);
  });
};

gasSpam(1);
