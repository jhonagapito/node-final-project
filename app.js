const express =  require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const dbConnect = require('./db/dbConnect');

const attendanceRouter = require('./routers/attendanceRouter');
const memberRouter = require('./routers/memberRouter');
const eventRouter = require('./routers/eventRouter');



dotenv.config({
    path: './config/config.env'
});

dbConnect();

const app = express();
const port = process.env.PORT;

app.use(express.json());
//app.use(helmet());
app.use('/events', eventRouter);
app.use('/attendance', attendanceRouter);
app.use('/members', memberRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});