import {useState} from 'react';



const PageContent = ({ url }) => {
    const [data, setData] = useState(null);
  
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);
  
    return (<h2>{data ? data.message : "Loading..."}</h2>);
  };