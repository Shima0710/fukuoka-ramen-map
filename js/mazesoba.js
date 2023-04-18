function initMap() {
  
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.589205529007195,lng: 130.39978664038068},
      zoom: 17,
      heading: 320,
      tilt: 47.5,
      mapId: "90f87356969d889c",
      controlSize: 30
      
    });
//   時間
    // document.write(new Date().toLocaleString());
    
  
    const locationButton = document.createElement("button");
  
    locationButton.textContent = "現在地を表示";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
    locationButton.addEventListener("click", () => {
      //現在地を取得して地図の中心に表示する
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
  
            infoWindow.setPosition(pos);
            infoWindow.setContent("現在地");
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
  
  
    // マーカーの LatLng とタイトル テキストを設定します。最初のマーカー (ボイントン パス)
    // タブが押されたときに最初のフォーカスを受け取ります。矢印キーを使用して
    // マーカー間を移動します。もう一度タブを押して、マップ コントロールを切り替えます。
  
  

  
    //ラーメン　中央区 
    
  
    
    
    const mazesoba = [
   
  
        //  混ぜそば 　中央区
            [{lat:33.588401, lng:130.395220}," <div>元祖台湾まぜそば はなび 天神大名店<br>住所:<br>元祖台湾まぜそば はなび 天神大名店 </br>  <br>営業時間: 11:00〜14:00／17:00〜  </br>  <br>定休日: 不定休</br>  <br>メニュー:</br>  <br>DX台湾まぜそば 1170円</br><br>ねぎ盛り台湾まぜそば 960円</br><br>カレー台湾まぜそば 880円</br><br>元祖台湾まぜそば 850円</br></div>"],
        
            [{lat:33.593781, lng:130.397466},"<div> 汁なし担担麺専門 キング軒 福岡天神店<br>住所:<br> 〒810-0001 福岡県福岡市中央区天神3-16-17</br>  <br>営業時間:   月～金 11:00～21:00　土・日・祝 11:00～15:00</br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>広島式汁なし担担麺630円</br></div>"],
        
            [{lat: 33.577709, lng:130.379323},"	<div>豆皿中華Q  <br>住所:<br>〒810-0031 福岡県福岡市中央区谷1-13-20 </br>  <br>営業時間: 11:30〜14:30（L.O.14:00）／18:00～22:00（L.O.21:00）[土] 12:00〜22:00（L.O.21:00） [日・祝] 12:00〜21:00（L.O.20:30） </br>  <br>定休日: 月曜</br>  <br>メニュー:</br>  </div>"],
                // 汁なし
      //  博多
        [{lat:33.5889052,lng:130.4192073},"	<div>	博多担々麺 とり田 KITTE博多店 <br>住所:<br> 〒812-0012 福岡県福岡市博多区博多駅中央街9-1</br>  <br>営業時間: 11:00～24:00  </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
    
        [{lat:33.5743324,lng:130.4519015},"	<div> 博多ラーメン専門店 幸ちゃんラーメン 西月隈店<br>住所:<br>〒812-0857 福岡県福岡市博多区西月隈1-16-15 </br>  <br>営業時間:  8:00～20:00 </br>  <br>定休日:不定休 </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        [{lat:33.6056375,lng:130.416017},"	<div> マシマシラーメン 物語はここから始まるのだ<br>住所:<br> </br>  <br>営業時間:	11:00〜 20:00  </br>  <br>定休日: 月曜、日曜</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],//jiro
    
        [{lat:33.5911369,lng:130.4086662},"	<div>	幸ちゃんラーメン 中洲店<br>住所:<br> 〒810-0801 福岡県福岡市博多区中洲1丁目4-17</br>  <br>営業時間:  18:00～翌3:00 </br>  <br>定休日: 日曜</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
      
        [{lat:33.590235,lng:130.4085508},"	<div> ひでちゃんラーメン<br>住所:<br> 福岡県福岡市博多区中洲1-7</br>  <br>営業時間:   18:00頃～翌3:00頃</br>  <br>定休日:火曜日 </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        [{lat:33.5766575,lng:130.4196418},"	<div> 	中華料理 紅蓉軒<br>住所:<br>〒812-0017 福岡県福岡市博多区美野島3-12-14 </br>  <br>営業時間:  	11:00〜15:00／17:00〜20:30 </br>  <br>定休日: 日曜、祝日</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        [{lat:33.5917169,lng:130.4094077},"	<div> 博多にらそば 熊楠家 中洲本店<br>住所:<br> 〒810-0801 福岡県福岡市博多区中洲2-1-10 プレイスポットしんばし</br>  <br>営業時間:  	19:00〜翌3:00（L.O.翌2:00） </br>  <br>定休日: 日曜</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
          ];
          // マーカー間で共有する情報ウィンドウを作成します。
        const infoWindow = new google.maps.InfoWindow();
        
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
  
    const buttons = [
      ["←", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
      ["→", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
      ["↓", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
      ["↑", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
    ];
  
    buttons.forEach(([text, mode, amount, position]) => {
      const controlDiv = document.createElement("div");
      const controlUI = document.createElement("button");
  
      controlUI.classList.add("ui-button");
      controlUI.innerText = `${text}`;
      controlUI.addEventListener("click", () => {
        adjustMap(mode, amount);
      });
      controlDiv.appendChild(controlUI);
      map.controls[position].push(controlDiv);
    });
  
    const adjustMap = function (mode, amount) {
      switch (mode) {
        case "tilt":
          map.setTilt(map.getTilt() + amount);
          break;
        case "rotate":
          map.setHeading(map.getHeading() + amount);
          break;
        default:
          break;
      }
    };
    

  
  
  }
  
  
  
  document.body.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, {passive: false});
  
  

  window.initMap = initMap;
  
  
  
  
  // 営業しているお店を表示
  // 細かいジャンルの色分け
  //いったお店のチェック機能
  //口コミ機能
  
  // 現在地ピンの不具合
  // 博多区の営業時間メニュー定休日のデータ入力
  
  // 因数の引き渡しと色訳の作成、現在地のピンデザイン
  // ラーメンマーカーの作成３D化
  // データが重い＝画面に表示されている（一定部分）だけを表示して読み込みを軽くする
  // 中央区と博多区以外のデータも作成
  // ログイン画面の作成デザインphp　sql　の作成
  // AWSサーバーを構築
  