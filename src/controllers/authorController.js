const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");
const validator= require("validator");

const createAuthor= async function(req, res) {
    try {
        let { title, fname, lname, email, password } = req.body
        if (!title) { return res.status(400).send({ status: false, message: "author title is required" }) }
        if (title !== "Mr") {
            if (title !== "Mrs") {
                if (title !== "Miss") {
                    return res.status(400).send({ status: false, message: "Should be Mr , Mrs , Miss" })
                }
            }
        }
        if (!fname) {
            return res.status(400).send({ status: false, message: "author first name is required" })
        }
        if (!/^[a-zA-Z]+$/.test(fname)) {
            res.status(400).send({ status: false, message: "First name should be a Character" })
        }
        if (!lname) {
            return res.status(400).send({ status: false, message: "author last name is required" })
        }
        if (!/^[a-zA-Z]+$/.test(lname)) {
            res.status(400).send({ status: false, message: "Last name should be a Character" })
        }
        if (!email) {
            return res.status(400).send({ status: false, message: "author email is required" })
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            res.status(400).send({ status: false, message: "Valid emailId is required" })
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "author password is required" })
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            res.status(400).send({ status: false, message: "password should contain atleastone number or one alphabet and should be 8 character long" })
        }
        let authorCreated = await authorModel.create(req.body)
        res.status(201).send({ status: true, date: authorCreated, msg: "created" })
    }
    catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

    const login = async function (req, res) {
        try {
            let userName = req.body.email
            let password = req.body.password
            let user = await authorModel.findOne({ email: userName, password: password })
            if (!user)
                return res.status(404).send({status: false,msg: "username or the password is not correct"})
            let token = jwt.sign({ userId: user._id.toString(),
                batch: "radon",
                organisation: "FUnctionUp",},"functionup-radon")   
            res.status(200).send({ status: true, data: token  })  
        } catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })
        }
    }
module.exports.login= login
module.exports.createAuthor= createAuthor

