// Code your solution here      // Code your solution here
findMatching= (drivers, query)=>{
    return drivers.filter(driver => 
      driver.toLowerCase()=== query.toLowerCase()
    );
  }
fuzzyMatch= (drivers, query)=>{
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
matchName= (drivers, query)=>{
    return drivers.filter(driver => 
      driver.name.toLowerCase()=== query.toLowerCase()
    );
  }