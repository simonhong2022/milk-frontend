import { Dispatch, SetStateAction } from "react";
import { IMilk } from "./milk";

export type MilkRequestDto = {
    storage: number
}

const BASE_PATH = process.env.NEXT_PUBLIC_PORT;

export async function fetchMilk(id: string, setMilk: Dispatch<SetStateAction<IMilk>>, setPhotoUrl: Dispatch<SetStateAction<string>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: IMilk = await response.json();
    setMilk(responseData);
}

export async function updateMilk(id: string, event: React.FormEvent<HTMLFormElement>, setMilk: Dispatch<SetStateAction<IMilk>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>, setPhotoUrl: Dispatch<SetStateAction<string>>) {

    const reqBody: MilkRequestDto = {
        storage: event.currentTarget.storage.value
    };

    if (!reqBody.storage || reqBody.storage < 0) {
        setErrMessage('Please order milk');
        return;
    }

    const reqOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };

    const response = await fetch(`${BASE_PATH}/${id}`, reqOptions);
    await fetchMilk(id, setMilk, setPhotoUrl);
    setOpen(false);
    setErrMessage('');
}