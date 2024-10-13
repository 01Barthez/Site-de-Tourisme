import { BsArrowRight } from "react-icons/bs";
import React, { useState } from 'react'
import CardAdvantages from '../cards/CardAdvantages'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchemaEmail } from '../../../global/constant/Constant'
import { z } from 'zod'
import { toast } from '../../../hooks/use-toast'
import { Button } from '../../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../ui/form'

const JoinNewsLetter: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  // Define the form
  const form = useForm<z.infer<typeof formSchemaEmail>>({
    resolver: zodResolver(formSchemaEmail),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaEmail>) {
    toast({
      title: "Abonnement Réussite !",
      description: <>
        <p>Thank's <b>{values.email}</b>:  to subscribe to our plateform 🎉</p>
      </>,
      duration: 2500,
      className: 'bg-card/95 shadow shadow-primary'
    })

    console.log(values)
  }

  return (
    <section className='container py-16 '>
      <div className="flex items-center gap-10 flex-col lg:flex-row">
        {/* Detail content part */}
        <div data-aos="fade-right" className="max-w-full lg:max-w-[35%]  w-full space-y-10 md:space-y-14">
          {/* Header part */}
          <div className="flex flex-col gap-2 md:gap-5">
            <h2 className="title">
              Join our newsletter 🎉
            </h2>

            <p className="para">
              Read and share new perspectives on just about any topic. Everyone's welcome.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-2 md:gap-3">
            <CardAdvantages
              badge={{
                content: '01',
                variant: 'blue'
              }}
              content='Get more discount'
            />

            <CardAdvantages
              badge={{
                content: '02',
                variant: 'red'
              }}
              content='Get premium magazines'
            />
          </div>

          {/* Formulmire d'abonnement */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-fit border p-1 rounded-full flex items-center gap-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl
                        className={`rounded-2xl border ${isFocused ? 'outline-4 outline-primary/60' : 'outline-none'} shadow-none`}
                      >
                        <input
                          placeholder="Enter your email"
                          type="email"
                          required
                          minLength={5}
                          maxLength={75}
                          autoComplete="off"
                          className="px-4 py-2 border-none focus:border-none focus:outline-none focus-visible:outline-none focus-visible:border-none"
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
                  className="w-auto h-auto rounded-full p-2.5"
                >
                  <BsArrowRight className="text-background text-lg " />
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Image Part */}
        <div data-aos="fade-left" className="w-full h-full overflow-hidden">
          <img
            src="/newsletter.svg"
            alt="benefits Happening cities"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default JoinNewsLetter