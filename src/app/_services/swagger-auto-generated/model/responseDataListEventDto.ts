/**
 * API for controlling church music
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.3
 * Contact: kb.developer.br@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EventDto } from './eventDto';
import { ResponseError } from './responseError';

export interface ResponseDataListEventDto { 
    content?: Array<EventDto>;
    error?: ResponseError;
}