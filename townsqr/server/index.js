const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("./db");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes//

//New post
app.post("/chat", async(req, res)=>{
    try {
        const {message } = req.body;
        const {tag } = req.body;
        const  newMessage = await pool.query(
            "INSERT INTO chat (message , tag) VALUES ($1 , $2)", 
            [message, tag]
        );

        res.json(newMessage.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }

})

//get all messages
app.get("/chat", async(req, res) => {
    try {
        const allmessages = await pool.query
        ("Select * FROM chat");
        res.json(allmessages.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get a message tag
app.get("/chat/:tag",async(req, res) => {
    try {
        const { tag } = req.params;
        const msgtag = await pool.query
        ("SELECT * FROM chat WHERE tag = $1",[tag]); 
        res.json(msgtag.rows[0]);
    } catch (err) {
        console.error(err.message)
        
    }
})

 
app.listen(5000, () =>{
    console.log("server has started on port 5000");
});