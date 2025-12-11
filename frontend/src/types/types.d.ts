declare interface IExperience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string[];
}

declare interface IProject {
  name: string;
  description: string;
  image: string;
  link: string;
}

declare interface ITechStack {
  name: string;
  image: string;
}

declare interface ISkill {
  name: string;
  image: string;
}

declare interface IEducation {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

declare type RequestStatus = "idle" | "loading" | "success" | "error";
declare interface IFormData {
  from_name: string;
  from_email: string;
  message: string;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
