import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
}

export const comparePassword = async (password, hashPassword) => {
    const isCorrect = await bcrypt.compare(password, hashPassword);
    return isCorrect;
}