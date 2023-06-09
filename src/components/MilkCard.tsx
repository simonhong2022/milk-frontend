import { IMilk } from "@/apicalls/milk";
import { fetchMilk } from "@/apicalls/specificmilk";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

type MilkCardProps = {
    milk: IMilk;
    products: number;
    setProducts: Dispatch<SetStateAction<number>>;

}

export default function MilkCard(props: MilkCardProps) {

    let { milk, products, setProducts } = props;
    const [photoUrl, setPhotoUrl] = useState<string>("");
    
    return (

        <main className="milkcard-main">
            <Card color="green" href={"/" + milk.id}>
                <Image src="/milk.png" alt="milk" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{milk.name}</Card.Header>
                    <Card.Meta>Type of Milk: {milk.type}</Card.Meta>
                    <Card.Meta>Storage: {milk.storage}liter</Card.Meta>
                </Card.Content>
            </Card>
        </main>
    )

}