import * as React from 'react';
import './style.css';

export default function App() {
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function dataFetch() {
      const res = await fetch('randomuser.me/api').then((res) => res.json());
      console.log(res);
      setData(res);
    }
    dataFetch();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}
