import { Button } from "@nextui-org/react";


export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await res.json();
  console.log(data)
  return (
   <>
    <h1> Home Page </h1>
    <div>
      {data.map((item: any)=>(
        <h5 key={item?.id}>{item?.title} </h5>
      ))}
    </div>
   </>
  );
}
