import { serializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierSegments } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierSegmentByIdOptionals {
  readonly headers: GetShieldInformationBarrierSegmentByIdHeaders =
    new GetShieldInformationBarrierSegmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetShieldInformationBarrierSegmentByIdOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateShieldInformationBarrierSegmentByIdOptionals {
  readonly requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBody =
    {} satisfies UpdateShieldInformationBarrierSegmentByIdRequestBody;
  readonly headers: UpdateShieldInformationBarrierSegmentByIdHeaders =
    new UpdateShieldInformationBarrierSegmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateShieldInformationBarrierSegmentByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateShieldInformationBarrierSegmentByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateShieldInformationBarrierSegmentByIdOptionalsInput {
  readonly requestBody?: UpdateShieldInformationBarrierSegmentByIdRequestBody;
  readonly headers?: UpdateShieldInformationBarrierSegmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteShieldInformationBarrierSegmentByIdOptionals {
  readonly headers: DeleteShieldInformationBarrierSegmentByIdHeaders =
    new DeleteShieldInformationBarrierSegmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteShieldInformationBarrierSegmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteShieldInformationBarrierSegmentByIdOptionalsInput {
  readonly headers?: DeleteShieldInformationBarrierSegmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentsOptionals {
  readonly headers: GetShieldInformationBarrierSegmentsHeaders =
    new GetShieldInformationBarrierSegmentsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentsOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetShieldInformationBarrierSegmentsOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateShieldInformationBarrierSegmentOptionals {
  readonly headers: CreateShieldInformationBarrierSegmentHeaders =
    new CreateShieldInformationBarrierSegmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierSegmentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierSegmentOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateShieldInformationBarrierSegmentOptionalsInput {
  readonly headers?: CreateShieldInformationBarrierSegmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBody {
  readonly name?: string;
  readonly description?: string;
}
export class UpdateShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      UpdateShieldInformationBarrierSegmentByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetShieldInformationBarrierSegmentsQueryParams {
  readonly shieldInformationBarrierId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateShieldInformationBarrierSegmentRequestBody {
  readonly shieldInformationBarrier: ShieldInformationBarrierBase;
  readonly name: string;
  readonly description?: string;
}
export class CreateShieldInformationBarrierSegmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'> &
      Partial<
        Pick<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateShieldInformationBarrierSegmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ShieldInformationBarrierSegmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ShieldInformationBarrierSegmentsManager,
      | 'networkSession'
      | 'getShieldInformationBarrierSegmentById'
      | 'updateShieldInformationBarrierSegmentById'
      | 'deleteShieldInformationBarrierSegmentById'
      | 'getShieldInformationBarrierSegments'
      | 'createShieldInformationBarrierSegment'
    > &
      Partial<Pick<ShieldInformationBarrierSegmentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    optionalsInput: GetShieldInformationBarrierSegmentByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegment> {
    const optionals: GetShieldInformationBarrierSegmentByIdOptionals =
      new GetShieldInformationBarrierSegmentByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(response.data);
  }
  async updateShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    optionalsInput: UpdateShieldInformationBarrierSegmentByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegment> {
    const optionals: UpdateShieldInformationBarrierSegmentByIdOptionals =
      new UpdateShieldInformationBarrierSegmentByIdOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(response.data);
  }
  async deleteShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    optionalsInput: DeleteShieldInformationBarrierSegmentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteShieldInformationBarrierSegmentByIdOptionals =
      new DeleteShieldInformationBarrierSegmentByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getShieldInformationBarrierSegments(
    queryParams: GetShieldInformationBarrierSegmentsQueryParams,
    optionalsInput: GetShieldInformationBarrierSegmentsOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegments> {
    const optionals: GetShieldInformationBarrierSegmentsOptionals =
      new GetShieldInformationBarrierSegmentsOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['shield_information_barrier_id']: toString(
        queryParams.shieldInformationBarrierId
      ) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegments(response.data);
  }
  async createShieldInformationBarrierSegment(
    requestBody: CreateShieldInformationBarrierSegmentRequestBody,
    optionalsInput: CreateShieldInformationBarrierSegmentOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegment> {
    const optionals: CreateShieldInformationBarrierSegmentOptionals =
      new CreateShieldInformationBarrierSegmentOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateShieldInformationBarrierSegmentRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(response.data);
  }
}
export interface ShieldInformationBarrierSegmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
  val: UpdateShieldInformationBarrierSegmentByIdRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
  val: any
): UpdateShieldInformationBarrierSegmentByIdRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    name: name,
    description: description,
  } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBody;
}
export function serializeCreateShieldInformationBarrierSegmentRequestBody(
  val: CreateShieldInformationBarrierSegmentRequestBody
): SerializedData {
  return {
    ['shield_information_barrier']: serializeShieldInformationBarrierBase(
      val.shieldInformationBarrier
    ),
    ['name']: val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRequestBody(
  val: any
): CreateShieldInformationBarrierSegmentRequestBody {
  const shieldInformationBarrier: ShieldInformationBarrierBase =
    deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const name: string = val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    name: name,
    description: description,
  } satisfies CreateShieldInformationBarrierSegmentRequestBody;
}
