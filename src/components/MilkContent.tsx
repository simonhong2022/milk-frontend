import { IMilk, fetchMilks } from "@/apicalls/milk";
import { types } from "@/type/type";
import MilkCard from "./MilkCard"
import { Header, Card, Icon, Popup } from 'semantic-ui-react'
import { Dispatch, SetStateAction, useEffect, useState } from "react";


type MilkContentProps = {
    milks: IMilk[],
    products: number,
    setProducts: Dispatch<SetStateAction<number>>
    filterValue: string[],
    searchValue: string
}

export default function MilkContent(props: MilkContentProps) {

    let { milks, filterValue, searchValue, products, setProducts } = props;
    
    return (
        <div className="home-contents-container">
            {types.filter((type) => {
                
                if (!Array.isArray(filterValue) || filterValue.length === 0) {
                    return true;
                }
                return filterValue.includes(type.text);
            }).map(type => {   

                setProducts(milks.filter(milk => {
                            
                    if (searchValue === "") {
                        return true;
                    }
                    return milk.name.toLowerCase().includes(searchValue);
                    
                }).filter(milk => filterValue.includes(milk.type) || filterValue.length === 0).length);


                return (
                    
                    <>
                        
                        {milks.filter(milk => milk.type === type.text).filter(milk => {
                            
                            if (searchValue === "") {
                                return true;
                            }
                            return milk.name.toLowerCase().includes(searchValue);
                            
                        }).map((milk) => {
                            
                            return (
                                
                                <MilkCard key={milk.id} milk={milk} products={products} setProducts={setProducts} />

                            )
                            
                        })}
                    </>

                )
            })}

        </div>
    )
}