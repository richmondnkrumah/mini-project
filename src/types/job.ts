export interface JOB {
  id: string;
  role: string;
  company_name: string;
  company_num_employees: number | string | null;
  employment_type: string;
  location: null | string;
  remote: boolean;
  logo: string;
  url: string;
  text: string;
  date_posted: string;
  keywords: string[];
  source: string;
}