function getFullTime(tanggal) {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const date = tanggal.getDate();
    const month = tanggal.getMonth();
    const year = tanggal.getFullYear();
    let hours = tanggal.getHours();
    let minutes = tanggal.getMinutes();
  
    if (hours <= 9) {
      hours = "0" + hours;
    }
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    return `${date} ${monthList[month]} ${year} ${hours}:${minutes}`;
  }

  function getDistanceTime(time) {
    const timeNow = new Date().getTime(); 
    const timePosted = time; 
  
    const distance = timeNow - timePosted; 
  
   
    const distanceSeconds = Math.floor(distance / 1000); 
    const distanceMinutes = Math.floor(distance / 1000 / 60); 
    const distanceHours = Math.floor(distance / 1000 / 60 / 60); 
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24);
    const distanceWeek = Math.floor(distance / 1000 / 60 / 60 / 24 / 7);
    const distanceMonth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30.44); 
    const distanceYear = Math.floor(distance / 1000 / 60 / 60 / 24 / 365); 
  
    console.log(distanceSeconds);
    console.log(distanceMinutes);
    console.log(distanceHours);
    console.log(distanceDay);
    console.log(distanceWeek);
    console.log(distanceMonth);
    console.log(distanceYear);
  
    if (distanceYear > 0) {
      return `${distanceYear} Year Ago`;
    } else if (distanceMonth > 0) {
      return `${distanceMonth} Month Ago`;
    } else if (distanceWeek > 0) {
      return `${distanceWeek} Week Ago`;
    } else if (distanceDay > 0) {
      return `${distanceDay} Day Ago`;
    } else if (distanceHours > 0) {
      return `${distanceHours} Hours Ago`;
    } else if (distanceMinutes > 0) {
      return `${distanceMinutes} Minutes Ago`;
    } else if (distanceSeconds > 0) {
      return `${distanceSeconds} Seconds Ago`;
    }
}
var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let description = document.getElementById("description").value;
    let nodeJS = document.getElementById("nodeJS").checked;
    let reactJS = document.getElementById("reactJS").checked;
    let javaScript = document.getElementById("javaScript").checked;
    let vueJS = document.getElementById("vueJS").checked;
    let image = document.getElementById("input-image").files[0];
    
    
    
    if (title === "") {
        return alert("PLEASE ENTERED YOUR TITLE!!")
    } else if (startdate === "") {
        return alert("PLEASE ENTERED THE START DATE!!")
    } else if (enddate === "") {
        return alert("PLEASE ENTERED THE END DATE!!")
    } else if (description === "") {
        return alert("PLEASE ENTERED THE DESCRIPTION!!")
    } else if (!nodeJS && !reactJS && !javaScript && !vueJS) {
        return alert("PLEASE CHOOSE YOUR TECHNOLOGIES!!")
    } else if (image=== "") {
        return alert("PLEASE UPLOAD YOUR IMAGE!!")
    }
    
    
    if (enddate < startdate) {
        return alert("E R R O R !!! PLEASE CHECK AGAIN YOUR START DATE AND END DATE!!!!")
    }

    let imageURL = URL.createObjectURL(image);
    
    

    dataProject.push({
        title: title,
        startdate: startdate,
        enddate: enddate,
        description: description,
        image: imageURL,
        nodeJS: nodeJS,
        reactJS: reactJS,
        javaScript: javaScript,
        vueJS: vueJS,
        duration: new Date()
    })

    console.log(dataProject);

  newData()
}

function newData() {
    document.getElementById("new-card").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]


        document.getElementById("new-card").innerHTML += `
        <div class="card">
        <img alt="photo" src="${project.image}" />
        <div class="overlay">
          <h3>${project.title}</h3>
          <p class="duration">Duration : ${getDistanceTime(project.duration)}</p><br>
          <p>
          ${project.description}
          </p>
          <div class="logo-tech">
            ${project.nodeJS ? '<i class="fa-brands fa-node-js"></i>' : ""}
            ${project.reactJS ? '<i class="fa-brands fa-react"></i>' : ""}
            ${project.javaScript ? '<i class="fa-brands fa-js"></i>' : ""}
            ${project.vueJS ? '<i class="fa-brands fa-vuejs"></i>' : ""}
          </div>
          <a href="./bigproject.html">Read More</a>
          <div class="btn-container" style="display: flex; justify-content: space-between; margin-top: 20px;">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
      
    `
    }

}


setInterval(function () {
    newData();
  }, 1000);