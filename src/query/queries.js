const getQuestion = `SELECT * FROM PUBLIC."QUESTION" WHERE "ACTIVE_FLAG" = 1`;

const getQuestionById = `SELECT * FROM PUBLIC."QUESTION" WHERE "ID" = $1 AND "ACTIVE_FLAG" = 1`;

const getTitle = `SELECT * FROM PUBLIC."MAIN_TITLE" WHERE "ACTIVE_FLAG" = 1`;

const getTitleById = `SELECT * FROM PUBLIC."MAIN_TITLE" WHERE "ID" = $1 AND "ACTIVE_FLAG" = 1`;

const getAnswer = `SELECT * FROM PUBLIC."ANSWER" WHERE "ACTIVE_FLAG" = 1`;

const getAnswerById = `SELECT * FROM PUBLIC."ANSWER" WHERE "ID" = $1 AND "ACTIVE_FLAG" = 1`;

const createTitle = 'INSERT INTO books(name, price) VALUES($1, $2) RETURNING *'

module.exports = {
    getQuestion,
    getQuestionById,
    getTitle,
    getTitleById,
    getAnswer,
    getAnswerById,
    createTitle,
}