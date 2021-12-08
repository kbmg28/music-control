/**
 * HammerOn API: Easy control the band's songs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.4
 * Contact: kb.developer.br@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface UserWithPermissionDto { 
    cellPhone?: string;
    email?: string;
    id?: string;
    name?: string;
    permissionList?: Array<UserWithPermissionDto.PermissionListEnum>;
}
export namespace UserWithPermissionDto {
    export type PermissionListEnum = 'PARTICIPANT' | 'SPACE_OWNER';
    export const PermissionListEnum = {
        PARTICIPANT: 'PARTICIPANT' as PermissionListEnum,
        SPACEOWNER: 'SPACE_OWNER' as PermissionListEnum
    };
}