const express = require('express');
const router = express.Router();

//Get
router.get('/', (req, res) => {
    var ibmdb = require('ibm_db')
    var lower = req.query[0].toString()
    var upper = lower.charAt(0).toUpperCase() + lower.slice(1)
    var allUp = lower.toUpperCase()
    var sql = `select * from mwx86642.testex where "Customer" like '${upper}%' or "Customer" like '${lower}%' or "Customer" like '${allUp}%'`
    ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=mwx86642;PWD=nt6snmxdsqt8-z9v", function (err, conn) {

        if (err) {
            console.log(err)
        }
        conn.query(sql, function (err, data) {
            if (err) { console.log(err) }
            else res.send(data)
            conn.close(function () {
                console.log('updated')
            })
        })
    })
});

//Add

//Delete


module.exports = router;