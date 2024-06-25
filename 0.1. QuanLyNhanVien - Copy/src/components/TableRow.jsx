import React from "react";
import { Icon } from "@iconify/react";

function TableRow({
    employee,
    index,
    handleDeleteEmployee,
    handleSelectEmployee,
}) {
    return (
        <tr className={`${index % 2 === 0 ? "bg-slate-50" : ""}`}>
            <td className="">
                <input type="checkbox" className="w-5 h-5" />
            </td>
            <td className="">{employee.name}</td>
            <td className="">{employee.email}</td>
            <td className="">{employee.address}</td>
            <td className="">{employee.phone}</td>
            <td className="block-box h-[72px]">
                <Icon
                    icon="fa:pencil"
                    className="icon text-amber-500"
                    onClick={() => handleSelectEmployee(employee)}
                />
                <Icon
                    icon="fa:trash"
                    className="icon text-red-500"
                    onClick={() => handleDeleteEmployee(employee.id)}
                />
            </td>
        </tr>
    );
}

export default TableRow;
