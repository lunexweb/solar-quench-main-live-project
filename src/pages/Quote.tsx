import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  propertyType: z.string().min(1, "Please select a property type"),
  systemSize: z.string().min(1, "Please select a system size"),
  address: z.string().trim().min(5, "Address must be at least 5 characters").max(200),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      systemSize: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Quote request submitted:", data);
    
    setIsSubmitted(true);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with your personalized quote.",
    });
    
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Fixed Background with Text */}
        <div className="fixed inset-0 -z-10 flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961795/WhatsApp_Image_2025-10-19_at_19.55.52_wluvdj.jpg')"
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Thank You!
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Your quote request has been received. Our solar experts will review your 
                information and contact you within 24 hours with a personalized quote.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Section Spacer */}
        <div className="min-h-screen"></div>

        {/* Success Message */}
        <section className="py-20 bg-background relative z-10" data-scroll-section>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Quote Request Submitted!</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Our solar experts will review your information and contact you within 24 hours with a personalized quote.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Get Free Solar Quote - SOLARQUENCH | Professional Solar Installation"
        description="Get your free solar quote from SOLARQUENCH. Professional consultation, custom solar solutions, and expert installation. Start saving on energy bills today."
        keywords="solar quote, free solar consultation, solar installation quote, solar energy assessment, solar savings calculator"
        url="https://solarquench.com/quote"
      />
      <Navbar />
      
      {/* Fixed Background with Text */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/doqsolr8d/image/upload/v1760692915/pexels-pnw-prod-8276364_nk8nzo.jpg')"
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solar Quote
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Fill out the form below and receive a personalized solar quote within 24 hours. 
              No obligation, completely free.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section Spacer */}
      <div className="min-h-screen"></div>

      {/* Form Section */}
      <section className="py-20 bg-background relative z-10" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>
                    Provide your details and we'll create a custom solar solution for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+27 71 234 5678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="17 Olea Road, Midrand" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select property type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="residential">Residential</SelectItem>
                                  <SelectItem value="commercial">Commercial</SelectItem>
                                  <SelectItem value="industrial">Industrial</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="systemSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Desired System Size *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select system size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small (3-4kW)</SelectItem>
                                  <SelectItem value="medium">Medium (5-7kW)</SelectItem>
                                  <SelectItem value="large">Large (8-10kW)</SelectItem>
                                  <SelectItem value="custom">Custom</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your energy needs, budget, or any specific requirements..."
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg py-6"
                      >
                        Submit Quote Request
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Prefer to speak with us directly?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone & WhatsApp</p>
                      <a 
                        href="tel:+27712345678"
                        className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                      >
                        +27 71 234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:info@solarquench.co.za"
                        className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                      >
                        info@solarquench.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">17 Olea Road<br />Midrand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 7AM-5PM<br />
                        Sat: 8AM-1PM<br />
                        Sun & Public Holidays: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What Happens Next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>We review your information within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Our experts prepare a customized quote</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Schedule a free consultation if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Begin your journey to clean energy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
