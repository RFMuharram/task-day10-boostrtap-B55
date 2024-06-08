const gallery = [
  {
    image:
      "https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/4977270/pexels-photo-4977270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/5135113/pexels-photo-5135113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/5969852/pexels-photo-5969852.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/60027/eiffel-tower-paris-france-tower-60027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1229102/pexels-photo-1229102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1115204/pexels-photo-1115204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1844521/pexels-photo-1844521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/922353/pexels-photo-922353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  // {
  //   image:
  //     "https://images.pexels.com/photos/3310466/pexels-photo-3310466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
];

function html(item) {
  return `<div class="gallery-item"><img src="${item.image}" alt="testimonial"></div>`;
}
function AllGallery() {
    let galleryHtml = ``;
    gallery.forEach((item) => {
        galleryHtml+= html(item);
    });
  
    document.getElementById("gallery-container").innerHTML = galleryHtml;
  }
  
  AllGallery();


  