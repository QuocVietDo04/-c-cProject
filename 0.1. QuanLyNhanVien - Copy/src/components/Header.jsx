import React from "react";
import { Icon } from "@iconify/react";

function Header({ handleOpenForm }) {
    return (
        <div className="block-container">
            <h2 className="text-white font-light">
                Quản lý <b>Nhân viên</b>
            </h2>
            <div className="block-box">
                <button>
                    <Icon icon="fa6-solid:circle-minus" className="icon-btn" />
                    Xóa
                </button>
                <button className="bg-green-600" onClick={handleOpenForm}>
                    <Icon icon="fa6-solid:circle-plus" className="icon-btn" />
                    Thêm nhân viên
                </button>
            </div>
        </div>
    );
}

export default Header;
