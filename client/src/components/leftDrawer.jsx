import { Drawer, Box, Typography, IconButton, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

import {ChevronFirst} from 'lucide-react'
// export const SideDrawer = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false)

//     return (
//         <>
//             <IconButton size="large" edge='start' color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
//                 <MenuIcon />
//             </IconButton>
//             <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
//                 <Box p={2} width='250px' textAlign='center' role='presentation'>
//                     <Typography variant="h6" component='div'>
//                         Mutual Musicos Rosario
//                     </Typography>
//                     <Divider />
                    
//                 </Box>
//             </Drawer>
//         </>

//     )
// }

export default function SideBar({children}){
    return(
        <aside className="h-screen flex">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" className="w-32" alt=""/>
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst />
                    </button>
                </div>
                <ul className="flex-1 px-3">{children}</ul>

                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    
                    />

                </div>
            </nav>
        </aside>
    )
}