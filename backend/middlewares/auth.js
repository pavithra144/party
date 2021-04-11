require('dotenv').config();
const jwt = require('jsonwebtoken')

const auth = ((req,res,next) => {
const token = req.header('auth-token');
//if no token
if(!token) {
    res.status(401).json({msg: 'No token, Access denied!'})
}
//if we have token
try {
   const decoded = jwt.verify(token, process.env.SECRET)
   req.user = decoded.user 
   next()
} catch (error) {
    res.status(404).json({msg: 'Invalid token'}) 
}
})

module.exports = auth