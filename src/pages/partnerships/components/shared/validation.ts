
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequiredFields = (fields: Record<string, string>, requiredFields: string[]): string[] => {
  return requiredFields.filter(field => !fields[field]);
};
