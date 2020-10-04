import { Roles } from './roles.enum';

export interface ClientUser {
    readonly _id: string;
    readonly email: string;
    readonly username: string;
    readonly agreedToPolicies: boolean;
    readonly profile: {
        readonly avatar: string;
        readonly themePref: string;
        readonly bio?: string;
        readonly tagline?: string;
    };
    readonly stats: {
        readonly works: number;
        readonly blogs: number;
        readonly watchers: number;
        readonly watching: number;
    };
    readonly roles: Roles[];
    readonly createdAt: Date;
    readonly token?: string;
}