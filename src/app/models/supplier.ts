export class User {
  fullName?: string;
  emailAddress?: string;
  phoneNo?: string;
  password?: string;
  confirmpassword?: string;
}

export class CompanyDetails{
farmName?: string;
streetAddress?: string;
city?: string;
province?: string;
zipCode?: string;
status?: string;
farmCertificate?: string;
farmCIPCertificate?:string;
}
export class paymentDetails{
  accountHolderName?: string;
  accountNo?: string;
  accountType?: string;
  bankName?: string;
  bankCode?: string;
}
export interface Supplier extends User, CompanyDetails, paymentDetails{
  supplierID: string;
  supplierStatus: string ;
}
export interface Province {
  id: string;
  provinceName: string;
}
export interface Product {
  payload: any;
  id: string;
  productName: string;
  productDescription: string;
  productQty: string;
  productPrice: string;
  productCategory: string;
  promoStatus: string;
  productSupplier: any;
  productImage?: string;
}
