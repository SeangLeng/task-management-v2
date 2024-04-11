export const baseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  } else {
    return process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  }
};
