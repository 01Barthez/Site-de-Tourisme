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
import ConnexionsMethods from "../../components/custom/ConnexionsMethods"
import { Link } from "react-router-dom"
import { toast } from "../../hooks/use-toast"
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import SeparatorLine from "../../components/custom/SeparatorLine"
import { formSchema } from "../../global/constant/Constant"
import SEO from "../../components/custom/SEO"


const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Souscription Réussite !",
      description: <>
        <p><b>Email</b> : {values.email} </p>
        <p><b>Password</b> : {values.password} </p>
      </>,
      duration: 2500,
      className: 'bg-card/95 shadow shadow-primary'
    })

    navigate("/");
    // console.log(values)
  }

  return (

    <>
      <SEO
        title="Signup | Chisfis Projet"
        description="Access your account to manage bookings and preferences."
      />
      <div
        className="animate-incommingBox text-foreground w-fit mx-auto flex flex-col items-center gap-8 md:gap-16 bg-card shadow rounded-3xl my-8 md:my-16 py-8 md:py-16 px-2 md:px-20"
      >
        {/* Header Section */}
        <div className="flex items-center text-center flex-col gap-5">
          <h1 className="text-4xl md:text-5xl text-center font-semibold ">
            Signup
          </h1>

          <span className="max-w-[60%] md:max-w-full text-center text-sm  text-foreground2">
            Welcome to our blog magazine Community
          </span>
        </div>

        {/* Content section */}
        <div className="space-y-4">
          {/* Add The  Differents connexions methods*/}
          <ConnexionsMethods />

          {/*  Separator Line */}
          <SeparatorLine />

          {/* Formulmire de connecion */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-normal">
                        Email address
                      </FormLabel>

                      <FormControl
                        className={`rounded-2xl border ${isFocused ? 'outline-4 outline-primary/60' : 'outline-none'} shadow-none`}
                      >
                        <Input
                          placeholder="example@example.com"
                          type="email"
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

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem >
                      <FormLabel className="text-base md:text-lg font-normal">
                        Password
                      </FormLabel>

                      <div className="relative">
                        <FormControl
                          className={`rounded-2xl border ${isFocused ? 'outline-4 outline-primary/60' : 'outline-none'} shadow-none`}
                        >
                          <Input
                            placeholder="***********************"
                            type={passwordVisible ? 'text' : 'password'}
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
                        <button
                          type='button'
                          className='absolute w-auto h-auto text-lg hover:bg-foreground/10 duration-300 p-2 rounded-full right-2 top-1/2 -translate-y-1/2'
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {
                            passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye className='text-light/70' />
                          }
                        </button>
                      </div>

                      <FormMessage className="absolute animate-incommingErrorMSG" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-10 rounded-full py-5"
              >
                Continue
              </Button>
            </form>
          </Form>

          {/* Sign In Line */}
          <div className="text-nowrap text-sm md:text-base flex items-center justify-center gap-2">
            <span className="">Already have an account?</span>
            <Link
              to="/login"
              className="text-foreground  hover:text-foreground2 font-semibold underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp