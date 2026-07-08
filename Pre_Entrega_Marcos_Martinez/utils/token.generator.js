import jwt from 'jsonwebtoken';

const generateToken = (userData) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const user= {id: userData.id, email: userData.email};
  const expiration =  { expiresIn: '1h' };
  return jwt.sign(user, secretKey, expiration);
}

export default generateToken;