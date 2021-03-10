import * as t from '../node_modules/my-own-validation'

export abstract class JsonRepository {

    async fetchJSON<T>(url: string, validator: t.Validator<T>): Promise<T> { 
        const response = await fetch(url);
        if (response.status !== 200) {
            throw Error("Error when fetching the data!");
        }
        const json = await response.json();
        return validator(json);
    }
};