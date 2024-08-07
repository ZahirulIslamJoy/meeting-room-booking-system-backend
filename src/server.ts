import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';


let server:Server;

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Example app listening  port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

//handling asynchronous tasks 
process.on("unhandledRejection",()=>{
  console.log("unhandledRejection Found,server is shutting down")
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }
  else{
    process.exit(1)
  }
})
process.on("uncaughtException" , ()=>{
  console.log("uncaughtException Found,server is shutting down")
  process.exit(1)
})

