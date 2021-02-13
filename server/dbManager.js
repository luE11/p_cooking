var pgp = require('pg-promise')(/* options */)
var dbInfo = require('./data/admin_info.json').database
//"host.docker.internal"
var db = pgp(`postgres://${dbInfo.username}:${dbInfo.password}@${dbInfo.host}:${dbInfo.port}/${dbInfo.database_name}`)

var Pool = require('pg').Pool

const pool = new Pool({
    user: dbInfo.username,
    host: dbInfo.host,
    database: dbInfo.database_name,
    password: dbInfo.password,
    port: dbInfo.port
})

class dbManager {

    constructor(){
    }

    test1() {
        pool.query('SELECT * FROM users', (err, res) =>{
            if(err){
                console.log(err)
            }
            console.log(res)
        })

        /*db.result('SELECT * FROM users', null, r => r.fields)
            .then(function(data){
                console.log(data)
            }).catch(e =>{
                console.log(e)
            })*/
    }
}

module.exports = dbManager;


