function getTestimoniData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", url, true);
  
      xhr.onload = () => {
        resolve(xhr.response);
      };
  
      xhr.onerror = () => {
        reject("Network Error!");
      };
  
      xhr.send();
    });
  }


async function alltesti (){
    const Testimoni = JSON.parse(await getTestimoniData("https://api.npoint.io/e03d1bb13cd145a72fc9"));

    const testimonialHTML = Testimoni.map((testimonial) => {
        return ` <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 d-flex text-white" style="border: 5px solid #11343a; background-color: transparent;">
          <img src="${testimonial.image}" class="card-img-top"  style="object-fit: cover;" alt="photo" />
          <div class="card-body d-flex flex-column">
            <p class="card-text fw-bold author">${testimonial.author}</p>
            <p class="card-text fw-light comment flex-grow-1">${testimonial.comment}</p>
            <p class="card-text rating text-end">${testimonial.rating} <i class="fa-solid fa-mug-hot"></i></p>
          </div>
        </div>
      </div>
`
    })

    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")
}


alltesti();

async function ratingByCup(rating) {
    const Testimoni = JSON.parse(await getTestimoniData("https://api.npoint.io/e03d1bb13cd145a72fc9"));

    const ratingByCup = Testimoni.filter(testimonial => testimonial.rating == rating)
    
    const testimonialHTML = ratingByCup.map((testimonial) => {
        return ` <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 d-flex text-white" style="border: 5px solid #11343a; background-color: transparent;">
          <img src="${testimonial.image}" class="card-img-top"  style="object-fit: cover;" alt="photo" />
          <div class="card-body d-flex flex-column">
            <p class="card-text fw-bold author">${testimonial.author}</p>
            <p class="card-text fw-light comment flex-grow-1">${testimonial.comment}</p>
            <p class="card-text rating text-end">${testimonial.rating} <i class="fa-solid fa-mug-hot"></i></p>
          </div>
        </div>
      </div>
`
        
    });
    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")

    if(ratingByCup.length <= 0){
        return document.getElementById("testimonial").innerHTML = `<h2 class="text-center text-white fs-1 fw-bold"> UPSSS!!! No One Pick This Cup.</h2>`
    }
}

