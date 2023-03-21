import React from "react";
import "./Sidebar.css";
import { Radio, Space, Checkbox } from "antd";

// const UserContext = createContext();
export function Sidebar({ handleClick, handleChange,handleFilter }) {
  const options = [
    {
      label: "Shirts",
      value: "shirt",
    },
    {
      label: "Sleep Shirts",
      value: "sleepShirt",
    },
    {
      label: "Dog Shirts",
      value: "dogShirt",
    },
  ];
  const brands = [
    {
      label: "ZARA",
      value: "zara",
    },
    {
      label: "ROADSTER",
      value: "roadster",
    },
    {
      label: "PARX",
      value: "parx",
    },
    {
      label: "WROGN",
      value: "wrogn",
    },
    {
      label: "HARVARD",
      value: "harvard",
    },
  ];
  // const [gender, setGender] = useState("");
  return (
    <div className="sidebar">
      <div className="filter-gender">
        {/* <UserContext.Provider value={gender}> */}
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={"man"} onChange={handleClick} defaultChecked>
              MEN
            </Radio>
            <Radio value={"women"} onChange={handleClick}>
              WOMEN
            </Radio>
            <Radio value={"kids"} onChange={handleClick}>
              KIDS
            </Radio>
            <Radio value={"boys"} onChange={handleClick}>
              BOYS
            </Radio>
            <Radio value={"girls"} onChange={handleClick}>
              GIRLS
            </Radio>
          </Space>
        </Radio.Group>
        {/* </UserContext.Provider> */}
      </div>
      <div className="filter-categories">
        <h3>Categories</h3>
        <Checkbox.Group
          options={options}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            alignContent: "center",
          }}
          onChange={handleChange}
        />
      </div>
      <div className="filter-brand">
        <h3>Brands</h3>
        <Checkbox.Group
          options={brands}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            alignContent: "center",
          }}
          onChange={handleFilter}
        />
      </div>
    </div>
  );
}
