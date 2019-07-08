// Code your solution in this file!


const logDriverNames = function (drivers) {
  
  drivers.forEach(function (driver, i, arr) {
    
    console.log(driver.name);
    
  });
};



const logDriversByHometown = function (drivers, location) {
  
  drivers.forEach(function (driver, i, arr) {
    
    if (driver.hometown === location) {
      
      console.log(driver.name);
      
    }
    
  });
};


