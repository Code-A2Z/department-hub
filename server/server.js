    const express= require('express');
    const mongoose=require('mongoose');
    const cors=require('cors');
    require('dotenv').config();
    
    const userRoutes= require('./src/routes/userRoutes');
    const noticeRoutes=require('./src/routes/noticeRoutes');

    const app=express();

    //middleware
    app.use(express.json());
    app.use(cors());

    //database connection
    app.use(express.json());
    app.use(cors());

    //database connection
    // const mongoUri=process.env.MONGO_URI;

    // mongoose.connect(mongoUri)
    //     .then(()=>console.log('MongoDB connected successfully'))
    //     .catch(err=>console.error('MongoDB connection error:', err));

    //api routes
    app.use('/api/users',userRoutes);
    app.use('/api/notices',noticeRoutes);

    //welcome route
    app.get('/',(req,res)=>{
        res.send('Welcome to the Department Hub Backend!');
    })
    //start the server
    const PORT=process.env.PORT|| 5000;
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
