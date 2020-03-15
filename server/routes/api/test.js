var ibmdb = require('ibm_db')
function retrieveData(callback) {

    var result = []
    ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=pck31813;PWD=b7nds9fm^dktd27p", function (err, conn) {

        if (err) {
            console.log(err)
            callback()
        }
        conn.query(`select * from pck31813.vuetest where "first_name" like 'Br%'`, function (err, data) {
            if (err) { console.log(err) }
            else {
                result.push(data)
                if (typeof callback === "function") {
                    callback(result);
                }
            }
            conn.close(function () {
                console.log('updated')
            })
        })
    })
}
module.exports = retrieveData
