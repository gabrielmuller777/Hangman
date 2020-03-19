const express = require('express');
const router = express.Router();

//Get
router.get('/', (req, res) => {
    var ibmdb = require('ibm_db')
    var sql = req.query[0]
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