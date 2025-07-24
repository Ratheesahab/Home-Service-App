export default interface Category {
  id: string;
  name: string;
  bgcolor: {
    hex: string;
  };
  icon?: {
    url: string;
  } | null;
}

  