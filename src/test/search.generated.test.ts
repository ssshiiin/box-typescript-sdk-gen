import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeMetadataQueryResults } from '../schemas.generated.js';
import { deserializeMetadataQueryResults } from '../schemas.generated.js';
import { serializeMetadataQuery } from '../schemas.generated.js';
import { deserializeMetadataQuery } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { serializeSearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { deserializeSearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { MetadataQueryResults } from '../schemas.generated.js';
import { MetadataQuery } from '../schemas.generated.js';
import { DeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { SearchForContentQueryParams } from '../managers/search.generated.js';
import { SearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const client: any = getDefaultClient();
test('testCreateMetaDataQueryExecuteRead', async function testCreateMetaDataQueryExecuteRead(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBody);
  if (!(template.templateKey == templateKey)) {
    throw new Error('Assertion failed');
  }
  const files: any = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: any = files.entries![0];
  const metadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'enterprise' as CreateFileMetadataByIdScope,
    templateKey,
    { ['testName']: 1 }
  );
  if (!(metadata.template == templateKey)) {
    throw new Error('Assertion failed');
  }
  if (!(metadata.scope == template.scope)) {
    throw new Error('Assertion failed');
  }
  const searchFrom: any = ''.concat(
    template.scope!,
    '.',
    template.templateKey
  ) as string;
  const query: any = await client.search.searchByMetadataQuery({
    ancestorFolderId: '0',
    from: searchFrom,
    query: 'testName >= :value',
    queryParams: { ['value']: '0.0' },
  } satisfies MetadataQuery);
  if (!(query.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey
  );
  await client.files.deleteFileById(file.id);
});
test('testGetSearch', async function testGetSearch(): Promise<any> {
  const keyword: any = 'test';
  const search: any = await client.search.searchForContent({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent:
      'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
  } satisfies SearchForContentQueryParams);
  if (!(search.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(search.type) as string) == 'search_results_items')) {
    throw new Error('Assertion failed');
  }
  const searchWithSharedLink: any = await client.search.searchForContent({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent:
      'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
    includeRecentSharedLinks: true,
  } satisfies SearchForContentQueryParams);
  if (!(searchWithSharedLink.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(searchWithSharedLink.type) as string) ==
      'search_results_with_shared_links'
    )
  ) {
    throw new Error('Assertion failed');
  }
});
export {};