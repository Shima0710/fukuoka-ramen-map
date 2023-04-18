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
    
  
    
    const tukemen = [
   
        
        // つけ麺　　中央区
            [{lat:33.587224, lng:130.401199},"	<div>麺や兼虎 天神店 <br>住所:<br> 〒810-0004 福岡県福岡市中央区渡辺通4-9-18 福酒ビル1F</br>  <br>営業時間: 11:00〜23:00  </br>  <br>定休日: 月曜</br>  <br>メニュー:</br>  <br>濃厚つけ麺1050円</br><br>味玉濃厚つけ麺1200円</br><br>味玉辛辛つけ麺1300円</br><br>炭焼き肉盛り濃厚つけ麺1400円</br></div>"],
        
            [{lat:33.591273, lng:130.404107},"	<div>元祖博多めんたい重 <br>住所:<br> 〒810-0002 福岡県福岡市中央区西中洲6-15</br>  <br>営業時間:  7:00～22:30（L.O.22:00） </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>めんたい煮こみつけ麺1,680円</br></div>"],
        
            [{lat:33.577960, lng:130.405726},"	<div>らぁめん蔵持 <br>住所:<br>〒810-0012 福岡県福岡市中央区白金1-10-5 </br>  <br>営業時間: 11:00～21:30（L.O.21:00）  </br>  <br>定休日: 水曜</br>  <br>メニュー:</br>  <br>らぁめん 730円</br><br>チャーシューめん 1280円</br><br>ざるらぁめん 780円</br><br>チャーシューざる 1100円</br><br>納豆らぁめん 850円</br></div>"],
        
            [{lat:33.590874, lng:130.398550},"	<div> 麺や兼虎 福岡PARCO店 <br>住所:<br> 〒810-0001 福岡県福岡市中央区天神2-11-1 福岡PARCO 本館B1F</br>  <br>営業時間:  11:00～23:00 </br>  <br>定休日: なし</br>  <br>メニュー:</br> <br>濃厚つけ麺1050円</br><br>味玉濃厚つけ麺1200円</br><br>味玉辛辛つけ麺1300円</br><br>炭焼き肉盛り濃厚つけ麺1400円</br></div>"],
        
            [{lat:33.576236, lng:130.376347},"	<div>とら食堂 福岡分店 <br>住所:<br> 〒810-0044 福岡県福岡市中央区六本松4-9-10 六本松コーポ 1F</br>  <br>営業時間:  11:30～21:00 </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>手打ちつけ麺860円</br><br>手打ち塩そば930円</br></div> "],
        
            [{lat:33.584308, lng:130.391483},"	<div> 	秀ちゃんラーメン とんぼ店 <br>住所:<br> 〒810-0023 福岡県福岡市中央区警固2-13-11</br>  <br>営業時間: 11:30～14:00／19:00～24:00  </br>  <br>定休日: なし</br>  <br>メニュー:</br>  <br>とんぼラーメン720円</br><br>ラーメン720円</br><br>ネギ盛りラーメン790円</br><br>焼もやしラーメン790円</br></div>"],
        
            [{lat:33.575944, lng:130.402700},"	<div> 	つけ麺Tetsuji <br>住所:<br> 〒810-0014 福岡県福岡市中央区平尾1丁目9-8</br>  <br>営業時間: 11:30〜15:00／18:00〜21:00  </br>  <br>定休日: 	不定休</br>  <br>メニュー:</br>  <br>白950円</br><br>赤950円</br><br>紅1000円</br></div>"],
        
            [{lat:33.582917, lng:130.394929},"	<div>	大重食堂(BigHeavy Kitchen ) <br>住所:<br>〒810-0023 福岡県福岡市中央区警固1-8-20 </br>  <br>営業時間: 12:00～14:00／18:00～24:00  </br>  <br>定休日: 日曜</br>  <br>メニュー:</br>  <br>純ラーメン七節800円</br></div> "],
        
        
        //博多
            [{lat:33.5985498,lng:130.4474628},"	<div>めん徳 二代目 つじ田 福岡空港店<br>住所:<br>〒812-0003 福岡県福岡市博多区下臼井767-1 福岡空港国内線ターミナルビル3階「ラーメン滑走路」内 </br>  <br>営業時間:  	10:00〜21:45（L.O.21:00） </br>  <br>定休日: 不定休</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
            [{lat:33.5907896,lng:130.4216775},"	<div> 	中華そば 月光軒<br>住所:<br>〒812-0012 福岡県福岡市博多区博多駅中央街1-1 JR九州筑紫口ビル 博多デイトスアネックス1F </br>  <br>営業時間:   11:00～23:00（L.O.22:45）</br>  <br>定休日: 博多デイトスアネックスに準ずる</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
           
        
            [{lat:33.5968819,lng:130.4076538},"	<div> とまと家<br>住所:<br> 福岡県福岡市博多区綱場町3-11</br>  <br>営業時間: 11:30～14:00、17:30～23:00  </br>  <br>定休日: 日、祝</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
            [{lat:33.5934068,lng:130.4084648},"	<div> 元祖ラーメン 長浜家<br>住所:<br>〒812-0026 福岡県福岡市博多区上川端町10-242 </br>  <br>営業時間:   9:00〜翌朝5:00</br>  <br>定休日:無休 </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        
            [{lat:33.5648261,lng:130.4400611},"	<div> 中華そば 玉 ららぽーと福岡店<br>住所:<br>〒812-0893 福岡県福岡市博多区那珂6-23-1 ららぽーと福岡 3F </br>  <br>営業時間:   11:00～22:00（L.O.21:30）</br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
            [{lat:33.5907328,lng:130.421271},"	<div> 明鏡志水<br>住所:<br> 〒812-0012 福岡県福岡市博多区博多駅中央街1-1 博多デイトスB1F</br>  <br>営業時間:   10:00～22:00（L.O.21:30）</br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        
            [{lat:33.5892742,lng:130.4111733},"	<div> 二男坊 セカンド 豚骨つけ麺 あんど、<br>住所:<br>〒812-0018 福岡県福岡市博多区住吉1-2 キャナルシティ博多 ラーメンスタジアム </br>  <br>営業時間:   11:00～23:00（L.O.22:30）</br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
            [{lat:33.5936022,lng:130.4086936},"	<div> 	中洲 川端 きりん<br>住所:<br> 〒812-0026 福岡県福岡市博多区上川端町9-151</br>  <br>営業時間:   8:00〜翌7:00</br>  <br>定休日:不定休 </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
            [{lat:33.5936022,lmg:130.4086936},"	<div> ドライブイン一幸舎 空港南店<br>住所:<br> </br>  <br>営業時間:   </br>  <br>定休日: </br>  <br>メニュー:</br>  <br></br><br></br><br></br><br></br><br></br></div>"],
        
        
        
          ];
    
    // マーカー間で共有する情報ウィンドウを作成します。
    const infoWindow = new google.maps.InfoWindow();
  
    // マーカーを作成します。
    tukemen.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        // label: `${i + 1}`,
        
        icon: {
          url: 'images/ramen-red-makaer.png',                      //アイコンのURL
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
  