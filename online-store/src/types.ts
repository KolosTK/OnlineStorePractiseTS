export type BaseProduct = {
    id: number;
    name: string;
    price: number;
    description?: string;
  };
  
  export type Electronics = BaseProduct & {
    category: 'electronics';
    warranty: string;   };
  
  export type Clothing = BaseProduct & {
    category: 'clothing';
    size: string; 
  };
  
  