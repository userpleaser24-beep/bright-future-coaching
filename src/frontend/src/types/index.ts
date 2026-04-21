export interface NavLink {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  slug: string;
  subjects: string[];
  highlights: string[];
  description: string;
  color: string;
}

export interface Faculty {
  name: string;
  qualification: string;
  subject: string;
  experience: string;
  imageUrl: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  result: string;
  exam: string;
  quote: string;
  year: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}
