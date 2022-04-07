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
import { MusicFullWithOrderDto } from './musicFullWithOrderDto';
import { UserDto } from './userDto';

export interface EventDetailsDto { 
    date?: string;
    id?: string;
    musicList?: Array<MusicFullWithOrderDto>;
    name?: string;
    time?: string;
    userList?: Array<UserDto>;
}