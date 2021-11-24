/**
 * API for controlling church music
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.4
 * Contact: kb.developer.br@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ResponseDataListUserOnlyIdNameAndEmailDto } from '../model/responseDataListUserOnlyIdNameAndEmailDto';
import { ResponseDataSetUserDto } from '../model/responseDataSetUserDto';
import { ResponseDataSetUserWithPermissionDto } from '../model/responseDataSetUserWithPermissionDto';
import { ResponseDataUserWithPermissionDto } from '../model/responseDataUserWithPermissionDto';
import { ResponseDataVoid } from '../model/responseDataVoid';
import { UserDto } from '../model/userDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * addPermission
     * 
     * @param spaceId space-id
     * @param emailUser email-user
     * @param permissionKey permission-key
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPermissionUsingPOST(spaceId: string, emailUser: string, permissionKey: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataVoid>;
    public addPermissionUsingPOST(spaceId: string, emailUser: string, permissionKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataVoid>>;
    public addPermissionUsingPOST(spaceId: string, emailUser: string, permissionKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataVoid>>;
    public addPermissionUsingPOST(spaceId: string, emailUser: string, permissionKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling addPermissionUsingPOST.');
        }

        if (emailUser === null || emailUser === undefined) {
            throw new Error('Required parameter emailUser was null or undefined when calling addPermissionUsingPOST.');
        }

        if (permissionKey === null || permissionKey === undefined) {
            throw new Error('Required parameter permissionKey was null or undefined when calling addPermissionUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseDataVoid>('post',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users/${encodeURIComponent(String(emailUser))}/permissions/${encodeURIComponent(String(permissionKey))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllByPermission
     * 
     * @param spaceId space-id
     * @param permissionKey permission-key
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllByPermissionUsingGET(spaceId: string, permissionKey: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataSetUserDto>;
    public findAllByPermissionUsingGET(spaceId: string, permissionKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataSetUserDto>>;
    public findAllByPermissionUsingGET(spaceId: string, permissionKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataSetUserDto>>;
    public findAllByPermissionUsingGET(spaceId: string, permissionKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling findAllByPermissionUsingGET.');
        }

        if (permissionKey === null || permissionKey === undefined) {
            throw new Error('Required parameter permissionKey was null or undefined when calling findAllByPermissionUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseDataSetUserDto>('get',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users/permissions/${encodeURIComponent(String(permissionKey))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllBySpace
     * 
     * @param spaceId space-id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllBySpaceUsingGET(spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataSetUserWithPermissionDto>;
    public findAllBySpaceUsingGET(spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataSetUserWithPermissionDto>>;
    public findAllBySpaceUsingGET(spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataSetUserWithPermissionDto>>;
    public findAllBySpaceUsingGET(spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling findAllBySpaceUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseDataSetUserWithPermissionDto>('get',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findUserLogged
     * 
     * @param spaceId space-id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUserLoggedUsingGET(spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataUserWithPermissionDto>;
    public findUserLoggedUsingGET(spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataUserWithPermissionDto>>;
    public findUserLoggedUsingGET(spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataUserWithPermissionDto>>;
    public findUserLoggedUsingGET(spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling findUserLoggedUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseDataUserWithPermissionDto>('get',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users/logged`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findUsersAssociationForEventsBySpace
     * 
     * @param spaceId space-id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsersAssociationForEventsBySpaceUsingGET(spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataListUserOnlyIdNameAndEmailDto>;
    public findUsersAssociationForEventsBySpaceUsingGET(spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataListUserOnlyIdNameAndEmailDto>>;
    public findUsersAssociationForEventsBySpaceUsingGET(spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataListUserOnlyIdNameAndEmailDto>>;
    public findUsersAssociationForEventsBySpaceUsingGET(spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling findUsersAssociationForEventsBySpaceUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseDataListUserOnlyIdNameAndEmailDto>('get',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users/association-for-events`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateUserLogged
     * 
     * @param spaceId space-id
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserLoggedUsingPUT(spaceId: string, body?: UserDto, observe?: 'body', reportProgress?: boolean): Observable<ResponseDataUserWithPermissionDto>;
    public updateUserLoggedUsingPUT(spaceId: string, body?: UserDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseDataUserWithPermissionDto>>;
    public updateUserLoggedUsingPUT(spaceId: string, body?: UserDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseDataUserWithPermissionDto>>;
    public updateUserLoggedUsingPUT(spaceId: string, body?: UserDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling updateUserLoggedUsingPUT.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (language) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["language"]) {
            queryParameters = queryParameters.set('language', this.configuration.apiKeys["language"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ResponseDataUserWithPermissionDto>('put',`${this.basePath}/api/spaces/${encodeURIComponent(String(spaceId))}/users/logged`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
