import React from "react";
import {User, GraduationCap, Users} from "lucide-react";

const roles=[
{
    key: "admin",
    icon:<User size={40}/>,
    label: "Admin",
    description: "Login as an administrator to access the dashboard to manage app data. ",
},
{
    key:"student",
    icon:<GraduationCap size={40}/>,
    label:"Student",
    description: "Login as as student to explore course materials and assignments",
},
{
    key:"professor",
    icon:<User size={40} />,
    label:"Professor",
    description:"Login as a Professor to create courses, assignments, and track student progress.",
},
];
export default function RoleSelection({onSelect}){
    return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="bg-gray-700 rounded-xl p-10 flex gap-8">
            {roles.map((role)=>(
                <button
                key={role.key}
                onClick={()=>onSelect(role.key)}
                className="bg-white rounded-xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-1"
                >
                <div className="mb-4 text-gray-800 flex-justify-center">{role.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{role.label}</h2>
                <p className="text-gray-600 text-sm">{role.description}</p>
                </button>
            ))}
        </div>
    </div>
    );
};