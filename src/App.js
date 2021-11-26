import logo from "./logo.svg";
import { GLobalStyle } from "./GlobalStyle";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import queryString from "query-string";
import "antd/dist/antd.css";
import "./index.css";
import { Pagination } from "antd";
function App() {
    const initialState = [
        {
            id: 1,
            name: "Chocopie",
            description: "Bánh chocopie",
            price: 20000,
            brand: "orion",
            amount: 10,
            imgUrl: "https://cdn.tgdd.vn/Products/Images/7622/76993/bhx/banh-choco-pie-396g-12-cai-201903151505091563.jpg",
        },
    ];
    const [currentItem, setCurrentItem] = useState({});
    const [items, setItems] = useState(initialState);
    const [filters, setFilters] = useState({
        currentPage: 1,
    });
    const [pagination, setPagination] = useState({
        total: null,
        pageSize: 1,
    });
    const handleAddItem = (newItem) => {
        newItem.id = items.length + 1;
        setItems([...items, newItem]);
    };
    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    const editRow = (item) => {
        setCurrentItem(item);
    };
    const updateItem = (id, updatedItem) => {
        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    };
    const pageOnChange = (page) => {
        setFilters({ ...filters, currentPage: page });
    };
    useEffect(() => {
        const paramString = queryString.stringify(filters);
        console.log(paramString);
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                setItems(res.data);
                setPagination({
                    ...pagination,
                    total: res.data.length,
                });
            })
            .catch((error) => console.log(error));
    }, [filters]);
    return (
        <div className="App">
            <Header handleAddItem={handleAddItem} />
            <Content
                items={items}
                deleteItem={deleteItem}
                editRow={editRow}
                currentItem={currentItem}
                updateItem={updateItem}
                currentPage={filters.currentPage}
                pageSize={pagination.pageSize}
            />
            <Pagination
                current={filters.currentPage}
                total={pagination.total}
                pageSize={pagination.pageSize}
                onChange={pageOnChange}
            />
            <GLobalStyle />
        </div>
    );
}

export default App;
