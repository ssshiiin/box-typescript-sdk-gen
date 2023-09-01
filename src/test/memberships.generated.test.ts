import { serializeUser } from "../schemas.generated.js";
import { deserializeUser } from "../schemas.generated.js";
import { serializeCreateUserRequestBodyArg } from "../managers/users.generated.js";
import { deserializeCreateUserRequestBodyArg } from "../managers/users.generated.js";
import { serializeGroupMemberships } from "../schemas.generated.js";
import { deserializeGroupMemberships } from "../schemas.generated.js";
import { serializeGroup } from "../schemas.generated.js";
import { deserializeGroup } from "../schemas.generated.js";
import { serializeCreateGroupRequestBodyArg } from "../managers/groups.generated.js";
import { deserializeCreateGroupRequestBodyArg } from "../managers/groups.generated.js";
import { serializeGroupMembership } from "../schemas.generated.js";
import { deserializeGroupMembership } from "../schemas.generated.js";
import { serializeCreateGroupMembershipRequestBodyArg } from "../managers/memberships.generated.js";
import { deserializeCreateGroupMembershipRequestBodyArg } from "../managers/memberships.generated.js";
import { serializeUpdateGroupMembershipByIdRequestBodyArg } from "../managers/memberships.generated.js";
import { deserializeUpdateGroupMembershipByIdRequestBodyArg } from "../managers/memberships.generated.js";
import { serializeUpdateGroupMembershipByIdRequestBodyArgRoleField } from "../managers/memberships.generated.js";
import { deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField } from "../managers/memberships.generated.js";
import { User } from "../schemas.generated.js";
import { CreateUserRequestBodyArg } from "../managers/users.generated.js";
import { GroupMemberships } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { CreateGroupRequestBodyArg } from "../managers/groups.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { CreateGroupMembershipRequestBodyArg } from "../managers/memberships.generated.js";
import { UpdateGroupMembershipByIdRequestBodyArg } from "../managers/memberships.generated.js";
import { UpdateGroupMembershipByIdRequestBodyArgRoleField } from "../managers/memberships.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testMemberships", async function testMemberships(): Promise<any> {
    const user: any = await client.users.createUser({ name: getUuid(), login: "".concat(getUuid(), "@boxdemo.com") as string } satisfies CreateUserRequestBodyArg);
    const userMemberships: any = await client.memberships.getUserMemberships(user.id);
    if (!(userMemberships.totalCount == 0)) {
        throw "Assertion failed";
    }
    const group: any = await client.groups.createGroup({ name: getUuid() } satisfies CreateGroupRequestBodyArg);
    const groupMemberships: any = await client.memberships.getGroupMemberships(group.id);
    if (!(groupMemberships.totalCount == 0)) {
        throw "Assertion failed";
    }
    const groupMembership: any = await client.memberships.createGroupMembership({ user: user, group: group } satisfies CreateGroupMembershipRequestBodyArg);
    if (!(groupMembership.user.id == user.id)) {
        throw "Assertion failed";
    }
    if (!(groupMembership.group.id == group.id)) {
        throw "Assertion failed";
    }
    if (!(groupMembership.role == "member")) {
        throw "Assertion failed";
    }
    if (!await client.memberships.getGroupMembershipById(groupMembership.id)) {
        throw "Assertion failed";
    }
    const updatedGroupMembership: any = await client.memberships.updateGroupMembershipById(groupMembership.id, { role: "admin" as UpdateGroupMembershipByIdRequestBodyArgRoleField } satisfies UpdateGroupMembershipByIdRequestBodyArg);
    if (!(updatedGroupMembership.id == groupMembership.id)) {
        throw "Assertion failed";
    }
    if (!(updatedGroupMembership.role == "admin")) {
        throw "Assertion failed";
    }
    await client.memberships.deleteGroupMembershipById(groupMembership.id)
    expect(async () => { await client.memberships.getGroupMembershipById(groupMembership.id); }).rejects.toThrow();
    await client.groups.deleteGroupById(group.id)
    await client.users.deleteUserById(user.id)
});
export {};