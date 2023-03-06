
// // Initialize and add the map
// function initMap() {
//     // The location ofshinshin
//     constshinshin = { lat: 33.593712355277695, lng: 130.39345591870264 };
//     // The map, centered atshinshin
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 14,
//       center:shinshin,
//     });
//     // The marker, positioned atshinshin
//     const marker = new google.maps.Marker({
//       position:shinshin,
//       map: map,
//     });
//   }
  


  
//   window.initMap = initMap;
//   //ロゴの表示
//   //logoの表示
//   $(window).on('load',function(){
//     $("#splash").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//     $("#splash_logo").delay(2200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
//   }); 




// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const 博多らーめんShinShin天神本店  = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: 博多らーめんShinShin天神本店 ,
    });
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">博多らーめん ShinShin 天神本店 </h1>' +
      '<div id="bodyContent">' +
      "<p><b>博多らーめん ShinShin 天神本店 </b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and 博多らーめん ShinShin 天神本店  are the two major " +
      "features of the 博多らーめん ShinShin 天神本店  - Kata Tjuta National Park. 博多らーめん ShinShin 天神本店  is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. 博多らーめん ShinShin 天神本店  is listed as a World " +
      "Heritage Site.</p>" +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: 博多らーめんShinShin天神本店 ,
      map,
      title: "博多らーめん ShinShin 天神本店  ",
      
    });
   
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  
  window.initMap = initMap;