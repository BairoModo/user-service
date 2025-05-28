export class User {
    id: number;    
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: Date;
    identityNumber?: string;
    identityType?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    bannedAt?: Date;

    constructor(
        id: number,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        dateOfBirth: Date,
        identityNumber?: string,
        identityType?: string,
        createdAt: Date = new Date(),
        updatedAt: Date = new Date(),        
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.identityNumber = identityNumber;
        this.identityType = identityType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
