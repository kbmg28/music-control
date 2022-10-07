/**
 * HammerOn API: Easy control the band's songs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.7
 * Contact: kb.developer.br@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MusicLinkDto } from './musicLinkDto';
import { SingerDto } from './singerDto';

export interface MusicFullWithOrderDto {
    id?: string;
    links?: Array<MusicLinkDto>;
    musicStatus: MusicFullWithOrderDto.MusicStatusEnum;
    name: string;
    sequentialOrder?: number;
    singer: SingerDto;
}
export namespace MusicFullWithOrderDto {
    export type MusicStatusEnum = 'DISABLED' | 'ENABLED' ;
    export const MusicStatusEnum = {
        DISABLED: 'DISABLED' as MusicStatusEnum,
        ENABLED: 'ENABLED' as MusicStatusEnum
    };
}
