"use client";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

export default function SearchForm() {
  const form = useForm();

  return (
    <div className="grid w-full items-end gap-4 rounded-lg bg-black sm:grid-cols-2 lg:grid-cols-4 p-6">
      <Form {...form}>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Property</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Address</FormLabel>
                <FormControl>
                  <Input placeholder="Search By Address" />
                </FormControl>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="bsd"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Buy/Sell Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-800 text-white">
          Search
        </Button>
      </Form>
    </div>
  );
}
