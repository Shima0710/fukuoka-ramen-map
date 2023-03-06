


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.589205529007195,lng: 130.39978664038068},
      zoom: 15,
      heading: 320,
      tilt: 47.5,
      mapId: "90f87356969d889c",
    });
  
    // マーカーの LatLng とタイトル テキストを設定します。最初のマーカー (ボイントン パス)
    // タブが押されたときに最初のフォーカスを受け取ります。矢印キーを使用して
    // マーカー間を移動します。もう一度タブを押して、マップ コントロールを切り替えます。
  
  
  
    //ラーメン　中央区 
    
    const tourStops = [
  //  汁なし 　中央区
      [{lat:33.588401, lng:130.395220}," <div><b>元祖台湾まぜそば はなび 天神大名店<br>住所:<br>元祖台湾まぜそば はなび 天神大名店 </br>  <br>営業時間: 11:00〜14:00／17:00〜  </br>  <br>定休日: 不定休</br>  <br>メニュー:</br>  <br>DX台湾まぜそば 1170円</br><br>ねぎ盛り台湾まぜそば 960円</br><br>カレー台湾まぜそば 880円</br><br>元祖台湾まぜそば 850円</br></div>"],
  
      [{lat:33.593781, lng:130.397466},"<div><b> 汁なし担担麺専門 キング軒 福岡天神店<br>住所:<br> 〒810-0001 福岡県福岡市中央区天神3-16-17</br>  <br>営業時間:   月～金 11:00～21:00　土・日・祝 11:00～15:00</br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>広島式汁なし担担麺630円</br></div>"],
  
      [{lat: 33.577709, lng:130.379323},"	<div><b>豆皿中華Q  <br>住所:<br>〒810-0031 福岡県福岡市中央区谷1-13-20 </br>  <br>営業時間: 11:30〜14:30（L.O.14:00）／18:00～22:00（L.O.21:00）[土] 12:00〜22:00（L.O.21:00） [日・祝] 12:00〜21:00（L.O.20:30） </br>  <br>定休日: 月曜</br>  <br>メニュー:</br>  </div>"],
    ];
    // マーカー間で共有する情報ウィンドウを作成します。
    const infoWindow = new google.maps.InfoWindow();
  
    // マーカーを作成します。
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
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
      ["左に傾く", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
      ["右に傾く", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
      ["下に傾く", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
      ["上に傾く", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
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
  
  
  
  
  
  window.initMap = initMap;
  
  
  
  
  
  
  // 営業しているお店を表示
  //ジャンルごとの色分け
  //いったお店のチェック機能
  //口コミ機能
  // データ入力の自動化