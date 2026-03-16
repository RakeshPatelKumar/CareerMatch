import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function saveResume(content) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    try {
        const resuume = await db.resume.upsert({
            where: {
                userId: user.id,
            },
            update: {
                content,
            },
            create: {
                userId: user.id,
                content,
            }
        });

        revalidatePath("/resume");
        return resuume;

    }
    catch (error) {
        console.error("Error saving resume:", error.messages);
        throw new Error("Failed to save resume");
    }

}