export type JOB = {
  title: string;
  company: string;
  location: string;
  summary: string[];
  datePosted: string;
  url: string;
  id: string
  isRemote: boolean,
  applyLink?: string,
  detailsLink: string
};

export type JOBDETAILS = {
  title: string,
  companyName: string,
  companyLink: string,
  location: string,
  salary: string,
  applyLink: string,
  description: string
}