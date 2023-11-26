export const useParticipant = () =>
  useState<object>("participant", () => ({
    fullname: "",
    phone: "",
  }));
