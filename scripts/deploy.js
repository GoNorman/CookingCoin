async function main() {
    const Counter = await ethers.getContractFactory("Counter");
    
    const counter = await Counter.deploy("Counter");   
    console.log("Contract deployed to address:", counter.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });