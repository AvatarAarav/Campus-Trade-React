import sqlite3 from 'sqlite3';
import * as fsExtra from 'fs-extra'
import fs from 'fs'
export const getAllProducts =async () => {
  var db = new sqlite3.Database('Campus_Trade.db');

  // Define the SQL query to retrieve all rows from the table
  const query = 'SELECT * FROM products';
  // Execute the SQL query and retrieve all rows as an object
  return new Promise((resolve, reject) => {
    db.all(query, [], function (err, rows) {
      if (err) {
        reject(err)
      } else {
        resolve(rows);
      }
    });
    // Close the database connection
    db.close();
  });
}

export const getProduct=(id)=>{
  var db = new sqlite3.Database('Campus_Trade.db');
  // Define the SQL query to retrieve all rows from the table
  const query = 'SELECT * FROM products where id=?';
  // Execute the SQL query and retrieve all rows as an object
  return new Promise((resolve, reject) => {
    db.all(query, [id], function (err, rows) {
      if (err) {
        reject(err)
      } else {
        resolve(rows);
      }
    });
    // Close the database connection
    db.close();
  });
}

export const AddFormData = ({ name, type, description,email ,age, price, photo }) => {
  var db = new sqlite3.Database('Campus_Trade.db');
  // Save the uploaded photo to the database
  db.run('INSERT INTO products (name, type,description,email,age,price,img_type,img_content) VALUES (?, ?, ?, ?,?,?,?,?)', [name, type, description, email,age, price, photo.mimetype, fs.readFileSync(photo.path)], (err) => {
    if (err) {
      console.error(err);
    } else {

      /*For uploading file,we need to first convert it to savable form,for which we have to save it in 
      a local file (.ie uploads) folder but later we don't need to save the photo twice(1 in mysql other in uploads folder), thatswhy 
      here we are removing the contents of the folder
      */
      fsExtra.emptyDirSync('uploads/');
      console.log("Data Entered in Database")
    }
  });
}

export const AddUser = ({ name, email, password, collegeName, year }) => {
  var db = new sqlite3.Database('Campus_Trade.db');
  // Save the uploaded photo to the database
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users (name, email,password,college_name,year) VALUES (?, ?, ?, ?,?)', [name, email, password, collegeName, year], function (err) {
      if (err) {
        reject(err)
      } else {
        resolve({ id: this.lastID, name, email, password, collegeName, year })
      }
    });
  })
}

export const checkLogin = ({ email, password }) => {
  var db = new sqlite3.Database('Campus_Trade.db');
  const query = 'SELECT * FROM users where email=?';
  // Execute the SQL query and retrieve all rows as an object
  return new Promise((resolve, reject) => {
    db.all(query, [email], function (err, rows) {
      if (err) {
        reject(err)
      } else {
        if (rows.length == 0)
          resolve({ err: "No Record Found" })
        else if (rows[0].password == password) {
          // console.log(rows);
          resolve(rows[0]);
        }
        else
          resolve({ err: "Wrong Details" })
      }
    });
    // Close the database connection
    db.close();
  });
}

export const getUserDataAPI = ({userId, pass}) => {
  var db = new sqlite3.Database('Campus_Trade.db');
  const query = 'SELECT * FROM users where id=?';
  // Execute the SQL query and retrieve all rows as an object
  return new Promise((resolve, reject) => {
    db.all(query, [userId], function (err, rows) {
      if (err) {
        reject(err)
      } else {
        if (rows.length == 0)
          resolve({ err: "No Record Found" })
        else if (rows[0].password == pass) {
          // console.log(rows);
          resolve(rows[0]);
        }
        else
          resolve({ err: "Wrong Details" })
      }
    });
    // Close the database connection
    db.close();
  });
}