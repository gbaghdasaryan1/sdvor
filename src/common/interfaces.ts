export interface IProduct {
  productId: number;
  categoryId: number;
  isHit: boolean;
  isSpecial: boolean;
  productName: string;
  productBrand: string;
  productRate: number;
  productPrice: number;
  productCode: string;
  productShortDescription: string;
  productDescription: string;
  productPictureLink: string;
  createdAt?: Date;
  updatedAt?: any;
  deletedAt?: any;
}
