const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get("/likes", async (req, res) => {
    try {
      const likes = await pool.query("SELECT * FROM likes");
      res.json(likes[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/likes/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const like = await pool.query("SELECT * FROM likes WHERE id = ?", [id]);
  
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post("/likes", async (req, res) => {
    try {
      const { description } = req.body;
  
      console.log(req.body);
      const newTodo = await pool.query(
        "INSERT INTO likes (user_id, image_id, created_at, updated_at) VALUES (?,?,?,?)",
  
        [description.user_id,description.image_id,description.created_at,description.updated_at]
      );
  
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/likes/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleteTodo = await pool.query("DELETE FROM likes WHERE id = ?", [
        id
      ]);
  
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post("/images", async (req, res) => {
    try {
      const { description } = req.body;
  
      const newTodo = await pool.query(
        "INSERT INTO images (user_id, category_id, image_path, description) VALUES (?,?,?,?)",
  
        [description.user_id, description.category_id, description.image_path, description.description]
      );
      
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.put("/images/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateTodo = await pool.query(
        "UPDATE images SET category_id = ?, image_path = ?, description = ? WHERE id = ?",
        [description.category_id, description.image_path, description.description, id]
      );
      
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/images/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleteTodo = await pool.query("DELETE FROM images WHERE id = ?", [
        id
      ]);
      
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/images/:file", async (req, res) => {
    try {
      const { file } = req.params;
      
      
      const image = await pool.query("SELECT * FROM images WHERE image_path = ?", [file]);
      
      res.json(image[0]);
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  

