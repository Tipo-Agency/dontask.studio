
export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface Case {
  id: string;
  title: string;
  url: string;
  category: string;
  image: string;
}
