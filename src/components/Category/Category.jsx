"use client"
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = ({hello}) => {
    const [data, setData] = useState('')
    const hellodata = () => {
       const datar = 'hello im fine'
        setData(datar)
    }
  return (
    <div>
        <Link href='/about'>hello</Link>
        <button onClick={hellodata}>category</button>
        <p>{data}</p>
    </div>
  );
};
export default Category;
