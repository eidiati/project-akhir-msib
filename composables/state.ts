export const useParticipant = () =>
  useState<object>("participant", () => ({
    fullname: "",
    phone: "",
  }));

export const useIsParticipant = () =>
  useState<boolean>("isParticipant", () => false);

export const useTotalPostSearch = () =>
  useState<number>("totalPostSearch", () => 0);
