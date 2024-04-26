import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Watermark } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateFolderWatermarkRequestBodyWatermarkImprintField = 'default';
export class UpdateFolderWatermarkRequestBodyWatermarkField {
  readonly imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    'default' as UpdateFolderWatermarkRequestBodyWatermarkImprintField;
  constructor(
    fields:
      | Omit<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'>
      | Partial<Pick<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
  readonly imprint?: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFolderWatermarkRequestBody {
  readonly watermark: UpdateFolderWatermarkRequestBodyWatermarkField;
}
export class UpdateFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FolderWatermarksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FolderWatermarksManager,
          | 'networkSession'
          | 'getFolderWatermark'
          | 'updateFolderWatermark'
          | 'deleteFolderWatermark'
        >
      | Partial<Pick<FolderWatermarksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderWatermark(
    folderId: string,
    headersInput: GetFolderWatermarkHeadersInput = new GetFolderWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headers: any = new GetFolderWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
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
    return deserializeWatermark(response.data);
  }
  async updateFolderWatermark(
    folderId: string,
    requestBody: UpdateFolderWatermarkRequestBody,
    headersInput: UpdateFolderWatermarkHeadersInput = new UpdateFolderWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headers: any = new UpdateFolderWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFolderWatermarkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async deleteFolderWatermark(
    folderId: string,
    headersInput: DeleteFolderWatermarkHeadersInput = new DeleteFolderWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteFolderWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
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
}
export interface FolderWatermarksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: any
): UpdateFolderWatermarkRequestBodyWatermarkImprintField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderWatermarkRequestBodyWatermarkImprintField"',
    });
  }
  if (val == 'default') {
    return 'default';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkField(
  val: any
): SerializedData {
  return {
    ['imprint']: serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(
  val: any
): UpdateFolderWatermarkRequestBodyWatermarkField {
  const imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyWatermarkField;
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(
  val: any
): SerializedData {
  return {
    ['imprint']:
      val.imprint == void 0
        ? void 0
        : serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
            val.imprint
          ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(
  val: any
): UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
  const imprint:
    | undefined
    | UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    val.imprint == void 0
      ? void 0
      : deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
          val.imprint
        );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyWatermarkFieldInput;
}
export function serializeUpdateFolderWatermarkRequestBody(
  val: any
): SerializedData {
  return {
    ['watermark']: serializeUpdateFolderWatermarkRequestBodyWatermarkField(
      val.watermark
    ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBody(
  val: any
): UpdateFolderWatermarkRequestBody {
  const watermark: UpdateFolderWatermarkRequestBodyWatermarkField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFolderWatermarkRequestBody;
}
