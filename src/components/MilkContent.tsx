import { IMilk, fetchMilks } from "@/apicalls/milk";
import { types } from "@/type/type";
import MilkCard from "./MilkCard"
import { Header, Card, Icon, Popup } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import { isEmptyStatement } from "typescript";

type MilkContentProps = {
    milks: IMilk[],
    filterValue: string[],
    searchValue: string
}

export default function MilkContent(props: MilkContentProps) {

    const { milks, filterValue, searchValue } = props;

    return (
        <div className="home-contents-container">
            {types.filter((type) => {
                if (!Array.isArray(filterValue) || filterValue.length == 0) {
                    return true;
                }
                return filterValue.includes(type.text);
            }).map(type => {                             

                return (
                    <>
                        
                        {milks.filter(milk => milk.type === type.text).filter(milk => {
                            
                            if (searchValue === "") {
                                return true;
                            }
                            return milk.name.toLowerCase().includes(searchValue);
                            
                        }).map((milk) => {
                            return (

                                <MilkCard key={milk.id} milk={milk} />

                            )
                        })}
                    </>

                )
            })}

        </div>
    )
}