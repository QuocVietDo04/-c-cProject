import React, { useState } from "react";

function Navbar({ onSearchName }) {
    const [isSearch, setIsSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="w-full h-[65px] shadow-xl flex justify-between px-6 py-2 mb-10">
            <div className="block-box">
                <h3 className="cursor-pointer">TLU</h3>
                <h6 className="text-gray-500 cursor-pointer">TRANG CHỦ</h6>
                <h6 className="cursor-pointer">QUẢN LÝ NHÂN VIÊN</h6>
            </div>
            <div className="block-box">
                <input
                    type="text"
                    placeholder="Nhập tên nhân viên cần tìm kiếm..."
                    className="w-[350px] pr-12 focus:outline-none"
                    onChange={handleInputChange}
                    value={searchInput}
                    disabled={isSearch}
                />
                <button
                    className={`border-[2px] bg-white border-green-400 text-green-500 mr-0 ${
                        searchInput ? "text-white bg-green-500" : ""
                    } ${
                        isSearch ? "bg-red-500  border-red-400 text-white" : ""
                    }`}
                    disabled={!searchInput}
                    onClick={() => {
                        if (!isSearch) {
                            setIsSearch(true);
                            onSearchName(searchInput);
                        } else {
                            setIsSearch(false);
                            setSearchInput("");
                            onSearchName("");
                        }
                    }}
                >
                    {`${!isSearch ? "Tìm" : "Hủy"}`}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
