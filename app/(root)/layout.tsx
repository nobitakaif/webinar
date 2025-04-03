import { ReactNode } from "react";

export  default function  RootLayout({
    children
    }:{
        children:ReactNode
    }){
    return <div>
        navbar
        {children}
        footer
    </div>
}
