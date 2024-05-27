import bycrypt from 'bcrypt';

// hashing plain password
export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bycrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

// Compare password
export const comparePassword = async (password, hashedPassword) => {
    return bycrypt.compare(password, hashedPassword);
};