// get request
// async awaits
//map through data in the return to display all images + text
import React, { useEffect, useState } from 'react';
import { getAllPhotos } from '../src/lib/api';
import axios from 'axios';

function Main() {
  const [data, setData] = useState([]);


  





  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        // `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=88cfbd95cac0c74571109ef1655012f5&text=rabbit&per_page=24&page=1&format=json&nojsoncallback=true`
        'https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value&api_key=cfa0a716709cc25b3de1747cdbc12469'
      );
      console.log('zap', res.data)
    };

    // fetch('https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value&oauth_consumer_key=cfa0a716709cc25b3de1747cdbc12469', { method: 'GET'})
    //   .then(res => console.log('res', res))

    // .then(data => console.log('data', data))
    // const res = await getAllPhotos()
    // console.log(res)
    // if (res.status !== 200) {
    //   console.log('not working')
    // }
    // setData(res.data)
    // };
    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>Flickr Photo Stream</h1>
    </div>
  );
}

export default Main;
