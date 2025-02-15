
export interface AmbassadorData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  occupation: string;
  linkedinProfile: string;
  areaOfExpertise: string;
  motivation: string;
}

export const initialFormData: AmbassadorData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  occupation: "",
  linkedinProfile: "",
  areaOfExpertise: "",
  motivation: ""
};
