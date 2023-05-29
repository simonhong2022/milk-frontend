import { IMilk, fetchMilks } from "@/apicalls/milk";
import { types } from "@/type/type";
import MilkCard from "./MilkCard"
import { Header, Card, Icon, Popup } from 'semantic-ui-react'
import { useEffect, useState } from "react";

type MilkContentProps = {
    milks: IMilk[],
    filterValue: string
}

export default function MilkContent(props: MilkContentProps) {

    const { milks, filterValue } = props;

    return (
        <div className="milk-card-container">
            {milks./*filter((milk) => milk.type === filterValue).*/map(milk => {
                return (
                    <main>
                        <Card.Group className="milk.card.group" >
                            <MilkCard key={milk.id} milk={milk} />

                        </Card.Group>

                    </main>
                )
            })}

        </div>
    )
}