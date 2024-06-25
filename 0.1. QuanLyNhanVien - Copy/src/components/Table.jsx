import React from "react";
import TableRow from "./TableRow";

function Table({ dataEmployees, handleDeleteEmployee, handleSelectEmployee }) {
    return (
        <div className="block-table">
            <table>
                <thead>
                    <tr>
                        <th className="w-[5%]">
                            <input type="checkbox" className="w-5 h-5" />
                        </th>
                        <th className="w-[15%]">Họ và tên</th>
                        <th className="w-[19%]">Thư điện tử</th>
                        <th className="w-[36%]">Địa chỉ thường trú</th>
                        <th className="w-[15%]">Số điện thoại</th>
                        <th className="w-[10%] text-center indent-0">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataEmployees.map((employee, index) => (
                        <TableRow
                            key={employee.id}
                            index={index}
                            employee={employee}
                            handleDeleteEmployee={handleDeleteEmployee}
                            handleSelectEmployee={handleSelectEmployee}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
