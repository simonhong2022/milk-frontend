import { Dispatch, SetStateAction } from "react";


export interface IMilk {
    id: string,
    name: string,
    type: string,
    storage: number
}

const BASE_PATH = process.env.NEXT_PUBLIC_PORT;

export async function fetchMilks(setMilks: Dispatch<SetStateAction<IMilk[]>>) {

    const response = await fetch(BASE_PATH!);
    const responseData: IMilk[] = await response.json();
    setMilks(responseData);

}

