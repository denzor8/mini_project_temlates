import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const elem = data.map(item => {
        return (
            <EmployeesListItem {...item} />
        )
    })

    return (
        <ul className="app-list list-group">
            { elem}
        </ul>
    )
}

export default EmployeesList;