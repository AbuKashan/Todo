const express=require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middle ware
app.use(cors());
app.use(express.json());

//ROUTES

app.post("/todos",async(req,res)=>{
    try{
        const {description}=req.body;
        const newtodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",[description]
        );
        res.json(newtodo.rows[0]);
    }
   
    catch(err){
  console.log(err.message);
    }
})
//get all todo 
app.get("/todos",async(req,res)=>{
    try {
        const alltodos = await pool.query("SELECT * FROM todo");
        res.json(alltodos.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get a todo
app.get("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const alltodos = await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(alltodos.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});
//update
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatetodo = await pool.query("UPDATE todo SET description=$1  WHERE todo_id =$2",[description,id]);
        res.json(updatetodo.rows);

    } catch (error) {
        console.error(error.message);
    }
});
//delete
app.delete("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const dlttodo = await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
        res.json(
            "dbchbkdbhaksxuhs"
        );

    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000,()=>{
console.log("server has startted on port 50000");

});
