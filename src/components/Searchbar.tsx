import { IMilk } from '@/apicalls/milk';
import { Search, Grid, Header, Segment, Label, Form } from 'semantic-ui-react'

type searchProps = {
    milks: IMilk[],
    searchChanged: (value: string) => void
}

export default function Searchbar(props: searchProps) {

    const { milks, searchChanged } = props;
    return (
        <Form>
            <Form.Input placeholder="Search Milk Name" icon="search" name="milk" onChange={(e) => {
                e.preventDefault();
                const searchValue = e.currentTarget.value;
                searchChanged(searchValue!);
            }} />


        </Form>


    )
}