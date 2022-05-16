export declare function padLeft(padding: number | string, input: string): string;
export declare function getUsersOnlineMessage1(numUsersOnline?: number): string | 0;
export declare function getUsersOnlineMessage2(numUsersOnline?: number): string | 0;
export declare function example(x: string | number, y: string | boolean): void;
export declare function log(value: Date | string): void;
export interface Fish {
    swim: () => void;
}
export interface Bird {
    fly: () => void;
}
export declare function isFish(pet: Fish | Bird): pet is Fish;
