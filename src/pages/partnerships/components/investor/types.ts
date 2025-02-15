
export interface InvestorData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  role: string;
  investmentRange: string;
  investmentFocus: string;
  portfolio: string;
  timeline: string;
}

export const initialFormData: InvestorData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  role: "",
  investmentRange: "",
  investmentFocus: "",
  portfolio: "",
  timeline: ""
};
