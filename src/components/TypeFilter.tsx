import { Checkbox, Dropdown } from "semantic-ui-react";
import { types } from "@/type/type";

type TypeFilterProps = {
    filterChanged: (value: string[]) => void
}

export default function TypeFilter(props: TypeFilterProps) {
    const { filterChanged } = props;

    return (
        <Dropdown
            text='Filter'
            multiple
            options={types}
            onChange={(e, data) => {
                const filterValue = data.value as string[];
                filterChanged(filterValue);
            }}

        />
    )
}