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
        return ` <div class="testi-card">
    <img src="${testimonial.image}" alt="photo" />
    <p class="author">${testimonial.author}</p>
    <p class="comment">
    ${testimonial.comment}
    </p>
    <p class="rating">${testimonial.rating} <i class="fa-solid fa-mug-hot"></i></p>
  </div>`
    })

    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")
}


alltesti();

async function ratingByCup(rating) {
    const Testimoni = JSON.parse(await getTestimoniData("https://api.npoint.io/e03d1bb13cd145a72fc9"));

    const ratingByCup = Testimoni.filter(testimonial => testimonial.rating == rating)
    
    const testimonialHTML = ratingByCup.map((testimonial) => {
        return ` <div class="testi-card">
    <img src="${testimonial.image}" alt="photo" />
    <p class="author">${testimonial.author}</p>
    <p class="comment">
    ${testimonial.comment}
    </p>
    <p class="rating">${testimonial.rating} <i class="fa-solid fa-mug-hot"></i></p>
  </div>`
        
    });
    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")

    if(ratingByCup.length <= 0){
        return document.getElementById("testimonial").innerHTML = "<h2> UPSSS!!! No One Pick This Cup.</h2>"
    }
}

