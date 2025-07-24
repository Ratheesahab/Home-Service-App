export default interface Business {
    id: string;
    name: string;
    contactPerson: string;
    address: string;
    category: {
      name: string;
    };
    images: {
      url: string;
    }[];
  }