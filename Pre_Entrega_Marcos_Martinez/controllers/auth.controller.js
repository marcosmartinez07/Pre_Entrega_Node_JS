import generateToken from '../utils/token.generator.js';

const defaultUser = {
    id: 1,
    email: 'user@gmail.com',
    password: 'password123'
};


async function login(req, res) {
    const { email, password } = req.body;
    const user = {id:1 ,email }

    if (email === defaultUser.email && password === defaultUser.password) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
}

export default login;