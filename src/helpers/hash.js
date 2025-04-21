import bcrypt from 'bcrypt';

export let hash = async (data) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
};