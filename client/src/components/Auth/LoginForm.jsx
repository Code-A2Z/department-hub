import React, {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Eye, EyeOff, ArrowLeft} from "lucide-react";

import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Checkbox} from "../ui/checkbox";
import{
    Form,
    FormControl,
    FormField,
    FormMessage,
    FormItem,
} from "../ui/form";
import {Card, CardContent,CardHeader, CardTitle, CardDescription} from "../ui/card";
import {useToast} from "../../hooks/use-toast";
import {studentLoginSchema, adminLoginSchema} from "../../lib/schemas";
//import {Link} from "../ui/label";
import {Label} from "../ui/label";

const loginSchemas={
    student: studentLoginSchema,
    admin: adminLoginSchema,
}
export function LoginForm({role}){
    const navigate= useNavigate();
    const {toast}= useToast();
    const [showPassword, setShowPassword]= useState(false);

    const formSchema=loginSchemas[role];
    const form=useForm({
        resolver: zodResolver(formSchema),
        defaultValues:
        role=="student"
        ?{roll:"", name: "", password: "", remember: false}
        :{email:"", password:"", remember: false},
    });
    const onSubmit=(data)=>{
        let isAuthenticated=false;
        if(role=="student"){
            const {roll,name,password}=data;
            if(roll=="12345" && name.toLowerCase() ==="test student" && password ===
        "password123"){
            isAuthenticated=true;
        }
        } else{
            const {email,password}=data;
            if((role=='admin' && email.toLowerCase()=="admin@example.com" && password ==="password123") || (role==='professor' && email.toLowerCase() === "professor@example.com" && password==="password123")){
                isAuthenticated=true;
            }
        }
        if(isAuthenticated){
            toast({
                title: "Login Successful",
                description: `Welcome back, ${role=== 'student' ? data.name :
                    role.charAt(0).toUpperCase()+role.slice(1)
                }!`,
            });
           navigate("/dashboard");
        }else{
            toast({
                    variant:"destructive",
                    title:"Login Failed",
                    description: 'Invalid credentials. Please try again.',
                });
            
        }
    };
    return(
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
           <Card className=" rounded-xl shadow-lg  w-full max-w-md">
            <CardHeader className="text-center p-12">
                <Button variant="ghost" size="icon" className="absolute left-4 top-4 text-muted-foreground" asChild>
                    <Link to="/">
                    <ArrowLeft className="h4 w-4"/>
                    </Link>
                </Button>
                <CardTitle className="text-3xl font-bold mb-2">
                    {role.charAt(0).toUpperCase()+role.slice(1)} Login
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                    Welcome back! Please enter your details
                </CardDescription>
            </CardHeader>
           <CardContent className="px-12 pb-12">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {role==="student" &&(
                        <>
                        <FormField
                            control={form.control}
                            name="roll"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter your Roll Number *" {...field}
                                        className="h-14 text-lg "/>
                                        </FormControl>
                                        <FormMessage/>
                                        </FormItem>
                                        )}
                                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter your Name *" {...field}
                                        className="h-14 text-lg"/>
                                        </FormControl>
                                        <FormMessage/>
                                        </FormItem>
                                        )}
                                />       
                        </>
                    )}
                    {(role==="admin" ||role==="professor")&&(
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email *"
                                        {...field} className="h-14 text-lg "/>
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                    )}
                    <FormField
                            control={form.control}
                            name="password"
                            render={({field})=>(
                                <FormItem>
                                    <div className="relative">
                                    <FormControl>
                                        <Input 
                                        type={showPassword?"text":"password"} 
                                        placeholder="Password *"
                                        {...field} 
                                        className="h-14 text-lg pr-12"/>
                                    </FormControl>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:bg-transparent"
                                        onClick={()=> setShowPassword((prev)=>! prev)}
                                            aria-label="Toggle password visibility"
                                        >
                                        {showPassword?(
                                            <EyeOff className="h-6 w-6"/>
                                        ): (
                                            <Eye className="h-6 w-6"/>
                    
                                        )}

                                    </Button>
                                
                                 </div>
                                 <FormMessage/>
                                 </FormItem>
                            )}
                            />
                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="remember"
                                render={({field})=>(
                                    <FormItem className="flex flex-row item-center space-x-2 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                            id="remember"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label htmlFor="remember" className="text-lg text-muted-foreground font-normal cursor-pointer">
                                            Remember me
                                        </Label>
                                    </FormItem>
                                )}
                                />
                                <Link to="#" className="text-sm font-medium text-primary hover:underline">
                                    Forgot password?
                                </Link>
                        </div>
                        <Button type="submit" className="w-full text-lg font-semibold h-14" size="lg" variant="default">
                            LOGIN
                        </Button>
                </form>
            </Form>
           </CardContent>
            </Card>
             </div>
    );
};
export default LoginForm;