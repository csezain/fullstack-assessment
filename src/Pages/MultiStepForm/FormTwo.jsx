import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMultiStepFormContext } from "./useMultiStepFormContext";

const schema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.string().min(1, { message: "Number is required." }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
});

function FormTwo() {
  const { formData, setFormData, step, nextStep, prevStep } =
    useMultiStepFormContext();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: formData.username || "",
      number: formData.number || "",
      company: formData.company || "",
    },
  });
  form.watch();

  const onSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    const data = form.getValues();
    setFormData({ ...formData, ...data });
  }, [Object.values(form.getValues()).join("")]);

  return (
    <div className=" mx-auto text-left border-2 p-10 rounded-lg mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input placeholder="Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FormTwo;
