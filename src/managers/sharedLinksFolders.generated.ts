import { serializeFolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetSharedItemFoldersQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemFoldersHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetFolderGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemFolders" | "getFolderGetSharedLink" | "updateFolderAddSharedLink" | "updateFolderUpdateSharedLink" | "updateFolderRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemFolders(queryParams: undefined | GetSharedItemFoldersQueryParamsArg = {} satisfies GetSharedItemFoldersQueryParamsArg, headers: GetSharedItemFoldersHeadersArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#folders") as string, { method: "GET", params: prepareParams(queryParams), headers: prepareParams(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async getFolderGetSharedLink(folderId: string, queryParams: GetFolderGetSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderAddSharedLink(folderId: string, requestBody: UpdateFolderAddSharedLinkRequestBodyArg, queryParams: UpdateFolderAddSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link") as string, { method: "PUT", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderUpdateSharedLink(folderId: string, requestBody: UpdateFolderUpdateSharedLinkRequestBodyArg, queryParams: UpdateFolderUpdateSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link") as string, { method: "PUT", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderRemoveSharedLink(folderId: string, requestBody: UpdateFolderRemoveSharedLinkRequestBodyArg, queryParams: UpdateFolderRemoveSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link") as string, { method: "PUT", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
}
export function serializeGetSharedItemFoldersQueryParamsArg(val: GetSharedItemFoldersQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetSharedItemFoldersQueryParamsArg(val: any): GetSharedItemFoldersQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemFoldersQueryParamsArg;
}
export function serializeGetSharedItemFoldersHeadersArg(val: GetSharedItemFoldersHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function deserializeGetSharedItemFoldersHeadersArg(val: any): GetSharedItemFoldersHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemFoldersHeadersArg;
}
export function serializeGetFolderGetSharedLinkQueryParamsArg(val: GetFolderGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetFolderGetSharedLinkQueryParamsArg(val: any): GetFolderGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetFolderGetSharedLinkQueryParamsArg;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArg(val: UpdateFolderAddSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArg(val: any): UpdateFolderAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderAddSharedLinkRequestBodyArg;
}
export function serializeUpdateFolderAddSharedLinkQueryParamsArg(val: UpdateFolderAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFolderAddSharedLinkQueryParamsArg(val: any): UpdateFolderAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderAddSharedLinkQueryParamsArg;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: UpdateFolderUpdateSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: any): UpdateFolderUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderUpdateSharedLinkRequestBodyArg;
}
export function serializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: UpdateFolderUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: any): UpdateFolderUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderUpdateSharedLinkQueryParamsArg;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: UpdateFolderRemoveSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: any): UpdateFolderRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderRemoveSharedLinkRequestBodyArg;
}
export function serializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: UpdateFolderRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: any): UpdateFolderRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderRemoveSharedLinkQueryParamsArg;
}
