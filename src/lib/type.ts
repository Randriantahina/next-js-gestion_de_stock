export interface StockFormData {
  name: string;
  price: number;
  status: number;
}

export interface Stock extends StockFormData {
  id: number;
}

export interface StockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: StockFormData) => void;
  stockToEdit?: Stock;
}
