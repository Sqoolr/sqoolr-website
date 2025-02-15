
export type SchoolType = 'kindergarten' | 'primary' | 'juniorSecondary' | 'seniorSecondary';

export interface SchoolFormData {
  firstName: string;
  lastName: string;
  schoolName: string;
  email: string;
  phone: string;
  schoolTypes: Record<SchoolType, boolean>;
  reasonsForApplying: string;
}

export const initialFormData: SchoolFormData = {
  firstName: "",
  lastName: "",
  schoolName: "",
  email: "",
  phone: "",
  schoolTypes: {
    kindergarten: false,
    primary: false,
    juniorSecondary: false,
    seniorSecondary: false,
  },
  reasonsForApplying: ""
};
