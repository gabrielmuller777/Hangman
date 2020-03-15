const express = require('express');
const router = express.Router();

//Get
router.get('/', (req, res) => {
    var ibmdb = require('ibm_db')
    var string = req.query[0]
    var sql = `select * from pck31813.vuetest where "first_name" like '${string}'`
    var result = []
    ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=pck31813;PWD=b7nds9fm^dktd27p", function (err, conn) {

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