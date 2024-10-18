import React, { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Link } from "react-router-dom"
import { toast } from "../../hooks/use-toast"
import { useNavigate } from "react-router-dom";
import { formSchemaEmail } from "../../global/constant/Constant"
import SEO from "../../components/custom/SEO"

const ForgotPwd: React.FC = () => {
  const navigate = useNavigate();

  const [isFocused, setIsFocused] = useState(false);

  const form = useForm<z.infer<typeof formSchemaEmail>>({
    resolver: zodResolver(formSchemaEmail),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaEmail>) {
    toast({
      title: "Souscription Réussite !",
      description: <>
        <p><b>Email</b> : {values.email} </p>
      </>,
      duration: 2500,
      className: 'bg-card/80 shadow shadow-primary'
    })

    navigate("/login");
    // console.log(values)
  }

  return (
    <>
      <SEO
        title="Forgot-Password | Chisfis Projet"
        description="Access your account to manage bookings and preferences."
      />
      
      <div
        className="animate-incommingBox text-foreground w-fit mx-auto flex flex-col items-center gap-6 md:gap-8 bg-card shadow rounded-3xl my-8 md:my-16 py-8 md:py-16 px-2 md:px-20"
      >
        {/* Header Section */}
        <div className="flex items-center text-center flex-col gap-5">
          <h1 className="text-4xl md:text-5xl text-center font-semibold ">
            Forgot Password
          </h1>

          <span className="max-w-[60%] md:max-w-full text-center text-sm  text-foreground2">
            We will sent password intruction to your email
          </span>
        </div>

        {/* Content section */}
        <div className="space-y-2 w-full">
          {/* Formulmire de connecion */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base md:text-lg font-normal">
                      Email address
                    </FormLabel>

                    <FormControl
                      className={`rounded-2xl border ${isFocused ? 'outline-4 outline-primary/60' : 'outline-none'} shadow-none`}
                    >
                      <Input
                        placeholder="you@example.com"
                        type="text"
                        required
                        minLength={2}
                        maxLength={75}
                        autoComplete="off"
                        className="py-5"
                        {...field}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                          field.onBlur();
                          setIsFocused(false);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="absolute animate-incommingErrorMSG" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full mt-6 rounded-full py-5"
              >
                Continue
              </Button>
            </form>
          </Form>

          {/* Sign In Line */}
          <div className="text-nowrap text-sm md:text-base flex items-center justify-center gap-2">
            <span className="">Go back for </span>
            <Link
              to="/signup"
              className="text-foreground  hover:text-foreground2 font-medium underline"
            >
              Sign in
            </Link>
            /
            <Link
              to="/signup"
              className="text-foreground  hover:text-foreground2 font-medium underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPwd
