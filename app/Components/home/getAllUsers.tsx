"use server";

import { prisma } from "../../lib/prisma";

export default async function getAllUsers() {
    try {
        const all = await prisma.User.findMany();
    } 
    catch (error: any) {
        
    }
}