const app=require('./backend/app');
const debug=require('debug');
const http=require('http');

const port=process.env.PORT||3000;
app.set('port',port);
const server=http.createServer(app);

server.listen(port,()=>{
    console.log("Server listening to 3000");
});