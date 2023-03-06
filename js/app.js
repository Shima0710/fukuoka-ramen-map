import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
  apiKey: "AIzaSyCeeWzB7f_vBEhR8dQMATdBwCxWJQoKvB4"
}

const loader = new Loader(apiOptions);

loader.then(() => {
  console.log('Maps JS API Loaded');
});

