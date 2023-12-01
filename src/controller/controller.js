const pool = require('../db');
const queries = require('../query/queries');


const getQuestion = (req, res) =>{
  pool.query(queries.getQuestion, (err, result) => {
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

const getQuestionById = (req, res)=>{
  const id = req.params.id;
  pool.query(queries.getQuestionById, [id], (err, result) =>{
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

const getTitle = (req, res) =>{
  pool.query(queries.getTitle, (err, result) => {
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

const getTitleById = (req, res)=>{
  const id = req.params.id;
  pool.query(queries.getTitleById, [id], (err, result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

const getAnswer = (req, res)=>{
  pool.query(queries.getAnswer,(err, result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

const getAnswerById = (req, res)=>{
  const id = req.params.id;
  pool.query(queries.getAnswerById, [id], (err, result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
  })
}

module.exports = {
  getQuestion,
  getQuestionById,
  getTitle,
  getTitleById,
  getAnswer,
  getAnswerById,
}


















