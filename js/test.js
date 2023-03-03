 
 function initMap() {
  
   // Geolocation APIに対応している
   if (navigator.geolocation) {
     // 現在地を取得
     navigator.geolocation.getCurrentPosition(
       // 取得成功した場合
       function(position) {
         // 緯度・経度を変数に格納
         var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         // マップオプションを変数に格納
         var mapOptions = {
           zoom : 15,          // 拡大倍率
           center : mapLatLng  // 緯度・経度
         };
         // マップオブジェクト作成
         const map = new google.maps.Map(
           document.getElementById("map"), // マップを表示する要素
           mapOptions         // マップオプション
         );
         //　マップにマーカーを表示する
         const infoWindow = new google.maps.InfoWindow();

         // マーカーを作成します。
         ramen.forEach(([position, title], i) => {
           const marker = new google.maps.Marker({
             position,
             map,
             title: `${i + 1}. ${title}`,
             // label: `${i + 1}`,
             
             icon: {
               url: 'images/ramen-black-makaer.png',                      //アイコンのURL
               scaledSize: new google.maps.Size(40, 40) //サイズ
             }
           });
       
           // 各マーカーにクリック リスナーを追加し、情報ウィンドウを設定します。
           marker.addListener("click", () => {
             infoWindow.close();
             infoWindow.setContent(marker.getTitle());
             infoWindow.open(marker.getMap(), marker);
           });
         });
       },
       // 取得失敗した場合
       function(error) {
          // エラーメッセージを表示
          switch(error.code) {
            case 1: // PERMISSION_DENIED
              alert("位置情報を福岡市中央区に指定することができます。");
              const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 33.589205529007195,lng: 130.39978664038068},
                zoom: 15,
                heading: 320,
                tilt: 47.5,
                mapId: "90f87356969d889c",
              
              });
              break;
                
            // case 2: // POSITION_UNAVAILABLE
            //   alert("");
             
             
              break;
            case 3: // TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:"+error.code+")");
              break;
          }
        }
      );
    // Geolocation APIに対応していない
    } else {
      alert("この端末では位置情報が取得できません");
    }
  

     
  const mazesoba = [
 

    //  混ぜそば 　中央区
        [{lat:33.588401, lng:130.395220}," <div>元祖台湾まぜそば はなび 天神大名店<br>住所:<br>元祖台湾まぜそば はなび 天神大名店 </br>  <br>営業時間: 11:00〜14:00／17:00〜  </br>  <br>定休日: 不定休</br>  <br>メニュー:</br>  <br>DX台湾まぜそば 1170円</br><br>ねぎ盛り台湾まぜそば 960円</br><br>カレー台湾まぜそば 880円</br><br>元祖台湾まぜそば 850円</br></div>"],
    
        [{lat:33.593781, lng:130.397466},"<div> 汁なし担担麺専門 キング軒 福岡天神店<br>住所:<br> 〒810-0001 福岡県福岡市中央区天神3-16-17</br>  <br>営業時間:   月～金 11:00～21:00　土・日・祝 11:00～15:00</br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>広島式汁なし担担麺630円</br></div>"],
    
        [{lat: 33.577709, lng:130.379323},"	<div>豆皿中華Q  <br>住所:<br>〒810-0031 福岡県福岡市中央区谷1-13-20 </br>  <br>営業時間: 11:30〜14:30（L.O.14:00）／18:00～22:00（L.O.21:00）[土] 12:00〜22:00（L.O.21:00） [日・祝] 12:00〜21:00（L.O.20:30） </br>  <br>定休日: 月曜</br>  <br>メニュー:</br>  </div>"],
      ];
      // マーカー間で共有する情報ウィンドウを作成します。
     
    
      // マーカーを作成します。
      mazesoba.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title: `${i + 1}. ${title}`,
          // label: `${i + 1}`,ラベルの番号
          optimized: false,
          icon: {
            url: 'images/ramen-orange-makaer.png',                      //アイコンのURL
            scaledSize: new google.maps.Size(40, 40) //サイズ
          }
        });
    
        // 各マーカーにクリック リスナーを追加し、情報ウィンドウを設定します。
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });





 

      
}





window.initMap = initMap;






// 営業しているお店を表示
//ジャンルごとの色分け
//いったお店のチェック機能
//口コミ機能
// データ入力の自動化









// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;