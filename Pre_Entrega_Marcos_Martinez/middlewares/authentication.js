import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;

console.log('Secret Key:', secretKey); 

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            error: 'Unauthorized', 
            message: 'Acceso denegado: Falta el token de autenticación.' 
        });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            // Si el token no es válido o expiró
            return res.status(403).json({ 
                error: 'Forbidden', 
                message: 'Acceso denegado: El token proporcionado es inválido o ha expirado.' 
            });
        }
        
        req.user = user;
        next();
    });
};

export default authenticateToken;