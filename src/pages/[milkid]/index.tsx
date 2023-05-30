import Link from "next/link";
import { IMilk } from "@/apicalls/milk";
import { fetchMilk, updateMilk } from "@/apicalls/specificmilk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Form, Label, Card, Message, Image, Confirm } from 'semantic-ui-react'

export default function Specificmilk() {

    const router = useRouter();
    const { milkid } = router.query;
    const [milk, setMilk] = useState<IMilk>({} as IMilk);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (milkid) {
            fetchMilk(milkid, setMilk);
        }
    })

    const [open, setOpen] = useState(false);
    const [orderopen, setOrderopen] = useState(false);

    const [errMessage, setErrMessage] = useState<string>("");

    return (
        <main className="specificmilk-main">
            <nav className="specificmilk-navbar">
                <Link className="specificmilk-navlink" href="/">Back</Link>
            </nav>
            <div className="specificmilk-body-container">
                <div className="specificmilk-content-wrap">
                    <div className="specificmilk-card-container">

                        <Card fluid centered>
                            <Card.Content className="specificmilk-card-container-content">
                                <Image className="specificmilk-card-container-content-img"
                                    src="/milk.png" alt="milk" wrapped ui={false}
                                />
                                <Card.Header className="specificmilk-card-container-header" as="h1">{milk.name}</Card.Header>
                                <Card.Meta>Milk Type: {milk.type}</Card.Meta>
                                <Card.Meta>Storage: {milk.storage} liter</Card.Meta>
                                <Card.Content>
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        updateMilk(milk.id, e, setMilk, setOpen, setErrMessage);
                                    }}>

                                        <Form.Input
                                            min={0}
                                            max={milk.storage}
                                            name='order'
                                            step={1}
                                            type='range'
                                            label={`Amount of Milk to order: ${amount} liter`}
                                            onChange={(e) => {
                                                setAmount(e.target.valueAsNumber);
                                            }}
                                            value={amount}
                                        />
                                        <Button className="specificmilk-modal-btn" inverted color="blue" onClick={() => setOrderopen(true)}>Order Milk</Button>
                                        <Confirm open={orderopen}
                                            onCancel={() => setOrderopen(false)}
                                            onConfirm={(e) => {
                                             //   updateMilk(milk.id, e, setMilk, setOpen, setErrMessage);
                                                setOrderopen(false);
                                            }} />
                                    </Form>
                                </Card.Content>
                            </Card.Content>
                        </Card>

                    </div>
                </div>

            </div>
        </main>
    )


}