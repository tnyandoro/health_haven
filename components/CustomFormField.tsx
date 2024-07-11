'use client'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"
import { Label } from "@radix-ui/react-label"
import { ReactNode } from "react"

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    placeHolder?: string,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSelecton?: (field: any) => React.ReactNode,




}

const CustomFormField = ({ control, fieldType, name, label }: CustomProps) => {
return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldType.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}
            </FormItem>
    )}
        />
    )
}

export default CustomFormField