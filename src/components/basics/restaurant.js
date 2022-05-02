import React, { useState } from "react";
import "./style.css";
import Menu from "./API.js"
import MenuCard from "./menu";

const Res=()=>{
   const [menuData,setMenuData]=useState(Menu)
   
   const filterItem=(category)=>{;
   const updatedList=Menu.filter((currelem)=>{return currelem.category ===category; }
   );
   setMenuData(updatedList);
   };
   return (
    <>
    <nav className="navbar">
        <div className="btn-group">
            <button 
            className="btn-group_item"
            onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className="btn-group_item"onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className="btn-group_item"onClick={()=>filterItem("evening")}>Evening</button>
            <button className="btn-group_item"onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className="btn-group_item"onClick={()=>setMenuData(Menu)}>All</button>
        </div>
    </nav>
   
    <MenuCard menuData={menuData}/>
    </>
    );
}; 
export default Res; 