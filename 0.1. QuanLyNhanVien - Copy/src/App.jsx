import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
    const [isFormOpening, setIsFormOpening] = useState(false);
    const [dataEmployees, setDataEmployees] = useState([]);
    const [employeeSelected, setEmployeeSelected] = useState({});

    useEffect(() => {
        const data = localStorage.getItem("data");
        if (data) {
            setDataEmployees(JSON.parse(data));
        }
    }, []);

    const handleOpenForm = () => {
        setIsFormOpening(true);
    };

    const handleCloseForm = () => {
        setIsFormOpening(false);
    };

    const handleAddEmployee = (newEmployee) => {
        const updatedData = [...dataEmployees, newEmployee];
        setDataEmployees(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };

    const handleDeleteEmployee = (id) => {
        const updatedData = dataEmployees.filter(
            (employee) => employee.id !== id
        );
        setDataEmployees(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };

    const handleSelectEmployee = (currentEmployee) => {
        setEmployeeSelected(currentEmployee);
        setIsFormOpening(true);
    };

    const handleUnSelectEmployee = () => {
        setEmployeeSelected({});
        setIsFormOpening(false);
    };

    const handleEditEmployee = (updatedEmployee) => {
        const updatedData = dataEmployees.map((employee) =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee
        );
        setDataEmployees(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };

    return (
        <>
            <Form
                isFormOpening={isFormOpening}
                handleCloseForm={handleCloseForm}
                handleAddEmployee={handleAddEmployee}
                employeeSelected={employeeSelected}
                handleUnSelectEmployee={handleUnSelectEmployee}
                handleEditEmployee={handleEditEmployee}
            />
            <Navbar></Navbar>
            <Header handleOpenForm={handleOpenForm} />
            <Table
                dataEmployees={dataEmployees}
                handleDeleteEmployee={handleDeleteEmployee}
                handleSelectEmployee={handleSelectEmployee}
            />
        </>
    );
}

export default App;
