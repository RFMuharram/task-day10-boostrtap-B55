function getFullTime(tanggal) {
    const monthList = [
      "January",
      "Febuari",
      "Maret",
      "Apr",
      "Meiiii",
      "Juni",
      "Juli",
      "Augustus",
      "Sep",
      "Okt",
      "Nov",
      "Desember",
    ];
  
    const date = tanggal.getDate();
    const month = tanggal.getMonth();
    const year = tanggal.getFullYear();
    let hours = tanggal.getHours();
    let minutes = tanggal.getMinutes();
  
    if (hours <= 9) {
      hours = "0" + hours;
    }
  
    // ketika ditampilkan yang tadinya 8:45, menjadi 08:45
  
    // jam 10:00
    // jam 07:00
    // jam 06:00
  
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    return `${date} ${monthList[month]} ${year} ${hours}:${minutes}`;
  }
  
  function getDistanceTime(time) {
    const timeNow = new Date().getTime(); // Waktu saat ini dalam milidetik
    const timePosted = time; // Waktu posting
  
    const distance = timeNow - timePosted; // Selisih waktu dalam milidetik
  
    // Perhitungan selisih waktu dalam berbagai satuan
    const distanceSeconds = Math.floor(distance / 1000); // Detik
    const distanceMinutes = Math.floor(distance / 1000 / 60); // Menit
    const distanceHours = Math.floor(distance / 1000 / 60 / 60); // Jam
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24); // Hari
    const distanceWeek = Math.floor(distance / 1000 / 60 / 60 / 24 / 7); // Minggu
    const distanceMonth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30.44); // Bulan (asumsi 30.44 hari dalam satu bulan)
    const distanceYear = Math.floor(distance / 1000 / 60 / 60 / 24 / 365); // Tahun
  
    console.log(distanceSeconds);
    console.log(distanceMinutes);
    console.log(distanceHours);
    console.log(distanceDay);
    console.log(distanceWeek);
    console.log(distanceMonth);
    console.log(distanceYear);
  
    // Memilih keterangan waktu yang sesuai berdasarkan selisih waktu
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
function submitBlog(event) {
    // fungsi dari even dan preventDefault adalah menahan agar si browser tidak langsung merefresh ahalam
    // ketika kita input data, agar kita tau datanya sudah masuk atau belum jika via consol
    // dan dapat kita lihat perubahan jika menggunakan inerhtml
  
    event.preventDefault();
  
    let inputTitle = document.getElementById("inputTitle").value;
    let inputContent = document.getElementById("inputContent").value;
    let inputImage = document.getElementById("inputImage").files;
  
    if (inputTitle == "") {
      alert("title harus diisi");
    } else if (inputContent == "") {
      alert("content harus diisi");
    } else if (inputImage == "") {
      alert("file harus diisi");
    }
  
    // mengabil sumber dari file image(jpn/png)
    inputImage = URL.createObjectURL(inputImage[0]);
  
    // data ini akan kita masukkan kedalam sebuah array
    const blog = {
      title: inputTitle,
      content: inputContent,
      image: inputImage,
      // ini si posted add referance dari penulisan inggris
      postAt: new Date(),
      author: "Sultan Teguh",
      nodejs: true,
      react: true,
      next: true,
      java: false,
    };
  
    dataBlog.push(blog);
    console.log("dataArray:", dataBlog);
    renderBlog();
  }
  
  // Jika perkondisian dalam 1 baris yang sama kita bisa menggunakan yang namanya TERNARI (?) ini berdasarkan nilai boolean
  
  function renderBlog() {
    document.getElementById("content").innerHTML = "";
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("content").innerHTML += `
              <div class="blog-list-items">
                  <div class="blog-image">
                      <img src="${dataBlog[index].image}" alt="image upload" />
                  </div>
                  <div class="blog-content">
                      <div class="btn-group">
                          <button class="btn-edit"> Edit Blog </button>
                          <button class="btn-post"> Post Blog </button>
                      </div>
                      <h1>
                          <a href="blog-detail.html" target="_black">${
                            dataBlog[index].title
                          }</a>
                      </h1>
                      <div class="detail-blog">
                          ${getFullTime(dataBlog[index].postAt)} | ${
        dataBlog[index].author
      }
                      </div>
                      ${dataBlog[index].nodejs ? "nodeJs" : ""}
                      ${dataBlog[index].react ? "nodeJs" : ""}
                      ${dataBlog[index].next ? "nodeJs" : ""}
                      ${dataBlog[index].java ? "nodeJs" : ""}
                      <p>
                      ${dataBlog[index].content}
                      </p>
                      <p>
                      ${getDistanceTime(dataBlog[index].postAt)}
                      </p>
                  </div>
              </div>
          `;
    }
  }
  
  setInterval(function () {
    renderBlog();
  }, 1000);
  
  let dataBlog = [];