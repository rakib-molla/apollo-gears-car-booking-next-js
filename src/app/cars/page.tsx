
import ViewDetails from "@/components/ViewDetails";
import {Card, CardHeader, CardBody, CardFooter,  Button} from "@nextui-org/react";
import Image from "next/image";

async function CarPages() {
const res = await fetch('https://e95fcc65-b33f-4e0a-9ba0-dddbc0e461bd.mock.pstmn.io/cars')
  const {data} = await res.json();
  console.log(data)
    return (
    
     <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      
    
    {data?.map((item: any, index)=>(
       <Card key={index} isFooterBlurred className="w-full col-span-12      sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny  uppercase font-bold">{item.name}</p>
            <h4 className=" font-medium text-xl">{item.model}</h4>
          </CardHeader>
          <Image
            width={500}
            height={500}
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={item.image}
          />
         <ViewDetails carId={item.id}/>
        </Card>
     ))}
  </div>
  )
}

export default CarPages;