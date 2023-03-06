import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
  apiKey: "AIzaSyCeeWzB7f_vBEhR8dQMATdBwCxWJQoKvB4"
}

const loader = new Loader(apiOptions);

loader.then(() => {
  console.log('Maps JS API Loaded');
});


/**
* 拡大縮小禁止
*/
function mobile_no_scroll(event) {
  // ２本指での操作の場合
  if (event.touches.length >= 2) {
      // デフォルトの動作をさせない
      event.preventDefault();
  }
}