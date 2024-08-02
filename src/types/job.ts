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