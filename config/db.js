import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`connected to mongodb database ${conn.connection.host}`.bgCyan.white
        );
    }
    catch (error) {
        // ${ } template littrells or template string
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;