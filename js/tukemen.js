


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
    
    const tourStops1 = [
 
  
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  // 100
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  //     [{lat:},"	<div><b> <br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br></div>"],
  
  
  // つけ麺　　中央区
      [{lat:33.587224, lng:130.401199},"	<div><b>麺や兼虎 天神店 <br>住所:<br> 〒810-0004 福岡県福岡市中央区渡辺通4-9-18 福酒ビル1F</br>  <br>営業時間: 11:00〜23:00  </br>  <br>定休日: 月曜</br>  <br>メニュー:</br>  <br>濃厚つけ麺1050円</br><br>味玉濃厚つけ麺1200円</br><br>味玉辛辛つけ麺1300円</br><br>炭焼き肉盛り濃厚つけ麺1400円</br></div>"],
  
      [{lat:33.591273, lng:130.404107},"	<div><b>元祖博多めんたい重 <br>住所:<br> 〒810-0002 福岡県福岡市中央区西中洲6-15</br>  <br>営業時間:  7:00～22:30（L.O.22:00） </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>めんたい煮こみつけ麺1,680円</br></div>"],
  
      [{lat:33.577960, lng:130.405726},"	<div><b>らぁめん蔵持 <br>住所:<br>〒810-0012 福岡県福岡市中央区白金1-10-5 </br>  <br>営業時間: 11:00～21:30（L.O.21:00）  </br>  <br>定休日: 水曜</br>  <br>メニュー:</br>  <br>らぁめん 730円</br><br>チャーシューめん 1280円</br><br>ざるらぁめん 780円</br><br>チャーシューざる 1100円</br><br>納豆らぁめん 850円</br></div>"],
  
      [{lat:33.590874, lng:130.398550},"	<div><b> 麺や兼虎 福岡PARCO店 <br>住所:<br> 〒810-0001 福岡県福岡市中央区天神2-11-1 福岡PARCO 本館B1F</br>  <br>営業時間:  11:00～23:00 </br>  <br>定休日: なし</br>  <br>メニュー:</br> <br>濃厚つけ麺1050円</br><br>味玉濃厚つけ麺1200円</br><br>味玉辛辛つけ麺1300円</br><br>炭焼き肉盛り濃厚つけ麺1400円</br></div>"],
  
      [{lat:33.576236, lng:130.376347},"	<div><b>とら食堂 福岡分店 <br>住所:<br> 〒810-0044 福岡県福岡市中央区六本松4-9-10 六本松コーポ 1F</br>  <br>営業時間:  11:30～21:00 </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>手打ちつけ麺860円</br><br>手打ち塩そば930円</br></div> "],
  
      [{lat:33.584308, lng:130.391483},"	<div><b> 	秀ちゃんラーメン とんぼ店 <br>住所:<br> 〒810-0023 福岡県福岡市中央区警固2-13-11</br>  <br>営業時間: 11:30～14:00／19:00～24:00  </br>  <br>定休日: なし</br>  <br>メニュー:</br>  <br>とんぼラーメン720円</br><br>ラーメン720円</br><br>ネギ盛りラーメン790円</br><br>焼もやしラーメン790円</br></div>"],
  
      [{lat:33.575944, lng:130.402700},"	<div><b> 	つけ麺Tetsuji <br>住所:<br> 〒810-0014 福岡県福岡市中央区平尾1丁目9-8</br>  <br>営業時間: 11:30〜15:00／18:00〜21:00  </br>  <br>定休日: 	不定休</br>  <br>メニュー:</br>  <br>白950円</br><br>赤950円</br><br>紅1000円</br></div>"],
  
      [{lat:33.582917, lng:130.394929},"	<div><b>	大重食堂(BigHeavy Kitchen ) <br>住所:<br>〒810-0023 福岡県福岡市中央区警固1-8-20 </br>  <br>営業時間: 12:00～14:00／18:00～24:00  </br>  <br>定休日: 日曜</br>  <br>メニュー:</br>  <br>純ラーメン七節800円</br></div> "],
 
    ];
    // マーカー間で共有する情報ウィンドウを作成します。
    const infoWindow = new google.maps.InfoWindow();
  
    // マーカーを作成します。
    tourStops1.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
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