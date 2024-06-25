import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

function Form({
    isFormOpening,
    handleCloseForm,
    handleAddEmployee,
    employeeSelected,
    handleUnSelectEmployee,
    handleEditEmployee,
}) {
    //* Quản lý giá trị nhập vào input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    //* Quản lý lỗi nhập vào input
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorAddress, setErrorAddress] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    useEffect(() => {
        setName(employeeSelected.name || "");
        setEmail(employeeSelected.email || "");
        setAddress(employeeSelected.address || "");
        setPhone(employeeSelected.phone || "");
    }, [employeeSelected]);

    //* Hàm lưu giá trị nhập vào input
    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleAddress = (e) => setAddress(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);

    //* Hàm kiểm tra lỗi nhập vào input
    const handleErrorName = () => {
        // TODO: Kiểm tra chuỗi có rỗng hay không
        if (name.trim() === "") {
            setErrorName("Vui lòng nhập tên của bạn!");
            return false;
        }

        // TODO: Xử lý validate
        const words = name.split(/\s+/);
        const regexWordName = /^[A-Z À-Ỹ][a-z à-ỹ]+$/;
        for (let i = 0; i < words.length; i++) {
            if (!regexWordName.test(words[i])) {
                setErrorName("Vui lòng viết tên đúng định dạng");
                return false;
            }
        }

        // TODO: Thiết lập lại thông báo lỗi nếu mọi thứ bình thường
        setErrorName("");
        return true;
    };

    const handleErrorEmail = () => {
        // TODO: Kiểm tra chuỗi có rỗng hay không
        if (email.trim() === "") {
            setErrorEmail("Vui lòng nhập email của bạn!");
            return false;
        }

        // TODO: Xử lý validate
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(email)) {
            setErrorEmail("Vui lòng viết email đúng định dạng");
            return false;
        }

        // TODO: Thiết lập lại thông báo lỗi nếu mọi thứ bình thường
        setErrorEmail("");
        return true;
    };

    const handleErrorAddress = () => {
        // TODO: Kiểm tra chuỗi có rỗng hay không
        if (address.trim() === "") {
            setErrorAddress("Vui lòng nhập địa chỉ của bạn!");
            return false;
        }

        // TODO: Thiết lập lại thông báo lỗi nếu mọi thứ bình thường
        setErrorAddress("");
        return true;
    };

    const handleErrorPhone = () => {
        // TODO: Kiểm tra chuỗi có rỗng hay không
        if (phone.trim() === "") {
            setErrorPhone("Vui lòng nhập số điện thoại của bạn!");
            return false;
        }

        // TODO: Xử lý validate
        const regexPhone = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
        if (!regexPhone.test(phone)) {
            setErrorPhone("Vui lòng viết số điện thoại đúng định dạng");
            return false;
        }

        // TODO: Thiết lập lại thông báo lỗi nếu mọi thứ bình thường
        setErrorPhone("");
        return true;
    };

    //* Hàm xử lý kết thúc form
    const handleSubmit = () => {
        // Gọi tất cả các hàm kiểm tra lỗi
        const isNameValid = handleErrorName();
        const isEmailValid = handleErrorEmail();
        const isAddressValid = handleErrorAddress();
        const isPhoneValid = handleErrorPhone();

        // Kiểm tra nếu tất cả các giá trị đều là true
        if (isNameValid && isEmailValid && isAddressValid && isPhoneValid) {
            if (employeeSelected.id) {
                const updateEmployee = {
                    id: employeeSelected.id,
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                };
                handleEditEmployee(updateEmployee);
            } else {
                const newEmployee = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                };
                handleAddEmployee(newEmployee);
            }
            handleCloseForm();
            handleUnSelectEmployee();
            resetData();
        }
    };

    const handleClose = () => {
        resetData(); // Reset dữ liệu
        handleCloseForm(); // Đóng form
        handleUnSelectEmployee(); // Gọi hàm hủy chọn nhân viên
    };

    const resetData = () => {
        setErrorName("");
        setErrorEmail("");
        setErrorAddress("");
        setErrorPhone("");
    };

    return (
        <div className={`${isFormOpening ? "block" : "hidden"}`}>
            <div className="bg-blur">
                <div className="form">
                    <div className="form-top">
                        <h2 className="font-medium">{`${
                            employeeSelected.id ? "Edit" : "Add"
                        } Employee`}</h2>
                        <Icon
                            icon="fa:close"
                            className="icon-exit text-black"
                            onClick={handleClose}
                        />
                    </div>
                    <div className="form-main">
                        <label htmlFor="txtName">Name:</label>
                        <input
                            id="txtName"
                            type="text"
                            className={`${
                                errorName ? "border-[2px] border-red-500" : ""
                            }`}
                            onChange={handleName}
                            value={name}
                            onFocus={() => setErrorName("")}
                        />
                        <p className="error">{errorName}</p>

                        <label htmlFor="txtEmail">Email:</label>
                        <input
                            id="txtEmail"
                            type="text"
                            className={`${
                                errorEmail ? "border-[2px] border-red-500" : ""
                            }`}
                            onChange={handleEmail}
                            value={email}
                            onFocus={() => setErrorEmail("")}
                        />
                        <p className="error">{errorEmail}</p>

                        <label htmlFor="txtAddress">Address:</label>
                        <input
                            id="txtAddress"
                            type="text"
                            className={`${
                                errorAddress
                                    ? "border-[2px] border-red-500"
                                    : ""
                            }`}
                            onChange={handleAddress}
                            value={address}
                            onFocus={() => setErrorAddress("")}
                        />
                        <p className="error">{errorAddress}</p>

                        <label htmlFor="txtPhone">Phone:</label>
                        <input
                            id="txtPhone"
                            type="text"
                            className={`${
                                errorPhone ? "border-[2px] border-red-500" : ""
                            }`}
                            onChange={handlePhone}
                            value={phone}
                            onFocus={() => setErrorPhone("")}
                        />
                        <p className="error">{errorPhone}</p>
                    </div>
                    <div className="form-bottom">
                        <button
                            className="bg-gray-200 font-medium text-red-600 hover:text-red-500"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-green-600 px-6"
                            onClick={handleSubmit}
                        >
                            {`${employeeSelected.id ? "Update" : "Add"}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
