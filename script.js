web = new Web3("http://127.0.0.1:7545")
async function updateAccounts() {
    await web.eth.getAccounts().then(async(e) => {
        accounts = e;
        html = ""
        await e.forEach((element, i) => {
            if (i == 0) {
                html += `<option value="${element}" selected>${element}</option> `
            } else {
                html += `<option value="${element}">${element}</option> `
            }
        });
        await $("#accounts").html(html)
    })
}

var vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;
