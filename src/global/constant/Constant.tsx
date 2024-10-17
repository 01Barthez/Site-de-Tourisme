import { z } from "zod"

export const REGEX_Password: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

export const formSchema = z.object({
    email: z.string().email({
        message: "Should be a correct email !"
    }),
    password: z.string().regex(REGEX_Password, {
        message: "Should be a correct password !"
    })
})

export const formSchemaEmail = z.object({
    email: z.string().email({
        message: "Should be a correct email !"
    }),
})
