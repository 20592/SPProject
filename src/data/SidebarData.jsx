import React from 'react'
import  { FaCalendarAlt} from "react-icons/fa"
import {RxDashboard} from "react-icons/rx"
import {BiSolidMessageDetail} from "react-icons/bi"
import {GiSettingsKnobs} from "react-icons/gi"

export const  SidebarData=[
    {
        title:"Dashboard",
        path:"/",
        icon:<RxDashboard />
    },
   
    {
        title:"Request",
        path:"/request",
        icon:<BiSolidMessageDetail />
    },
    {
        title:"Budgets",
        path:"/budgets",
        icon:<FaCalendarAlt />
    },
    {
        title:"Message",
        path:"/message",
        icon:<FaCalendarAlt />
    },
    {
        title:"Kanban",
        path:"/kanban",
        icon:<FaCalendarAlt />
    },
    {
        title:"Calender",
        path:"/calender",
        icon:<FaCalendarAlt />
    },
] 
 export const SidebarDataApproval=[
    
    {
        title:"Purchase requisitions",
        path:"/purchaserequisitions",
        icon:<FaCalendarAlt />
    },
   
    {
        title:"Request for Qoutation",
        path:"/requestquotation",
        icon:< FaCalendarAlt/>
    },
    {
        title:"Purchase Order",
        path:"/purchaseorder",
        icon:<FaCalendarAlt />
    },
    {
        title:"Invoice",
        path:"/invoice",
        icon:< FaCalendarAlt/>
    },
    {
        title:"Payment",
        path:"/payment",
        icon:< FaCalendarAlt/>
    },
 ]
 export const SidebarDataSupplier=[
    
    {
        title:"Suppliers",
        path:"/suppliers",
        
        icon:<FaCalendarAlt />
    },
   
    {
        title:"Products",
        path:"/products",
        icon:< FaCalendarAlt/>
    },
    {
        title:"Deliveries",
        path:"/deliveries",
        icon:<FaCalendarAlt />
    },
]
export const SidebarDataSetting=[
    
    {
        title:"Settings",
        path:"/settings",
        icon:<GiSettingsKnobs />
    },
   
    {
        title:"Help",
        path:"/help",
        icon:< GiSettingsKnobs/>
    },
]



