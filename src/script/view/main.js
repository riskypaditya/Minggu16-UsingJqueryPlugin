let getData = (path) => {
  let provinsi_url = "https://api-pesantren-indonesia.vercel.app";
  let _path = path;
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(`${provinsi_url}${path}.json`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};
const main = () => {
  const sortItem = document.querySelector("option-sort");
  const tablePesantren = document.querySelector("table-pesantren");
  const setDataProvinsi = async () => {
    try {
      sortItem.DataProvinsi = await getData("/provinsi");
    } catch (message) {
      console.log(message);
    }
  };
  const setDataKabupaten = async (id) => {
    try {
      sortItem.DataKabupaten = await getData(`/kabupaten/${id}`);
    } catch (message) {
      console.log(message);
    }
  };
  const findDataPesantren = async () => {
    try {
      let id = sortItem.IdKabupaten;
      console.log(id);
      if (id == "Kabupaten") {
        tablePesantren.erorGetData("Pilih Provinsi Terlebih Dahulu");
      } else {
        tablePesantren.DataPesantren = await getData(`/pesantren/${id}`);
      }
    } catch (message) {
      console.log(message);
    }
  };
  $(document).ready(function () {
    $("#SelectProvinsi").select2({
      placeholder: "Masukan nama provinsi",
    });

    $("#SelectKabupaten").select2({
      placeholder: "Masukan nama kabupaten",
    });
    $("#SelectProvinsi").on("select2:select", function (e) {
      var data = e.params.data;
      setDataKabupaten(data.id);
    });
    $("#nanogallery2").nanogallery2({
      thumbnailHeight: 210,
      thumbnailWidth: 210,
      thumbnailL1GutterWidth: 40,
      thumbnailL1GutterHeight: 40,
      itemsBaseURL: "http://nanogallery2.nanostudio.org/samples/",
      thumbnailStacks: 4,
      thumbnailStacksTranslateY: 0.3,
      thumbnailStacksRotateX: 0.9,
      galleryBuildInit2: "perspective_900px|perspective-origin_50% 150%",
      thumbnailHoverEffect2: "thumbnail_translateZ_0px_50px_easeOutQuad_400 | thumbnail_rotateX_0deg_0deg_easeOutBack_200",
      thumbnailDisplayTransition: "slideUp2",
      thumbnailDisplayTransitionDuration: 500,
      thumbnailDisplayInterval: 30,
      galleryDisplayTransition: "rotateX",
      galleryDisplayTransitionDuration: 500,
    });
    $(".gallery").flipping_gallery({
      direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
      selector: "> a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
      spacing: 15, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
      showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
      enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
      flipDirection: "bottom", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
      autoplay: false // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.
    });
  });
  sortItem.eventFindButton = findDataPesantren;
  sortItem.eventChangeProvinsi = setDataKabupaten;
  setDataProvinsi();
};
export default main;
