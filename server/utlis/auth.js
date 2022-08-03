const jasonWebToken = require('jsonwebtoken');

const secret ='thesecret'
expiration = "1h"
const signToken = ({_id, username, first_name, last_name, email}) => {
    const payload = {_id, username, first_name, last_name, email};
    return jasonWebToken.sign({data: payload}, secret, {expiresIn: expiration});
};

module.exports = { signToken}