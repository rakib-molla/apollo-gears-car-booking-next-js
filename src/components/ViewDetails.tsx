'use client'
import {Button} from "@nextui-org/react";
import Link from 'next/link';

 function ViewDetails({carId}:{carId: string}) {

    return (
    <Button
    href={`/cars/${carId}`}
    as={Link}
    fullwidth
    variant="faded"
    >
    View Detail 
    </Button>
  )
}

export default ViewDetails;