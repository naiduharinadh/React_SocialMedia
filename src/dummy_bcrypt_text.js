const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Set a random fallback
bcrypt.setRandomFallback((len) => crypto.randomBytes(len).toString('hex'));

// Define the main function
const main = async () => {
    try {
        // Generate a salt with 5 rounds
        const salt = await bcrypt.genSalt(5);
        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash("hairnadh", salt);
        // Output the hashed password
        console.log('Hashed Password:', hashedPassword);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Run the main function
main();
