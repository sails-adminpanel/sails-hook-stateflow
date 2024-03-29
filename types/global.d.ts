import sails from "@42pub/typed-sails";
declare type sailsConfig = typeof sails.config;
declare global {
    interface Sails extends sails.Sails {
        stateflow_test: any;
        helpers: any;
        models: any;
        services: any;
        config: _sailsConfig;
        log: any;
    }
    interface _sailsConfig extends sailsConfig {
        [key: string]: any | object;
    }
    const sails: Sails;
    type ReqType = sails.Request;
    type ResType = sails.Response;
    type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
}
export {};
