export type UserAddress = {
    street: string;
    city: string;
    state: string;
}

export type User = {
    _id: number;
    index: number;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: UserAddress;
    registered: string;
    tags: string[];

}
