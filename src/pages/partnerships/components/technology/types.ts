
export interface TechnologyPartnerData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  role: string;
  technologyType: string;
  website: string;
  integrationDescription: string;
}

export const initialFormData: TechnologyPartnerData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  role: "",
  technologyType: "",
  website: "",
  integrationDescription: ""
};
